import styled from "styled-components";

export const StyledSignInBy = styled.div`
  display: inline-block;
  width: 100%;
  text-align: right;
  text-decoration: none;
  color: var(--gray);

  &:hover {
    text-decoration: underline;
  }
  .reg__link {
      width: 60px;
      flex: 0 0 58px;
      transition: 200ms;

      &:hover {
        scale: 1.1;
      }

      &:active {
        scale: 0.9;
        transition: 100ms;
      }

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
`;
