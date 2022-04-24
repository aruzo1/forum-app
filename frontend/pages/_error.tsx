import { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import Error from "../components/Error";
import { IErrorPageProps } from "../lib/types";

const ErrorPage: NextPage<IErrorPageProps> = ({ statusCode }) => (
  <>
    <Head>
      <title>Forum - {statusCode}</title>
    </Head>
    <Error
      title={statusCode.toString()}
      msg={`An error ${statusCode} occurred.`}
    />
  </>
);

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  return { props: { statusCode: res.statusCode } };
};

export default ErrorPage;
