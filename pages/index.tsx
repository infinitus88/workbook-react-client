import type { NextPage } from "next";

import { signIn, useSession } from "next-auth/react";
import styles from "../styles/Home.module.css";
import Layout from "../components/layout/Layout";
import { Workbook } from "../components/Workbook";
import { useEffect, useReducer } from "react";
import { setUser } from "../redux/user/userSlice";
import { useRedux } from "../redux";


interface Props {
}

const Home: NextPage = (props) => {
  const { data: session } = useSession();
  const { dispatch } = useRedux();
  
  useEffect(() => {
    if (session) {
      const { id, username, email, profileImage } = session.user;
      dispatch(setUser({ id, username, email, profileImage }));
    }
  }, [session])
  
  return (
      <Workbook />
  );
};

export default Home;