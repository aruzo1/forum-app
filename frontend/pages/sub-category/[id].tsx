import { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import SubCategory from "../../components/SubCategory";
import { fetchSubCategoryPage } from "../../lib/graphql/queries";
import { ISubCategoryPageProps } from "../../lib/types";

const SubCategoryPage: NextPage<ISubCategoryPageProps> = ({ subCategory }) => {
  return (
    <div className="container layout">
      <Head>
        <title>Forum - {subCategory.name}</title>
      </Head>
      <SubCategory subCategory={subCategory} />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const id = ctx.params!.id as string;
  if (!id) return { notFound: true };

  try {
    return { props: await fetchSubCategoryPage(id) };
  } catch {
    return { notFound: true };
  }
};

export default SubCategoryPage;
