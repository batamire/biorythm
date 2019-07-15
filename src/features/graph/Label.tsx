import React from "react";
import styled from "@emotion/styled";

const Divider = styled.span`
  color: #666;
  &:before {
    content: "@";
    display: inline-block;
    transform: scale(1.25);
  }
`;

const Label = ({ type, value }: { type: string; value: number }) => (
  <span>
    {type} <Divider /> {Math.round(value)}%
  </span>
);

export default Label;
