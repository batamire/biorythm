import React from "react";
import { RouteComponentProps } from "@reach/router";
import { Query } from "react-apollo";
import { GET_PERSON, Person } from "../../constants/people";
import Header from "../../components/Header";
import Link from "../../components/Link";
import Chart from "./Chart";

interface GraphProps
  extends RouteComponentProps<{
    id: string;
  }> {}

interface QueryProp {
  person: Person;
}

const Graph = (props: GraphProps) => (
  <Query<QueryProp> query={GET_PERSON} variables={{ id: props.id }}>
    {({ data, loading, error }) => {
      if (loading) return <p>Loading</p>;
      if (error) return <p>{error.message}</p>;
      return (
        <>
          <Link to="/">&larr; People</Link>
          <Header title={`${data!.person.name}'s Biorythm`} />
          <Chart person={data!.person} />
        </>
      );
    }}
  </Query>
);

export default Graph;
