import React from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { Heading } from "../../components/Typography/Heading";
import { Button } from "../../components/UI/Button/Button";
import { Input } from "../../components/UI/input/Input";
import { Container } from "../../components/UI/Container/Container.style";
import { RegistrationInfo } from "../../components/RegistrationInfo/registrationInfo";
import { StyledRegistrationPage } from "./RegistrationPage.style";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../store/store";
import { setUser } from "../../store/authSlice";

interface IRegistrationaForm {
  username: string;
  userphone: string;
  userpassword: string;
}

const regexUZB = /^(?:\+998)?(?:\d{2})?(?:\d{7})$/

const registrationSchema = yup.object({
  // username: value
  username: yup.string().required("Обязательное поле!"),
  userphone: yup.string().matches(regexUZB, "Введите узбекские номер телефона!").required("Обязательное поле!"),
  userpassword: yup.string().min(4, "Пароль должен содержать минимум 4 символа!").required("Обязательное поле!"),
});

export const RegistrationPage = () => {
    
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const user = useSelector((state: RootState) => state.userSlice.user)
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegistrationaForm>({
    resolver: yupResolver(registrationSchema),
    defaultValues: {
      username: "",
      userphone: "",
      userpassword: "",
    },
  });
  console.log("ERRORS: ", errors);

  const onRegistrationSubmit: SubmitHandler<IRegistrationaForm> = (data) => {
    console.error("Form submitted!");    
    console.log("DATA: ", data);
    dispatch(setUser(data.username));
    navigate("/")
  };
  return (
    <Container>
      <StyledRegistrationPage>
        <div className="RegistrationPage">
          <Heading headingText="Регистрация" />
          <form onSubmit={handleSubmit(onRegistrationSubmit)}>
            <Controller
              name="username"
              control={control}
              render={(field) => (
                <Input
                  isError={errors.userphone ? true : false}
                  errorMessage="Введите своё имя"
                  type="tel"
                  placeholder="Имя"
                  {...field}
                />
              )}
            />
            <Controller
              name="userphone"
              control={control}
              render={(field) => (
                <Input
                  isError={errors.userphone ? true : false}
                  errorMessage="Введите узбекские номер телефона!"
                  type="tel"
                  placeholder="Номер телефона"
                  {...field}
                />
              )}
            />
            <Controller
              name="userpassword"
              control={control}
              render={(field) => (
                <Input
                  isError={errors.userphone ? true : false}
                  errorMessage="Error!"
                  type="password"
                  placeholder="Придумайте надёжный пароль"
                  {...field}
                />
              )}
            />
            <Button
              type="submit"
              buttonText="Зарегистрироваться"
              isPrimary={true}
              disabled={!!Object.keys(errors).length}
            />
          </form>
          <RegistrationInfo
            linkText="Войти"
            authorizationText="Уже есть аккаунт?"
          />
        </div>
      </StyledRegistrationPage>
    </Container>
  );
};
