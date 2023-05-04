import { Layout } from './components/Layout'

// import { store } from "../redux";
import { useRedux } from "../redux";
import { PropsWithChildren } from 'react';
import { Login } from "./components/Login";
import { useRouter } from 'next/router';
import { useEffect } from 'react';

type Props = PropsWithChildren<{
  router: any;
}>;

export const BasePage = ({router, children}: Props) => {
  const { useSelector } = useRedux();

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/login');
    }
  }, [isAuthenticated, router]);

  if (!isAuthenticated) {
    return <Login />;
  }

  return (
    <>
      <Layout>
        {children}
      </Layout>
    </>
  );
};
