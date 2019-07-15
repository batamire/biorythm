import React from "react";
import styled from "@emotion/styled";
import { cycleColor } from "../../helpers/biorythm";

const FlexWrap = styled.div`
  display: flex;
  align-items: center;
`;

const Circle = styled.div`
  height: 30px;
  width: 30px;
  margin-right: 0.5rem;
  background-color: ${props => props.color};
  border-radius: 50%;
`;

const LegendEntity = ({ type }: { type: string }) => (
  <FlexWrap style={{ marginRight: "0.5rem" }}>
    <Circle color={cycleColor(type)} />
    <span>{type}</span>
  </FlexWrap>
);

const Legend = ({ types }: { types: string[] }) => (
  <FlexWrap style={{ marginTop: "1rem" }}>
    {types.map(type => (
      <LegendEntity type={type} key={type} />
    ))}
  </FlexWrap>
);

export default Legend;
