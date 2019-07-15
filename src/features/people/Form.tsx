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

const inputValid = ({
  name,
  birthday
}: {
  name: string | null;
  birthday: string | null;
}) => {
  const errors = [];
  if (!name || name === "") errors.push("Name is required");
  if (!birthday) errors.push("Birthday is required");
  if (errors.length) {
    alert(errors.join("\n"));
    return false;
  }
  return true;
};

const Form = () => {
  const [name, setName] = useState("");
  const [birthday, setBirthday] = useState("");
  return (
    <Mutation mutation={ADD_PERSON} variables={{ id: 1, name, birthday }}>
      {(addPerson: any) => (
        <form
          onSubmit={e => {
            e.preventDefault();
            if (!inputValid({ name, birthday })) return;
            addPerson({ variables: { id: ++nextId, name, birthday } });
            setName("");
            setBirthday("");
          }}
        >
          <input
            type="text"
            value={name}
            onChange={event => setName(event.target.value)}
          />
          <input
            type="date"
            value={birthday}
            onChange={event => setBirthday(event.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
      )}
    </Mutation>
  );
};

export default Form;
