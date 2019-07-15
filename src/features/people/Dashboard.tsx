import React from "react";
import { Link, RouteComponentProps } from "@reach/router";
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
      {({ data, loading, error }) => {
        if (loading) return <p>Loading</p>;
        if (error) return <p>{error.message}</p>;
        return (
          <ul>
            {data!.people.slice(0, 10).map(p => {
              return (
                <li key={p.id}>
                  <Link to={`/graph/${p.id}`}>
                    {p.name} - {p.birthday}
                  </Link>
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
