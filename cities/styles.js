import { createGlobalStyle } from "styled-components";
import { Abril_Fatface } from "next/font/google";

const abrilFatface = Abril_Fatface({
  weight: "400",
  subsets: ["latin"],
});

export default createGlobalStyle`
:root {
  --font-family: ${abrilFatface.style.fontFamily}, serif;
}
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: system-ui;
  }
`;
