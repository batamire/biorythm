import React from "react";
import styled from "@emotion/styled";

interface HeaderProps {
  title: string;
}

const H1 = styled.h1`
  position: relative;
  margin: 0 0 1.5rem;
  padding-bottom: 1.5rem;
  font-size: 2rem;
  font-weight: bold;
  line-height: 1.1;
  color: #444;

  &:before,
  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 44px;
    border-bottom: 0.25rem solid #2970a7;
  }
  &:before {
    width: calc(44px + 44px * 1.618);
    border-bottom: 0.25rem solid #dee2e6;
  }
`;

const Header = ({ title }: HeaderProps) => <H1>{title}</H1>;

export default Header;
