import { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import client from "../../lib/graphql/client";
import { ISubCategoryPageProps } from "../../lib/types";
import { SUB_CATEGORY_PAGE } from "../../lib/graphql/queries";
import SubCategory from "../../components/SubCategory";

const SubCategoryPage: NextPage<ISubCategoryPageProps> = ({ subCategory }) => (
  <div className="container layout">
    <Head>
      <title>Forum - {subCategory.name}</title>
    </Head>
    <SubCategory subCategory={subCategory} />
  </div>
);

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const id = ctx.params!.id as string;

  try {
    const { data } = await client.query({
      query: SUB_CATEGORY_PAGE,
      variables: { id },
    });

    return { props: data };
  } catch {
    return { notFound: true };
  }
};

export default SubCategoryPage;
