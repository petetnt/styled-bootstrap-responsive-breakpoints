import { css } from "styled-components";

const xs = 0;
const sm = 576;
const md = 768;
const lg = 992;
const xl = 1200;

const mediaBreakpointUp = size => styles => css`
@media (min-width: ${size}px) {
  ${styles}
};`;

const mediaBreakpointDown = size => styles => css`
@media (max-width: ${size - 1}px) {
  ${styles}
};`;

const mediaBreakpointBetween = (min, max) => styles => css`
@media (min-width: ${min}px) and (max-width: ${max - 1}px) {
  ${styles}
};`;

export const breakpoints = {
  xs: `${xs}px`,
  sm: `${sm}px`,
  md: `${md}px`,
  lg: `${lg}px`,
  xl: `${xl}px`,
};

export const mediaBreakpointUpSm = (...args) => mediaBreakpointUp(sm)(css(...args));
export const mediaBreakpointUpMd = (...args) => mediaBreakpointUp(md)(css(...args));
export const mediaBreakpointUpLg = (...args) => mediaBreakpointUp(lg)(css(...args));
export const mediaBreakpointUpXl = (...args) => mediaBreakpointUp(xl)(css(...args));

export const mediaBreakpointDownXs = (...args) => mediaBreakpointDown(sm)(css(...args));
export const mediaBreakpointDownSm = (...args) => mediaBreakpointDown(md)(css(...args));
export const mediaBreakpointDownMd = (...args) => mediaBreakpointDown(lg)(css(...args));
export const mediaBreakpointDownLg = (...args) => mediaBreakpointDown(xl)(css(...args));
export const mediaBreakpointOnlyXs = (...args) => mediaBreakpointDown(sm)(css(...args));

export const mediaBreakpointOnlySm = (...args) => mediaBreakpointBetween(sm, md)(css(...args));
export const mediaBreakpointOnlyMd = (...args) => mediaBreakpointBetween(md, lg)(css(...args));
export const mediaBreakpointOnlyLg = (...args) => mediaBreakpointBetween(lg, xl)(css(...args));

export const mediaBreakpointOnlyXl = (...args) => mediaBreakpointUp(xl)(css(...args));
