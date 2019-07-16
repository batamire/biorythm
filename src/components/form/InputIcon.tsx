import React, { ImgHTMLAttributes } from "react";
import styled from "@emotion/styled";

const StyledImg = styled.img`
  width: 42px;
  height: 42px;
  padding: 0.375rem;
  background: #ccc;
  border-radius: 4px 0 0 4px;
  + input {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
`;

const InputIcon = (props: ImgHTMLAttributes<HTMLImageElement>) => (
  <StyledImg {...props} />
);

export default InputIcon;
