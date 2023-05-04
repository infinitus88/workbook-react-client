import '../styles/globals.css'

import { Provider } from 'react-redux'
import type { AppProps } from 'next/app'
import { BasePage } from "./BasePage";

import { store } from "../redux";
import { useRouter } from "next/router";


function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
  <Provider store={store}>
    <BasePage {...pageProps} router={router}/>
  </Provider>
  )
}

export default App;
