import { gql } from "graphql-request";
import { ILoginValues, IRegisterValues, IUser } from "../types";
import client from "./client";

const LOGIN = gql`
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

export const fetchLogin = async (
  data: ILoginValues
): Promise<{ token: string; user: IUser }> => {
  return client.request(LOGIN, { data }).then((res) => res.login);
};

const REGISTER = gql`
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

export const fetchRegister = async (
  data: IRegisterValues
): Promise<{ token: string; user: IUser }> => {
  return client.request(REGISTER, { data }).then((res) => res.register);
};
