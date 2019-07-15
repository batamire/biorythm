import gql from "graphql-tag";

export const GET_PEOPLE = gql`
  query {
    people @client {
      id
      name
      birthday
    }
  }
`;
