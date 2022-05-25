import type { AppProps } from "next/app";

import { GlobalStyle } from "../styles/GlobalStyle";
import { UserDataProvider } from "../context/UserContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <UserDataProvider>
        <GlobalStyle />
        <Component {...pageProps} />
      </UserDataProvider>
    </>
  );
}

export default MyApp;
