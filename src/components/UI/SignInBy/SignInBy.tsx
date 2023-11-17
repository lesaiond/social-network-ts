import React from "react";
import { StyledSignInBy } from "./SignInBy.style";

interface SignInByProps {
  isClass: string;
  isSrc: string;
  isHref: string;
  isAlt: string;
}

export const SignInBy = (
  { isClass }: SignInByProps,
  { isSrc }: SignInByProps,
  { isHref }: SignInByProps,
  { isAlt }: SignInByProps
) => {
  return (
    <StyledSignInBy>
      <a className={isClass} href={isHref}>
        <img src={isSrc} alt={isAlt} />
      </a>
    </StyledSignInBy>
  );
};

// {variants.map((elem) => (
//   <AnswerItem3
//     id={elem.id}
//     isSrc={elem.src}
//     isAlt={elem.alt}
//     textP={elem.text}
//     onChange={() => setCheckedAnswer(elem.id)}
//     isChecked={elem.id === checkedAnswer}
//   />
// ))}
// const variants = [
//   {
//     id: "variant-1",
//     src: "./img/laugh.png",
//     alt: "laugh",
//     text: "Ваш ответ 1",
//   },
//   {
//     id: "variant-2",
//     src: "./img/hearts.png",
//     alt: "hearts",
//     text: "Ваш ответ 2",
//   },
//   {
//     id: "variant-3",
//     src: "./img/smirk.png",
//     alt: "smirk",
//     text: "Ваш ответ 3",
//   },
//   {
//     id: "variant-4",
//     src: "./img/fright.png",
//     alt: "fright",
//     text: "Ваш ответ 4",
//   },
// ];
