import React from "react";
import { Global, css } from "@emotion/core";

const Layout = ({ children }) => {
  return (
    <div
      id="app"
      css={css`
        height: 100vh;
        /* grid container settings */
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: auto 1fr auto;
        grid-template-areas:
          "header"
          "main"
          "footer";
      `}
    >
      {children}
      <Global
        styles={css`
          body {
            margin: 0;
            font-family: "Open Sans", Times, "Times New Roman", serif;
          }
        `}></Global>
    </div>
  );
};

export default Layout;
