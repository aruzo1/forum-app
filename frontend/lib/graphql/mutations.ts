import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation ($data: LoginInput!) {
    login(loginInput: $data) {
      token
      user {
        id
        login
        avatarUrl
      }
    }
  }
`;

export const REGISTER = gql`
  mutation ($data: RegisterInput!) {
    register(registerInput: $data) {
      token
      user {
        id
        login
        avatarUrl
      }
    }
  }
`;
