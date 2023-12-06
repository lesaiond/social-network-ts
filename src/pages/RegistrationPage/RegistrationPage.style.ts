import styled from "styled-components";

export const StyledRegistrationPage = styled.div`
  border-radius: 20px;
  margin: 0 auto;
  width: 80%;
  max-width: 500px;
  text-align: center;
  padding: 40px;
  h1 {
    margin-bottom: 50px;
  } 

  a {
    display: inline-block;
    width: 100%;
    text-align: right;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  @media (max-width: 530px) {
    .LoginPage {
      width: 100%;
    }
  }

  .registration {
    margin-top: 30px;
    padding-top: 20px;

    span {
      display: inline-block;
      font-size: 16px;
      margin-bottom: 40px;

      a {
        display: inline;
      }
    }

    p {
      margin-bottom: 30px;
    }

    .icons-wrapper {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 30px;

      .icon {
        border: 1px solid red;
        width: 100%;
        height: 100%;
      }
    }
  }
`;
