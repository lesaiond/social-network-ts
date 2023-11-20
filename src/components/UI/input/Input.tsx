import React from "react";
import { ErrorMessage, InputContainer, StyledInput } from "./Input.style";

interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  errorMessage?: string,
  isError: boolean,
}

export const Input = ({ placeholder, type, errorMessage, isError }: IInputProps) => {
  return (
    <InputContainer>
      <StyledInput type={type} placeholder={placeholder} />
      {isError && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </InputContainer>
  );
};
