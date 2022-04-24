import { NextPage } from "next";
import Head from "next/head";
import ThreadForm from "components/ThreadForm";

const CreateThreadPage: NextPage = () => (
  <>
    <Head>
      <title>Forum - Create Thread</title>
    </Head>
    <ThreadForm />
  </>
);

export default CreateThreadPage;
