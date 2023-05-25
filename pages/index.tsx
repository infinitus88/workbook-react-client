import type { NextPage } from "next";

import { signIn, useSession } from "next-auth/react";
import styles from "../styles/Home.module.css";
import Layout from "../components/layout/Layout";
import { Workbook } from "../components/Workbook";


interface Props {
}

const Home: NextPage = (props) => {
  const { data: session } = useSession();

  console.log(session);
  return (
    <Layout>
      <Workbook />
        {/* <div className="container h-screen">
          <div className="flex flex-col items-center gap-4">  

          </div>
        </div> */}
    </Layout>
    
  );
};

export default Home;
