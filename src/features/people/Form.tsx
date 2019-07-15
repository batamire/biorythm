import React, { useState } from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import styled from "@emotion/styled";
// import { GraphQLDateTime } from "graphql-iso-date";

const StyledForm = styled.form`
  display: flex;
`;

const Input = styled.input`
  margin-right: 0.5rem;
  padding: 0.5rem;
  font-size: 1rem;
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.5;
  background: #fff;
  border: none;
  border-radius: 4px;
  outline: none;
  &:hover {
    background: #add8e6;
  }
  &:focus {
    color: #fff;
    background: #466e7b;
  }
`;

const Button = styled.button`
  padding: 0.25rem 1rem;
  font-size: 1rem;
  color: #fff;
  background: #004ea9;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  outline: none;
  &:hover {
    background: #002e83;
  }
`;

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
    <Mutation mutation={ADD_PERSON}>
      {(addPerson: any) => (
        <StyledForm
          onSubmit={e => {
            e.preventDefault();
            if (!inputValid({ name, birthday })) return;
            addPerson({ variables: { id: ++nextId, name, birthday } });
            setName("");
            setBirthday("");
          }}
        >
          <Input
            type="text"
            value={name}
            onChange={event => setName(event.target.value)}
          />
          <Input
            type="date"
            value={birthday}
            onChange={event => setBirthday(event.target.value)}
          />
          <Button type="submit">Add</Button>
        </StyledForm>
      )}
    </Mutation>
  );
};

export default Form;
