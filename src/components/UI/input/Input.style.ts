import styled from "styled-components";

export const StyledInput = styled.input`
  padding: 12px 15px;
  background-color: var(--bgc);
  border-radius: 10px;
  border: 1px solid transparent;
  transition: 200ms;
  display: block;
  width: 100%;
  margin-bottom: 20px;
  border: 2px solid var(--disabled-bgc);
  background-color: transparent;
  
  &:last-child {
    margin-bottom: 40px;
  }

  &:hover,
  &:focus {
    border-color: var(--prime-color);
  }
`;