import type { NextPage } from "next";

import { signIn, useSession } from "next-auth/react";
import styles from "../styles/Home.module.css";

import { Layout } from "./components/Layout";

interface Props {
}

const Home: NextPage = (props) => {
  const { data: session } = useSession();
  return (
    <div>
      <Layout {...props} />
      {/* {session?.user ? (
        <main className={styles.main}>
          <button onClick={() => {
            signIn();
          }}>Login</button>
        </main>
      ) : <Layout {...props} />} */}
    </div>
  );
};

export default Home;
