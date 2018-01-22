# styled-bootstrap-responsive-breakpoints

> [Bootstraps](https://v4-alpha.getbootstrap.com)
[Responsive Breakpoints](https://v4-alpha.getbootstrap.com/layout/overview/#responsive-breakpoints)
as functions for [styled-components](https://github.com/styled-components/styled-components)
(and [other CSS-in-JS techniques](https://github.com/MicheleBertoli/css-in-js)).

## Install

``` bash
yarn add styled-components styled-bootstrap-responsive-breakpoints

# or

npm install styled-components styled-bootstrap-responsive-breakpoints --save
```

## Usage

``` js
import { mediaBreakpointOnlyXl } from "styled-bootstrap-responsive-breakpoints";

const foobar = styled.div`
  background-color: red;

  ${mediaBreakpointOnlyXl`
    background-color: blue;
  `}
`
```

## API

Following media query ranges and/or breakpoints are available:

### List
- `mediaBreakpointBetween`
- `mediaBreakpointUpSm`
- `mediaBreakpointUpMd`
- `mediaBreakpointUpLg`
- `mediaBreakpointUpXl`
- `mediaBreakpointDownXs`
- `mediaBreakpointDownSm`
- `mediaBreakpointDownMd`
- `mediaBreakpointDownLg`
- `mediaBreakpointOnlyXs`
- `mediaBreakpointOnlySm`
- `mediaBreakpointOnlyMd`
- `mediaBreakpointOnlyLg`
- `mediaBreakpointOnlyXl`
- `breakpoints`

#### `mediaBreakpointUpSm`

Small devices (landscape phones, 576px and up)

``` js
import { mediaBreakpointUpSm } from "styled-bootstrap-responsive-breakpoints";

const foobar = styled.div`  
  ${mediaBreakpointUpSm`
    background-color: blue;
  `}
`

// turns into

const foobar = styled.div`  
  @media (min-width: 576px) {
    background-color: blue;
  }
`
```

#### `mediaBreakpointUpMd`

Medium devices (tablets, 768px and up)

``` js
import { mediaBreakpointUpMd } from "styled-bootstrap-responsive-breakpoints";

const foobar = styled.div`  
  ${mediaBreakpointUpMd`
    background-color: blue;
  `}
`

// turns into

const foobar = styled.div`  
  @media (min-width: 768px) {
    background-color: blue;
  }
`
```

#### `mediaBreakpointUpLg`

Large devices (desktops, 992px and up)

``` js
import { mediaBreakpointUpLg } from "styled-bootstrap-responsive-breakpoints";

const foobar = styled.div`  
  ${mediaBreakpointUpLg`
    background-color: blue;
  `}
`

// turns into

const foobar = styled.div`  
  @media (min-width: 992px) {
    background-color: blue;
  }
`
```

#### `mediaBreakpointUpXl`

Extra large devices (large desktops, 1200px and up)

``` js
import { mediaBreakpointUpXl } from "styled-bootstrap-responsive-breakpoints";

const foobar = styled.div`  
  ${mediaBreakpointUpXl`
    background-color: blue;
  `}
`

// turns into

const foobar = styled.div`  
  @media (min-width: 1200px) {
    background-color: blue;
  }
`
```

#### `mediaBreakpointDownXs`

Extra small devices (portrait phones, less than 576px)

``` js
import { mediaBreakpointDownXs } from "styled-bootstrap-responsive-breakpoints";

const foobar = styled.div`  
  ${mediaBreakpointDownXs`
    background-color: blue;
  `}
`

// turns into

const foobar = styled.div`  
  @media (max-width: 575px) {
    background-color: blue;
  }
`
```

#### `mediaBreakpointDownSm`

Small devices (landscape phones, less than 768px)

``` js
import { mediaBreakpointDownXs } from "styled-bootstrap-responsive-breakpoints";

const foobar = styled.div`  
  ${mediaBreakpointDownXs`
    background-color: blue;
  `}
`

// turns into

const foobar = styled.div`  
  @media (max-width: 767px) {
    background-color: blue;
  }
`
```

#### `mediaBreakpointDownMd`

Medium devices (tablets, less than 992px)

``` js
import { mediaBreakpointDownXs } from "styled-bootstrap-responsive-breakpoints";

const foobar = styled.div`  
  ${mediaBreakpointDownXs`
    background-color: blue;
  `}
`

// turns into

const foobar = styled.div`  
  @media (max-width: 991px) {
    background-color: blue;
  }
`
```

#### `mediaBreakpointDownLg`

Large devices (desktops, less than 1200px)

``` js
import { mediaBreakpointDownLg } from "styled-bootstrap-responsive-breakpoints";

const foobar = styled.div`  
  ${mediaBreakpointDownXs`
    background-color: blue;
  `}
`

// turns into

const foobar = styled.div`  
  @media (max-width: 1199px) {
    background-color: blue;
  }
`
```

#### `mediaBreakpointOnlyXs`

Extra small devices (portrait phones, less than 576px)

``` js
import { mediaBreakpointOnlyXs } from "styled-bootstrap-responsive-breakpoints";

const foobar = styled.div`  
  ${mediaBreakpointOnlyXs`
    background-color: blue;
  `}
`

// turns into

const foobar = styled.div`  
  @media (max-width: 575px) {
    background-color: blue;
  }
`
```

#### `mediaBreakpointOnlySm`

Small devices (landscape phones, 576px and up)

``` js
import { mediaBreakpointOnlySm } from "styled-bootstrap-responsive-breakpoints";

const foobar = styled.div`  
  ${mediaBreakpointOnlySm`
    background-color: blue;
  `}
`

// turns into

const foobar = styled.div`  
  @media (min-width: 576px) and (max-width: 767px) {
    background-color: blue;
  }
`
```

#### `mediaBreakpointOnlyMd`

Medium devices (tablets, 768px and up)

``` js
import { mediaBreakpointOnlyMd } from "styled-bootstrap-responsive-breakpoints";

const foobar = styled.div`  
  ${mediaBreakpointOnlyMd`
    background-color: blue;
  `}
`

// turns into

const foobar = styled.div`  
  @media (min-width: 768px) and (max-width: 991px) {
    background-color: blue;
  }
`
```

#### `mediaBreakpointOnlyLg`

Large devices (desktops, 992px and up)

``` js
import { mediaBreakpointOnlyLg } from "styled-bootstrap-responsive-breakpoints";

const foobar = styled.div`  
  ${mediaBreakpointOnlyLg`
    background-color: blue;
  `}
`

// turns into

const foobar = styled.div`  
  @media (min-width: 992px) and (max-width: 1199px) {
    background-color: blue;
  }
`
```

#### `mediaBreakpointOnlyXl`

Extra large devices (large desktops, 1200px and up)

``` js
import { mediaBreakpointOnlyXl } from "styled-bootstrap-responsive-breakpoints";

const foobar = styled.div`  
  ${mediaBreakpointOnlyXl`
    background-color: blue;
  `}
`

// turns into

const foobar = styled.div`  
  @media (min-width: 1200px) {
    background-color: blue;
  }
`
```

#### `mediaBreakpointBetween`

Media queries may span multiple breakpoint widths:

``` js
import {
  breakpoints,
  mediaBreakpointBetween
} from "styled-bootstrap-responsive-breakpoints";

const foobar = styled.div`  
  ${mediaBreakpointBetween(breakpoints.md, breakpoints.xl)`
    background-color: blue;
  `}
`

// turns into

const foobar = styled.div`  
  @media (min-width: 768px) and (max-width: 1199px) {
    background-color: blue;
  }
`
```

#### `breakpoints`

Object of Bootstraps [default grid breakpoints](https://v4-alpha.getbootstrap.com/layout/grid/#grid-options)

``` js
import { breakpoints } from "styled-bootstrap-responsive-breakpoints";

console.log(breakpoints);

/*
outputs:
{
  xs: "0px",
  sm: "576px",
  md: "768px",
  lg: "992px",
  xl: "1200px",
};
*/
```

#### Unitless breakpoints

You can also import the unitless breakpoints

``` js
import { xs, sm, md, lg, xl } from "styled-bootstrap-responsive-breakpoints";
```

# License

MIT
