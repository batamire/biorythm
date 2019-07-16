import React, { useState } from "react";
import { useMutation } from "react-apollo-hooks";
import { ADD_PERSON } from "../../constants/people";
import {
  Form as StyledForm,
  Input,
  InputIcon,
  Button
} from "../../components/form";
import usericon from "../../assets/user.svg";
import birthdayicon from "../../assets/birthday.svg";

const nextId = () => Math.round(Math.random() * 10000).toString(10);

const inputValid = ({ name, birthday }: { name: string; birthday: string }) => {
  const errors = [];
  if (!name) errors.push("Name is required");
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
  const [addPerson] = useMutation(ADD_PERSON, {
    variables: { id: nextId(), name, birthday }
  });
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValid({ name, birthday })) return;
    await addPerson();
    setName("");
    setBirthday("");
  };
  return (
    <StyledForm onSubmit={handleSubmit}>
      <InputIcon src={usericon} />
      <Input
        type="text"
        value={name}
        placeholder="Full Name"
        onChange={event => setName(event.target.value)}
      />
      <InputIcon src={birthdayicon} alt="" />
      <Input
        type="date"
        value={birthday}
        onChange={event => setBirthday(event.target.value)}
      />
      <Button type="submit">Add</Button>
    </StyledForm>
  );
};

export default Form;
