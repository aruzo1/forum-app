import {
  ApolloClient,
  HttpLink,
  ApolloLink,
  InMemoryCache,
  concat,
} from "@apollo/client";

const httpLink = new HttpLink({
  uri: process.env.NEXT_PUBLIC_BACKEND_URL + "/graphql",
});

const authMiddleware = new ApolloLink((operation, forward) => {
  // Add the authorization to the headers
  try {
    operation.setContext(() => ({
      headers: {
        authorization: localStorage.getItem("token") || null,
      },
    }));
  } catch {}

  return forward(operation);
});

export default new ApolloClient({
  link: concat(authMiddleware, httpLink),
  cache: new InMemoryCache(),
});
