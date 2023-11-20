import React from "react";
import { Heading } from "../../components/Typography/Heading";
import { StyledLink } from "../../components/Typography/StyledLink";
import { Button } from "../../components/UI/Button/Button";
import { Input } from "../../components/UI/input/Input";
import { Container } from "../../components/UI/Container/Container.style";
import { RegistrationInfo } from "../../components/RegistrationInfo/registrationInfo";
import { StyledLoginPage } from "./LoginPage.style";

export const LoginPage = () => {
  return (
    <Container>
      <StyledLoginPage>
        <div className="LoginPage">
          <Heading headingText="Авторизация" />
          <form>
            <Input isError={false} errorMessage="Error!!!" type="tel" placeholder="Номер телефона" />
            <Input isError={false} errorMessage="Error!" type="password" placeholder="Пароль" />
            <Button buttonText="Войти" isPrimary={true} />
          </form>
          <StyledLink to="/" linkText="Забыли пароль?" />
          <RegistrationInfo linkText="Зарегистрироваться" authorizationText="У вас нет аккаунта?"/>
        </div>
      </StyledLoginPage>
    </Container>
  );
};
