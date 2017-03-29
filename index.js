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

const mediaBreakpointUp = size => css => (
`@media (min-width: ${size}px) {
  ${css}
};`);

const mediaBreakpointDown = size => css => (
`@media (max-width: ${size - 1}px) {
  ${css}
};`);

const mediaBreakpointBetween = (min, max) => css => (
`@media (min-width: ${min}px) and (max-width: ${max - 1}px) {
  ${css}
};`);

module.exports.mediaBreakpointBetween = mediaBreakpointBetween;

module.exports.mediaBreakpointUpSm = css => mediaBreakpointUp(sm)(css);
module.exports.mediaBreakpointUpMd = css => mediaBreakpointUp(md)(css);
module.exports.mediaBreakpointUpLg = css => mediaBreakpointUp(lg)(css);
module.exports.mediaBreakpointUpXl = css => mediaBreakpointUp(xl)(css);

module.exports.mediaBreakpointDownXs = css => mediaBreakpointDown(sm)(css);
module.exports.mediaBreakpointDownSm = css => mediaBreakpointDown(md)(css);
module.exports.mediaBreakpointDownMd = css => mediaBreakpointDown(lg)(css);
module.exports.mediaBreakpointDownLg = css => mediaBreakpointDown(xl)(css);

module.exports.mediaBreakpointOnlyXs = css => mediaBreakpointDown(sm)(css);
module.exports.mediaBreakpointOnlySm = css => mediaBreakpointBetween(sm, md)(css);
module.exports.mediaBreakpointOnlyMd = css => mediaBreakpointBetween(md, lg)(css);
module.exports.mediaBreakpointOnlyLg = css => mediaBreakpointBetween(lg, xl)(css);
module.exports.mediaBreakpointOnlyXl = css => mediaBreakpointUp(xl)(css);
