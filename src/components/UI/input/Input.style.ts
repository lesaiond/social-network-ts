import styled from "styled-components";

export const InputContainer = styled.div`

`;

export const ErrorMessage = styled.p`
  color: ${(props) => props.theme.colors.red};
  margin-top: 10px;
`;

export const StyledInput = styled.input`
  padding: 12px 15px;
  background-color: ${(props) => props.theme.colors.bgc};
  border-radius: 10px;
  border: 1px solid transparent;
  transition: 200ms;
  display: block;
  width: 100%;
  margin-bottom: 20px;
  border: 2px solid ${(props) => props.theme.colors.disabledBgc};
  background-color: transparent;

  &:last-child {
    margin-bottom: 40px;
  }

  &:hover,
  &:focus {
    border-color: ${(props) => props.theme.colors.primeColor};
  }
`;
