import type { NextPage } from "next";

import { signIn, useSession } from "next-auth/react";
import styles from "../styles/Home.module.css";

import { Layout } from "./components/Layout";

interface Props {
}

const Home: NextPage = (props) => {
  const { data: session } = useSession();

  console.log(session);
  return (
    <div>
      <Layout {...props} />
    </div>
  );
};

export default Home;
