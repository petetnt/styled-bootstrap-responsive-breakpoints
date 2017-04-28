import React from "react";
import styled from "styled-components";
import renderer from "react-test-renderer";
import { matcher, serializer } from "jest-styled-components";

import {
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
} from "./index";

expect.addSnapshotSerializer(serializer);
expect.extend(matcher);

const componentFactory = (mediaQuery) => {
  const colorBlue = 'blue';

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

test("It should export bootstrap breakpoints", () => {
  const {
    xs, sm, md, lg, xl,
  } = breakpoints;

  expect(xs).toEqual("0px");
  expect(sm).toEqual("576px");
  expect(md).toEqual("768px");
  expect(lg).toEqual("992px");
  expect(xl).toEqual("1200px");
});

test("It should match the mediaBreakpointUpSm snapshot", () => {
  const tree = componentFactory(mediaBreakpointUpSm);
  expect(tree).toMatchStyledComponentsSnapshot();
});

test("It should match the mediaBreakpointUpMd snapshot", () => {
  const tree = componentFactory(mediaBreakpointUpMd);
  expect(tree).toMatchStyledComponentsSnapshot();
});

test("It should match the mediaBreakpointUpLg snapshot", () => {
  const tree = componentFactory(mediaBreakpointUpLg);
  expect(tree).toMatchStyledComponentsSnapshot();
});

test("It should match the mediaBreakpointUpXl snapshot", () => {
  const tree = componentFactory(mediaBreakpointUpXl);
  expect(tree).toMatchStyledComponentsSnapshot();
});

test("It should match the mediaBreakpointDownXs snapshot", () => {
  const tree = componentFactory(mediaBreakpointDownXs);
  expect(tree).toMatchStyledComponentsSnapshot();
});

test("It should match the mediaBreakpointDowSm snapshot", () => {
  const tree = componentFactory(mediaBreakpointDownSm);
  expect(tree).toMatchStyledComponentsSnapshot();
});

test("It should match the mediaBreakpointDownMd snapshot", () => {
  const tree = componentFactory(mediaBreakpointDownMd);
  expect(tree).toMatchStyledComponentsSnapshot();
});

test("It should match the mediaBreakpointDownLg snapshot", () => {
  const tree = componentFactory(mediaBreakpointDownLg);
  expect(tree).toMatchStyledComponentsSnapshot();
});

test("It should match the mediaBreakpointOnlyXs snapshot", () => {
  const tree = componentFactory(mediaBreakpointOnlyXs);
  expect(tree).toMatchStyledComponentsSnapshot();
});

test("It should match the mediaBreakpointOnlySm snapshot", () => {
  const tree = componentFactory(mediaBreakpointOnlySm);
  expect(tree).toMatchStyledComponentsSnapshot();
});

test("It should match the mediaBreakpointOnlyMd snapshot", () => {
  const tree = componentFactory(mediaBreakpointOnlyMd);
  expect(tree).toMatchStyledComponentsSnapshot();
});

test("It should match the mediaBreakpointOnlyLg snapshot", () => {
  const tree = componentFactory(mediaBreakpointOnlyLg);
  expect(tree).toMatchStyledComponentsSnapshot();
});

test("It should match the mediaBreakpointOnlyXl snapshot", () => {
  const tree = componentFactory(mediaBreakpointOnlyXl);
  expect(tree).toMatchStyledComponentsSnapshot();
});

test("It should match the mediaBreakpointBetween snapshot", () => {
  const tree = componentFactory(mediaBreakpointBetween(100, 200));
  expect(tree).toMatchStyledComponentsSnapshot();
});
