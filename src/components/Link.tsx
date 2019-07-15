// import React from 'react';
import { Link } from "@reach/router";
import styled from "@emotion/styled";

const StyledLink = styled(Link)`
  display: inline-block;
  margin-bottom: 1rem;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export default StyledLink;
