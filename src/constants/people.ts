import gql from "graphql-tag";

export interface Person {
  id: number;
  name: string;
  birthday: string;
}

export interface People {
  people: [Person];
}

export const GET_PEOPLE = gql`
  query {
    people @client {
      id
      name
      birthday
    }
  }
`;
