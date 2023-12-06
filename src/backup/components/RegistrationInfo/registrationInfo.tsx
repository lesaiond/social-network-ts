import { StyledRegistrationInfo } from "./RegistrationInfo.style";
import { SignInBy } from "../../components/UI/SignInBy/SignInBy";
import { StyledLink } from "../Typography/StyledLink";

interface supText {
  authorizationText: string;
  linkText: string;
  question: string,
}

export const RegistrationInfo = ({
  question,
  authorizationText,
  linkText,
}: supText) => {
  interface SocialIcon {
    src: string;
    alt: string;
    class: string;
    href: string;
  }
  const socialAtributs: SocialIcon[] = [
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
    <StyledRegistrationInfo>
      <span>
        {authorizationText}
        <StyledLink to="/registration" linkText={linkText}></StyledLink>
      </span>
      <p>Войти с помощью</p>
      <div className="icons-wrapper">
        {socialAtributs.map((elem) => (
          <SignInBy
            isClass={elem.class}
            isSrc={elem.src}
            isHref={elem.href}
            isAlt={elem.alt}
          />
        ))}
      </div>
    </StyledRegistrationInfo>
  );
};
