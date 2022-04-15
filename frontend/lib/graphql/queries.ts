import { gql } from "graphql-request";
import {
  IHomePageProps,
  ISubCategory,
  ISubCategoryPageProps,
  IUser,
} from "../types";
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

const SUB_CATEGORIES = gql`
  {
    subCategories {
      id
    }
  }
`;

export const fetchSubCategories = async (): Promise<ISubCategory[]> => {
  return client.request(SUB_CATEGORIES).then((res) => res.subCategories);
};

const SUB_CATEGORY_PAGE = gql`
  query ($id: String!) {
    subCategory(id: $id) {
      name
      threads {
        id
        title
        createdAt
        user {
          id
          avatarUrl
        }
      }
    }
  }
`;

export const fetchSubCategoryPage = async (
  id: string
): Promise<ISubCategoryPageProps> => {
  return client.request(SUB_CATEGORY_PAGE, { id });
};
