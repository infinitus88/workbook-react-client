import '../styles/globals.css'
import { Provider } from 'react-redux'
import type { AppProps } from 'next/app'
import { SessionProvider } from "next-auth/react";

import { store } from "../redux";
import { useRouter } from "next/router";



function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <Provider store={store}>
      <SessionProvider session={pageProps.session} >
        <Component {...pageProps} />
      </SessionProvider>
    </Provider>
  );
};

export default App;
