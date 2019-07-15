import React from "react";
import { RouteComponentProps } from "@reach/router";
import { Query } from "react-apollo";
import { GET_PEOPLE } from "../../constants/people";
import Header from "../../components/Header";
import Form from "./Form";

interface PeopleData {
  people: Array<{ id: number; name: string }>;
}

interface DashboardProps extends RouteComponentProps {}

const Dashboard = (props: DashboardProps) => (
  <div>
    <Header title="Biorythm" />
    <Form />
    <Query<PeopleData> query={GET_PEOPLE}>
      {({ data, error }) => {
        if (error) return <p>{error.message}</p>;
        console.log("data", data);

        return (
          data &&
          data.people.map(p => {
            return <div key={p.id}>{p.name}</div>;
          })
        );
      }}
    </Query>
  </div>
);

export default Dashboard;
