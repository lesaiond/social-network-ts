import React from "react";
import { Heading } from "../../components/Typography/Heading";
import { StyledLink } from "../../components/Typography/StyledLink";
import { Button } from "../../components/UI/Button/Button";
import { Input } from "../../components/UI/input/Input";
import { Container } from "../../components/UI/Container/Container.style";
import { RegistrationInfo } from "../../components/RegistrationInfo/registrationInfo";
import { StyledRegistrationPage } from "./RegistrationPage.style";

export const RegistrationPage = () => {
  return (
    <Container>
      <StyledRegistrationPage>
        <div className="RegistrationPage">
          <Heading headingText="Регистрация" />
          <form>
            <Input isError={false} errorMessage="Error!!!" type="tel" placeholder="Имя и фамилия" />
            <Input isError={false} errorMessage="Error!!!" type="tel" placeholder="Номер телефона" />
            <Input isError={false} errorMessage="Error!" type="password" placeholder="Пароль" />
            <Button buttonText="Зарегистрироваться" isPrimary={true} />
          </form>
          <StyledLink to="/logi" linkText="Забыли пароль?" />
          <RegistrationInfo linkText="Войти" authorizationText="Уже есть аккаунт?"/>
        </div>
      </StyledRegistrationPage>
    </Container>
  );
};
