import React from "react";
import { GlobalStyle } from "styles/GlobalStyle";

export const wrapPageElement = ({ element }) => (
  <>
    <GlobalStyle />
    {element}
  </>
);
