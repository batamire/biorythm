import React from "react";
import { ApolloError } from "apollo-boost";

export { default as Header } from "./Header";
export { default as Link } from "./Link";
export { default as FancyDate } from "./FancyDate";

export const Loading = () => <p>Loading...</p>;
export const Error = ({ error }: { error: ApolloError }) => (
  <p>{error.message} </p>
);
