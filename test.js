import React from "react";
import styled from "styled-components";
import renderer from "react-test-renderer";
import { matcher, serializer } from "jest-styled-components";

import { mediaBreakpointUpSm } from "./index";

expect.addSnapshotSerializer(serializer);
expect.extend(matcher);

test("It should match the mediaBreakpointUpSm snapshot", () => {
  const Wrapper = styled.section`
    padding: 4em;
    background: papayawhip;
  `;

  const Title = styled.h1`
    ${mediaBreakpointUpSm`
      color: blue;
    `}
  `;

  const tree = renderer.create(
    <Wrapper>
      <Title>Hello World, this is my worst styled component!</Title>
    </Wrapper>,
  ).toJSON();

  expect(tree).toMatchStyledComponentsSnapshot();
});

test("It should handle inline style objects snapshot", () => {
  const color = "red";
  const fontFamily = "'Comic Sans'";
  const Wrapper = styled.section`
    padding: 4em;
    background: papayawhip;
  `;

  const Title = styled.h1`
    ${mediaBreakpointUpSm`
      color: ${color};

      &:hover {
        font-family: ${fontFamily};
      }
    `}
  `;

  const tree = renderer.create(
    <Wrapper>
      <Title>Hello World, this is my worst styled component!</Title>
    </Wrapper>,
  ).toJSON();

  expect(tree).toMatchStyledComponentsSnapshot();
});
