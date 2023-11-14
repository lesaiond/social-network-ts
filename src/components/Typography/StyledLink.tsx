import React from "react";

type StyledLinkProps = {
  linkText: String,
};

export const StyledLink = ({ linkText }: StyledLinkProps) => {
  return <a>{linkText}</a>;
};
