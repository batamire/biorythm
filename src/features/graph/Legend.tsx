import React from "react";
import styled from "@emotion/styled";
import { cycleColor } from "../../helpers/biorythm";
import Label from "./Label";

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

interface LegendEntityProps {
  type: string;
  value: number;
}

interface LegendProps {
  data: {
    [key: string]: number;
  };
}

const LegendEntity = ({ type, value }: LegendEntityProps) => (
  <FlexWrap style={{ marginRight: "0.5rem" }}>
    <Circle color={cycleColor(type)} />
    <Label type={type} value={value} />
  </FlexWrap>
);

const Legend = ({ data }: LegendProps) => (
  <FlexWrap style={{ marginTop: "1rem" }}>
    {Object.keys(data).map(type => (
      <LegendEntity type={type} value={data[type]} key={type} />
    ))}
  </FlexWrap>
);

export default Legend;
