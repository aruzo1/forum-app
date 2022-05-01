import { gql } from "graphql-request";

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
      comments {
        id
        body
        createdAt
        user {
          id
          login
          avatarUrl
        }
      }
    }
  }
`;
export const USER_PAGE = gql`
  query ($id: String!) {
    user(id: $id) {
      login
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
