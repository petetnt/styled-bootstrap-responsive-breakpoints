import React from "react";
import styled from "styled-components";
import renderer from "react-test-renderer";
import "jest-styled-components";

import {
  xs, sm, md, lg, xl,
  breakpoints,

  mediaBreakpointUpSm,
  mediaBreakpointUpMd,
  mediaBreakpointUpLg,
  mediaBreakpointUpXl,

  mediaBreakpointDownXs,
  mediaBreakpointDownSm,
  mediaBreakpointDownMd,
  mediaBreakpointDownLg,

  mediaBreakpointOnlyXs,
  mediaBreakpointOnlySm,
  mediaBreakpointOnlyMd,
  mediaBreakpointOnlyLg,
  mediaBreakpointOnlyXl,

  mediaBreakpointBetween,
} from "./index.es5";

const componentFactory = (mediaQuery) => {
  const colorBlue = "blue";

  const Wrapper = styled.section`
    padding: 4em;
    background: papayawhip;
  `;

  const Title = styled.h1`
    ${mediaQuery`
      color: ${colorBlue};
    `}
  `;

  const tree = renderer.create(
    <Wrapper>
      <Title>Hello World!</Title>
    </Wrapper>,
  ).toJSON();

  return tree;
};

test("It should export unitless breakpoints", () => {
  expect(xs).toEqual(0);
  expect(sm).toEqual(576);
  expect(md).toEqual(768);
  expect(lg).toEqual(992);
  expect(xl).toEqual(1200);
});

test("It should export bootstrap breakpoints", () => {
  const {
    xs: bxs, sm: bsm, md: bmd, lg: blg, xl: bxl,
  } = breakpoints;

  expect(bxs).toEqual("0px");
  expect(bsm).toEqual("576px");
  expect(bmd).toEqual("768px");
  expect(blg).toEqual("992px");
  expect(bxl).toEqual("1200px");
});

test("It should match the mediaBreakpointUpSm snapshot", () => {
  const tree = componentFactory(mediaBreakpointUpSm);
  expect(tree).toMatchSnapshot();
});

test("It should match the mediaBreakpointUpMd snapshot", () => {
  const tree = componentFactory(mediaBreakpointUpMd);
  expect(tree).toMatchSnapshot();
});

test("It should match the mediaBreakpointUpLg snapshot", () => {
  const tree = componentFactory(mediaBreakpointUpLg);
  expect(tree).toMatchSnapshot();
});

test("It should match the mediaBreakpointUpXl snapshot", () => {
  const tree = componentFactory(mediaBreakpointUpXl);
  expect(tree).toMatchSnapshot();
});

test("It should match the mediaBreakpointDownXs snapshot", () => {
  const tree = componentFactory(mediaBreakpointDownXs);
  expect(tree).toMatchSnapshot();
});

test("It should match the mediaBreakpointDowSm snapshot", () => {
  const tree = componentFactory(mediaBreakpointDownSm);
  expect(tree).toMatchSnapshot();
});

test("It should match the mediaBreakpointDownMd snapshot", () => {
  const tree = componentFactory(mediaBreakpointDownMd);
  expect(tree).toMatchSnapshot();
});

test("It should match the mediaBreakpointDownLg snapshot", () => {
  const tree = componentFactory(mediaBreakpointDownLg);
  expect(tree).toMatchSnapshot();
});

test("It should match the mediaBreakpointOnlyXs snapshot", () => {
  const tree = componentFactory(mediaBreakpointOnlyXs);
  expect(tree).toMatchSnapshot();
});

test("It should match the mediaBreakpointOnlySm snapshot", () => {
  const tree = componentFactory(mediaBreakpointOnlySm);
  expect(tree).toMatchSnapshot();
});

test("It should match the mediaBreakpointOnlyMd snapshot", () => {
  const tree = componentFactory(mediaBreakpointOnlyMd);
  expect(tree).toMatchSnapshot();
});

test("It should match the mediaBreakpointOnlyLg snapshot", () => {
  const tree = componentFactory(mediaBreakpointOnlyLg);
  expect(tree).toMatchSnapshot();
});

test("It should match the mediaBreakpointOnlyXl snapshot", () => {
  const tree = componentFactory(mediaBreakpointOnlyXl);
  expect(tree).toMatchSnapshot();
});

test("It should match the mediaBreakpointBetween snapshot", () => {
  const tree = componentFactory(mediaBreakpointBetween(100, 200));
  expect(tree).toMatchSnapshot();
});
