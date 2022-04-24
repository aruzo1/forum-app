import { NextPage } from "next";
import Error from "components/Error";

const Page404: NextPage = () => (
  <>
    <Error title="404" msg="Page not found." />
  </>
);

export default Page404;
