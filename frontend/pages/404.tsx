import { NextPage } from "next";
import Error from "../components/Error";

const Page404: NextPage = () => (
  <div className="container layout">
    <Error code={404} msg="Page not found." />
  </div>
);

export default Page404;
