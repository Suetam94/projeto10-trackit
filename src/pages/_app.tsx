import type { AppProps } from "next/app";

import { GlobalStyle } from "../styles/GlobalStyle";
import { UserDataProvider } from "../context/UserContext";
import { HabitsDataProvider } from "../context/HabitsContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <UserDataProvider>
        <HabitsDataProvider>
          <GlobalStyle />
          <Component {...pageProps} />
        </HabitsDataProvider>
      </UserDataProvider>
    </>
  );
}

export default MyApp;
