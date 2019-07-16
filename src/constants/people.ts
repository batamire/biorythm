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

export const ADD_PERSON = gql`
  mutation($id: String, $name: String!, $birthday: GraphQLDateTime) {
    addPerson(id: $id, name: $name, birthday: $birthday) @client {
      people {
        id
        name
        birthday
      }
    }
  }
`;
