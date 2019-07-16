import React from "react";
import { useQuery } from "react-apollo-hooks";
import { RouteComponentProps } from "@reach/router";
import { GET_PERSON, Person } from "../../constants/people";
import { Header, Link, Loading } from "../../components";
import Chart from "./Chart";

interface GraphProps
  extends RouteComponentProps<{
    id: string;
  }> {}

const Main = (props: GraphProps) => {
  const { data, loading, error } = useQuery<{ person: Person }>(GET_PERSON, {
    variables: { id: props.id }
  });
  if (loading) return <Loading />;
  if (error) return <p>{error.message}</p>;
  return (
    <>
      <Link to="/">&larr; People</Link>
      <Header title={`${data!.person.name}'s Biorythm`} />
      <Chart person={data!.person} />
    </>
  );
};

export default Main;
