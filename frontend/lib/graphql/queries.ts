import { gql } from "graphql-request";
import { IHomePageProps, IUser } from "../types";
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

export const fetchHomePage = async (): Promise<IHomePageProps> => {
  return client.request(HOME_PAGE);
};

const ACCOUNT = gql`
  {
    account {
      id
      login
      avatarUrl
    }
  }
`;

export const fetchAccount = async (): Promise<IUser> => {
  return client.request(ACCOUNT).then((res) => res.account);
};
