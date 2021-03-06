import { gql } from "graphql-request";

export const REGISTER = gql`
  mutation ($data: RegisterInput!) {
    register(data: $data) {
      token
      user {
        id
        login
        avatarUrl
      }
    }
  }
`;

export const LOGIN = gql`
  mutation ($data: LoginInput!) {
    login(data: $data) {
      token
      user {
        id
        login
        avatarUrl
      }
    }
  }
`;

export const CREATE_THREAD = gql`
  mutation ($data: ThreadInput!) {
    createThread(data: $data) {
      id
    }
  }
`;
