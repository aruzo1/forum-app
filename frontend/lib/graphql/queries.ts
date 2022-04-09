import { gql } from "graphql-request";
import { ICategory, IThread } from "../types";
import client from "./client";

const HOME_PAGE = gql`
  {
    threads(limit: 3) {
      id
      title
      body
      createdAt
      user {
        id
        avatarUrl
      }
    }
    categories {
      id
      name
      description
      subCategories {
        id
        name
        threadsCount
      }
    }
  }
`;

export const fetchHomePage = async (): Promise<{
  threads: IThread[];
  categories: ICategory[];
}> => {
  return client.request(HOME_PAGE);
};
