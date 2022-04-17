import { GraphQLClient } from "graphql-request";

export default new GraphQLClient(
  process.env.NEXT_PUBLIC_BACKEND_URL + "/graphql"
);
