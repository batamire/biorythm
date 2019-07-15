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

export const GET_PERSON = gql`
  query($id: ID!) {
    person(id: $id) @client {
      id
      name
      birthday
    }
  }
`;
