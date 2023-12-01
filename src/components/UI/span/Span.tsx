import React from "react";
import { StyledSpan } from "./Spam.style";

type SpanProps = {
  spanText: String,
}

export const Span = ({spanText}: SpanProps) => {
  return(
    <StyledSpan>
      <span>{spanText}</span>
    </StyledSpan>
  )
}