import React from "react";
import { RouteComponentProps } from "@reach/router";
import { Query } from "react-apollo";
import { GET_PEOPLE, People } from "../../constants/people";
import Header from "../../components/Header";
import Form from "./Form";

interface DashboardProps extends RouteComponentProps {}

const Dashboard = (props: DashboardProps) => (
  <>
    <Header title="Biorythm" />
    <Form />

    <h2>Last 10 entries</h2>
    <Query<People> query={GET_PEOPLE}>
      {({ data, error }) => {
        if (error) return <p>{error.message}</p>;
        console.log("data", data);

        return (
          <ul>
            {data!.people.slice(0, 10).map(p => {
              return (
                <li key={p.id}>
                  {p.name} - {p.birthday}
                </li>
              );
            })}
          </ul>
        );
      }}
    </Query>
  </>
);

export default Dashboard;
