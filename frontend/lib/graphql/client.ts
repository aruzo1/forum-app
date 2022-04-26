import { GraphQLClient } from "graphql-request";

const client = new GraphQLClient(
  process.env.NEXT_PUBLIC_BACKEND_URL + "/graphql"
);

export default client;
