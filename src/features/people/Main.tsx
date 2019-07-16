import React from "react";
import { RouteComponentProps } from "@reach/router";
import Header from "../../components/Header";
import { Form, Entries } from "./";

interface DashboardProps extends RouteComponentProps {}

const Main = (props: DashboardProps) => (
  <>
    <Header title="Biorythm" />
    <Form />
    <Entries />
  </>
);

export default Main;
