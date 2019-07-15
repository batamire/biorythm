import React, { useState } from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
// import { GraphQLDateTime } from "graphql-iso-date";

let nextId = 0;

const ADD_PERSON = gql`
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

type onInputChange = (event: React.FormEvent<HTMLInputElement>) => void;

const Form = () => {
  const [name, setName] = useState("");
  const [birthday, setBirthday] = useState("");
  return (
    <Mutation mutation={ADD_PERSON} variables={{ id: 1, name, birthday }}>
      {(addPerson: any) => (
        <form
          onSubmit={e => {
            e.preventDefault();
            addPerson({ variables: { id: ++nextId, name, birthday } });
            setName("");
          }}
        >
          <input
            type="text"
            value={name}
            onChange={event => setName(event.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
      )}
    </Mutation>
  );
};

export default Form;
