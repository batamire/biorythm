import styled from "@emotion/styled";

export const Form = styled.form`
  display: flex;
`;

export const Input = styled.input`
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
    &::placeholder {
      color: #ccc;
    }
  }
`;

export const Button = styled.button`
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
