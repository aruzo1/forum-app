import { gql } from "@apollo/client";

// Pages
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
      id
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
        id
        login
        avatarUrl
      }
    }
  }
`;

// User
export const ACCOUNT = gql`
  {
    account {
      id
      login
      avatarUrl
    }
  }
`;

// Entities
export const SUB_CATEGORY = gql`
  query ($subCategoryId: String!) {
    subCategory(id: $subCategoryId) {
      id
      name
    }
  }
`;
