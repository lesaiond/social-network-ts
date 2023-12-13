import React, { useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { Heading } from "../../components/Typography/Heading";
import { Button } from "../../components/UI/Button/Button";
import { Input } from "../../components/UI/input/Input";
import { Container } from "../../components/UI/Container/Container.style";
import { StyledForgetPasswordPage } from "./ForgetPasswordPage.style.";
import { Span } from "../../components/UI/span/Span";
import { StyledLink } from "../../components/Typography/StyledLink";
import { useNavigate } from "react-router-dom";

interface IForgetPassword {
  repeatPassword: string;
  phone: string;
  verificationCode: string;
  newPassword: string;
}

export const ForgetPasswordPage = () => {
  const navigate = useNavigate();
  const { handleSubmit, control } = useForm<IForgetPassword>({
    defaultValues: {
      repeatPassword: "",
      phone: "",
      verificationCode: "",
      newPassword: "",
    },
  });

  const [step, setStep] = useState<number>(0);
  const [showBlock0, setShowBlock0] = useState<Boolean>(true);
  const [showBlock1, setShowBlock1] = useState<Boolean>(false);
  const [showBlock2, setShowBlock2] = useState<Boolean>(false);

  function turnBlocks() {
    if (step === 1) {
      setShowBlock0(false);
      setShowBlock1(true);
    } else if (step === 2) {
      setShowBlock1(false);
      setShowBlock2(true);
    } else if (step > 2) {
      setStep(0);
      navigate("/login");
    }
  }
  const submit: SubmitHandler<IForgetPassword> = (data) => {
    setStep(step + 1);
    console.log(data);
    turnBlocks();
  };
  return (
    <Container>
      <StyledForgetPasswordPage>
        <div className="ForgetPasswordPage">
          {showBlock0 && (
            <div className="block1">
              <Heading headingText="Забыли пароль?" />
              <Span
                spanText="Укажите свой номер телефона, чтобы получить код для сброса
              пароля."
              />
              <form onSubmit={handleSubmit(submit)}>
                <Controller
                  name="phone"
                  control={control}
                  render={(field) => (
                    <Input
                      isError={false}
                      errorMessage="Error!!!"
                      type="tel"
                      placeholder="Номер телефона"
                      {...field}
                    />
                  )}
                />
                <Button buttonText="Отправить" isPrimary={true} />
              </form>
            </div>
          )}
          {showBlock1 && (
            <div className="block2">
              <Heading headingText="Введите код" />
              <Span spanText="Пожалуйста, введите код из SMS, который был отправлен на ваш номер телефона" />
              <Heading headingText="1:00" />
              <form onSubmit={handleSubmit(submit)}>
                <Controller
                  name="verificationCode"
                  control={control}
                  render={(field) => (
                    <Input
                      isError={false}
                      errorMessage="Error!!!"
                      type="tel"
                      placeholder="Введите код"
                      {...field}
                    />
                  )}
                />
                <Button buttonText="Отправить" isPrimary={true} />
              </form>
              <Span spanText="Код не пришел?" />
              <StyledLink to="/" linkText="Отправить повторно" />
            </div>
          )}
          {showBlock2 && (
            <div className="block3">
              <Heading headingText="Придумайте пароль" />
              <Span spanText="Введите новый пароль для вашей учетной записи. Пароль должен содержать не менее 8 символов, включая заглавные и строчные буквы, цифры и специальные символы." />
              <form onSubmit={handleSubmit(submit)}>
                <Controller
                  name="newPassword"
                  control={control}
                  render={(field) => (
                    <Input
                      isError={false}
                      errorMessage="Error!!!"
                      type="tel"
                      placeholder="Новый пароль"
                      {...field}
                    />
                  )}
                />
                <Controller
                  name="repeatPassword"
                  control={control}
                  render={(field) => (
                    <Input
                      isError={false}
                      errorMessage="Error!!!"
                      type="tel"
                      placeholder="Повторите пароль"
                      {...field}
                    />
                  )}
                />
                <Button buttonText="Восстановить пароль" isPrimary={true} />
              </form>
            </div>
          )}
        </div>
      </StyledForgetPasswordPage>
    </Container>
  );
};
