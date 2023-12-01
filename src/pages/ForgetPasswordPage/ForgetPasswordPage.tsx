import React, { useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { Heading } from "../../components/Typography/Heading";
import { Button } from "../../components/UI/Button/Button";
import { Input } from "../../components/UI/input/Input";
import { Container } from "../../components/UI/Container/Container.style";
import { StyledForgetPasswordPage } from "./ForgetPasswordPage.style.";
import { Span } from "../../components/UI/span/Span";
import { StyledLink } from "../../components/Typography/StyledLink";

interface IForgetPassword {
  repeatPassword: string;
  phone: string;
  verificationCode: string;
  newPassword: string;
}

export const ForgetPasswordPage = () => {
  const { handleSubmit, control } = useForm<IForgetPassword>({
    defaultValues: {
      repeatPassword: "",
      phone: "",
      verificationCode: "",
      newPassword: "",
    },
  });
  const [showBlock1, setShowBlock1] = useState<Boolean>(true);
  const [showBlock2, setShowBlock2] = useState<Boolean>(false);
  const [showBlock3, setShowBlock3] = useState<Boolean>(false);

  function turnBlocks(blockNumber: number) {
    console.log("run");
    
    if (blockNumber === 1) {
      setShowBlock1(!showBlock1);
      setShowBlock2(!showBlock2);
    } else if (blockNumber === 2) {
      setShowBlock2(!showBlock2);
    } else if (blockNumber === 3) {
      setShowBlock3(!showBlock3);
    }
  }
  const submit: SubmitHandler<IForgetPassword> = data => {
    console.log(data);
    
  }
  return (
    <Container>
      <StyledForgetPasswordPage>
        <div className="ForgetPasswordPage">
          {showBlock1 && <div className="block1">
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
                  />
                )}
              />
              <Button
                buttonText="Отправить"
                isPrimary={true}
                onClick={() => {
                  turnBlocks(1);
                }}
              />
            </form>
          </div>}
          {/* {showBlock2 && <div className="block2">
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
                  />
                )}
              />
              <Button
                buttonText="Отправить"
                isPrimary={true}
                onClick={() => {
                  turnBlocks(2);
                }}
              />
            </form>
            <Span spanText="Код не пришел?" />
            <StyledLink to="/" linkText="Отправить повторно" />
          </div>}
          {showBlock3 && <div className="block3">
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
                  />
                )}
              />
              <Button buttonText="Восстановить пароль" isPrimary={true} onClick={() => {
                  turnBlocks(3);
                }}/>
            </form>
          </div>} */}
        </div>
      </StyledForgetPasswordPage>
    </Container>
  );
};
