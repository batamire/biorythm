import React from "react";
import { RouteComponentProps } from "@reach/router";
import { Query } from "react-apollo";
import { GET_PERSON, Person } from "../../constants/people";
import Header from "../../components/Header";

interface GraphProps
  extends RouteComponentProps<{
    id: string;
  }> {}

interface QueryProp {
  person: Person;
}

const Graph = (props: GraphProps) => (
  <>
    <Header title="Graph" />
    <Query<QueryProp> query={GET_PERSON} variables={{ id: props.id }}>
      {({ data, loading, error }) => {
        if (loading) return <p>Loading</p>;
        if (error) return <p>{error.message}</p>;
        return <div>{data!.person.name}</div>;
      }}
    </Query>
  </>
);

export default Graph;
