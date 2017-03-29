const styled = require("styled-components");

const { css } = styled;

const xs = 0;
const sm = 576;
const md = 768;
const lg = 992;
const xl = 1200;

module.exports.breakpoints = {
  xs: `${xs}px`,
  sm: `${sm}px`,
  md: `${md}px`,
  lg: `${lg}px`,
  xl: `${xl}px`,
};

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

module.exports.mediaBreakpointBetween = mediaBreakpointBetween;

module.exports.mediaBreakpointUpSm = (...args) => mediaBreakpointUp(sm)(css(...args));
module.exports.mediaBreakpointUpMd = (...args) => mediaBreakpointUp(md)(css(...args));
module.exports.mediaBreakpointUpLg = (...args) => mediaBreakpointUp(lg)(css(...args));
module.exports.mediaBreakpointUpXl = (...args) => mediaBreakpointUp(xl)(css(...args));

module.exports.mediaBreakpointDownXs = (...args) => mediaBreakpointDown(sm)(css(...args));
module.exports.mediaBreakpointDownSm = (...args) => mediaBreakpointDown(md)(css(...args));
module.exports.mediaBreakpointDownMd = (...args) => mediaBreakpointDown(lg)(css(...args));
module.exports.mediaBreakpointDownLg = (...args) => mediaBreakpointDown(xl)(css(...args));

module.exports.mediaBreakpointOnlyXs = (...args) => mediaBreakpointDown(sm)(css(...args));
module.exports.mediaBreakpointOnlySm = (...args) => mediaBreakpointBetween(sm, md)(css(...args));
module.exports.mediaBreakpointOnlyMd = (...args) => mediaBreakpointBetween(md, lg)(css(...args));
module.exports.mediaBreakpointOnlyLg = (...args) => mediaBreakpointBetween(lg, xl)(css(...args));
module.exports.mediaBreakpointOnlyXl = (...args) => mediaBreakpointUp(xl)(css(...args));
