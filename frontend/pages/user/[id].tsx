import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import client from "lib/graphql/client";
import { IUserProps } from "lib/types";
import { USER_PAGE } from "lib/graphql/queries";
import Profile from "components/Profile";

const UserPage: NextPage<IUserProps> = ({ user }) => (
  <>
    <Head>
      <title>Forum - {user?.login}</title>
    </Head>
    <Profile user={user} />
  </>
);

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const id = params!.id as string;

  try {
    return { props: await client.request(USER_PAGE, { id }) };
  } catch {
    return { notFound: true };
  }
};

export default UserPage;
