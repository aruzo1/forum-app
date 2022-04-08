import { gql } from "graphql-request";
import { IThread } from "../types";
import client from "./client";

const LATEST_THREADS = gql`
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
  }
`;

export const fetchLatestThreads = async (): Promise<IThread[]> => {
  return client.request(LATEST_THREADS).then((res) => res.threads);
};
