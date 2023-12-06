import React from "react";
import { ErrorMessage, InputContainer, StyledInput } from "./Input.style";

interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  errorMessage?: string,
  isError: boolean,
}

export const Input = ({ placeholder, type, errorMessage, isError, ...props }: IInputProps) => {
  return (
    <InputContainer>
      <StyledInput $isError={isError} type={type} placeholder={placeholder} {...props} />
      {isError && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </InputContainer>
  );
};
