import React, { useEffect } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { Heading } from "../../components/Typography/Heading";
import { StyledLink } from "../../components/Typography/StyledLink";
import { Button } from "../../components/UI/Button/Button";
import { Input } from "../../components/UI/input/Input";
import { Container } from "../../components/UI/Container/Container.style";
import { RegistrationInfo } from "../../components/RegistrationInfo/registrationInfo";
import { StyledLoginPage } from "./LoginPage.style";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { RootState } from "../../store/store";
import { changeUser } from "../../store/userSlice";
import { useNavigate } from "react-router-dom";

interface ILogin {
  tel: string;
  pass: string;
}

const mockUser = {
  mail: "vasya#mail.com",
  phone_number: "111",
  user_id: 55,
  name: "Vasya Petrov",
  reg_date: new Date().toISOString(),
  city: "Andijan",
}

export const LoginPage = () => {
  const { control, handleSubmit } = useForm<ILogin>({
    defaultValues: {
      tel: "",
      pass: "",
    },
  });
  
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const user = useSelector((state: RootState) => state.userSlice.user)
  // console.log(user);

  const onLoginSubmit: SubmitHandler<ILogin> = (data) => {
    dispatch(changeUser(mockUser))
    // console.log("DATA: ", data);
  };

  useEffect(() => {
    console.log("USER", user)

    if (user?.user_id) {
      navigate("/profile")
    }
  }, [user])

  return (
    <Container>
      <StyledLoginPage>
        <div className="LoginPage">
          <Heading headingText="Авторизация" />
          <form onSubmit={handleSubmit(onLoginSubmit)}>
            <Controller
              name="tel"
              control={control}
              render={(field) => (
                <Input
                  isError={false}
                  errorMessage="Error!!!"
                  type="tel"
                  {...field}
                  placeholder="Номер телефона"
                />
              )}
            />
            <Controller
              name="pass"
              control={control}
              render={(field) => (
                <Input
                  isError={false}
                  errorMessage="Error!"
                  type="password"
                  {...field}
                  placeholder="Пароль"
                />
              )}
            />
            <Button buttonText="Войти" isPrimary={true} />
          </form>
          <StyledLink to="/forgetPassword" linkText="Забыли пароль?" />
          <RegistrationInfo
            linkText="Зарегистрироваться"
            authorizationText="У вас нет аккаунта?"
          />
        </div>
      </StyledLoginPage>
    </Container>
  );
};
