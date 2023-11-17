import React from "react";
import { StyledInput } from "./Input.style";

interface InputProps {
  isPlaceholder: string,
  type: string,
}

export const Input = ({isPlaceholder}: InputProps, {type}: InputProps) => {
  return (
    <StyledInput type={type} placeholder={isPlaceholder} />
  )
}