import styled from "styled-components";

export const StyledForgetPasswordPage = styled.div`
  box-shadow: 0 0 10px ${(props) => props.theme.colors.lightGray};
  border-radius: 20px;
  background-color: ${(props) => props.theme.colors.elemsBgc};
  margin: 0 auto;
  width: 80%;
  max-width: 500px;
  text-align: center;
  padding: 40px;
  h1 {
    margin-bottom: 16px;
  }

  span {
    display: inline-block;
    width: 100%;
    text-align: center;
    text-decoration: none;
    color: ${(props) => props.theme.colors.gray};
    margin-bottom: 56px;
  }


@media (max-width: 530px) {
  .LoginPage {
    width: 100%;
  }
}

.registration {
  margin-top: 30px;
  padding-top: 20px;
  border-top: 1px solid ${(props) => props.theme.colors.lightGray};

  span {
    display: inline-block;
    font-size: 16px;
    margin-bottom: 40px;

    a {
      display: inline;
      color: ${(props) => props.theme.colors.primeColor};
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
