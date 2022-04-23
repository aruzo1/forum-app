import { gql } from "@apollo/client";

export const HOME_PAGE = gql`
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

export const SUB_CATEGORY_PAGE = gql`
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

export const THREAD_PAGE = gql`
  query ($id: String!) {
    thread(id: $id) {
      title
      body
      createdAt
      user {
        login
        avatarUrl
      }
    }
  }
`;

export const ACCOUNT = gql`
  {
    account {
      id
      login
      avatarUrl
    }
  }
`;
