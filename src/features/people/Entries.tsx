import React, { Suspense } from "react";
import { useQuery } from "react-apollo-hooks";
import styled from "@emotion/styled";
import { GET_PEOPLE, People } from "../../constants/people";
import { Link, Loading, Error, FancyDate } from "../../components";

const H2 = styled.h2`
  display: inline-block;
  margin: 1.5rem 0 0 0;
  padding: 0.25rem 0.5rem;
  font-size: 0.875rem;
  text-transform: uppercase;
  color: #444;
  background-color: #ddd;
  border-radius: 4px;
  border-bottom: 1px solid #ccc;
`;

const ReStyledLink = styled(Link)`
  margin: 0.5rem 0;
  font-size: 1.5rem;
  font-weight: 300;
`;

const Entries = () => {
  const { data, error } = useQuery<People>(GET_PEOPLE, { suspend: true });
  if (error) return <Error error={error} />;
  return (
    <>
      <H2>Last 10 entries</H2>
      <ul>
        {data!.people.slice(0, 10).map(person => (
          <li key={person.id}>
            <ReStyledLink to={`/graph/${person.id}`}>
              {person.name} &rarr; <FancyDate date={person.birthday} />
            </ReStyledLink>
          </li>
        ))}
      </ul>
    </>
  );
};

const SuspenseEntries = () => (
  <Suspense fallback={<Loading />}>
    <Entries />
  </Suspense>
);

export default SuspenseEntries;
