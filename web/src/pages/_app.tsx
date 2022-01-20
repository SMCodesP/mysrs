import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../styles/global";
import { dark } from "../styles/themes";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={dark}>
      <Component {...pageProps} />

      <GlobalStyle />
    </ThemeProvider>
  );
}

export default MyApp;
