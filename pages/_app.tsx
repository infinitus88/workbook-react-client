import '../styles/globals.css'
import { Provider } from 'react-redux'
import type { AppProps } from 'next/app'
import { SessionProvider } from "next-auth/react";

import { store } from "../redux";
import { useRouter } from "next/router";
import Layout from '../components/layout/Layout';

function App({ Component, pageProps }: AppProps) {

  // Хук для текущего URL'а
  const {asPath} = useRouter();

  return (
    <Provider store={store}>
      <SessionProvider session={pageProps.session} >
        {/* Если url начинаеться с "/auth" то компонент Layout внутри которого Sidebar, Navbar не будет рендериться */}
        {asPath.includes('/auth') ? <Component {...pageProps} /> : (
          <Layout>
            <Component {...pageProps} />
          </Layout>
        )}
      </SessionProvider>
    </Provider>
  );
};

export default App;
