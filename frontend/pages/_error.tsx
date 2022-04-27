import { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import { IErrorProps } from "lib/types";
import Error from "components/Error";

const ErrorPage: NextPage<IErrorProps> = ({ statusCode }) => (
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
