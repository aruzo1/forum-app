import { NextPage } from "next";
import Head from "next/head";
import Error from "components/Error";

const Page404: NextPage = () => (
  <>
    <Head>
      <title>Forum - Not Found</title>
    </Head>
    <Error title="404" msg="Page not found." />
  </>
);

export default Page404;
