import React from "react";
import "./LoginPage.scss";
import { Heading } from "../../components/Typography/Heading";
import { StyledLink } from "../../components/Typography/StyledLink";
import { Button } from "../../components/UI/Button/Button";
import { Input } from "../../components/UI/input/Input";
import { SignInBy } from "../../components/UI/SignInBy/SignInBy";


export const LoginPage = () => {
  interface SocialIcon {
    src: string;
    alt: string;
    class: string;
    href: string;
  }
  const sib: SocialIcon[] = [
    {
      src: "./img/icons/google.svg",
      alt: "Google",
      class: "reg__link google-link",
      href: "#",
    },
    {
      src: "./img/icons/google-plus.svg",
      alt: "Google Plus",
      class: "reg__link google-plus-link",
      href: "#",
    },
    {
      src: "./img/icons/yandex.svg",
      alt: "Yandex",
      class: "reg__link yandex-link",
      href: "#",
    },
    {
      src: "./img/icons/mail-ru.svg",
      alt: "Mail.ru",
      class: "reg__link mail-ru-link",
      href: "#",
    },
  ];
  

  return (
    <div className="container">
      <div className="LoginPage">
        <Heading headingText="Авторизация" />
        <form>
          <Input type="tel" isPlaceholder="Номер телефона" />
          <Input type="password" isPlaceholder="Пароль" />
          <Button buttonText="Войти" />
        </form>
        <StyledLink linkText="Забыли пароль?" />
        <div className="registration">
          <span>
            У вас нет аккаунта? <a href="#">Зарегистрироваться</a>
          </span>
          <p>Войти с помощью</p>
          <div className="icons-wrapper">
            {sib.map((elem) => (
              <SignInBy
                isClass={elem.class}
                isSrc={elem.src}
                isHref={elem.href}
                isAlt={elem.alt}
              />
            ))}
            <a className="reg__link google-link" href="#">
              <img src="./img/icons/google.svg" alt="Google" />
            </a>
            <a className="reg__link google-plus-link" href="#">
              <img src="./img/icons/google-plus.svg" alt="Google Plus" />
            </a>
            <a className="reg__link yandex-link" href="#">
              <img src="./img/icons/yandex.svg" alt="Yandex" />
            </a>
            <a className="reg__link mail-ru-link" href="#">
              <img src="./img/icons/mail-ru.svg" alt="Mail.ru" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
