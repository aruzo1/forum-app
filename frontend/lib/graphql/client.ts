import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const httpLink = createHttpLink({
  uri: process.env.NEXT_PUBLIC_BACKEND_URL + "/graphql",
});

const authLink = setContext(() => {
  // Beacuse of Next.js localStorage is not defined at the start
  try {
    const token = localStorage.getItem("token");
    return { headers: { authorization: token || "" } };
  } catch {}
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default client;
