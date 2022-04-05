import "reflect-metadata";
import http from "http";
import dotenv from "dotenv";
import { ApolloServerPluginDrainHttpServer } from "apollo-server-core";
import express from "express";
import { ApolloServer } from "apollo-server-express";
import { DataSource } from "typeorm";
import { buildSchema } from "type-graphql";
import context from "./context";
import authChecker from "./authChecker";
import ouathRouter from "./oauth";
import { Category, SubCategory, Thread, User } from "./entities";
import {
  CategoryResolver,
  SubCategoryResolver,
  ThreadResolver,
  UserResolver,
} from "./resolvers";

const main = async () => {
  dotenv.config();

  const Database = new DataSource({
    type: "postgres",
    url: process.env.DATABASE_URL,
    ssl: true,
    extra: { ssl: { rejectUnauthorized: false } },
    synchronize: true,
    entities: [User, Category, SubCategory, Thread],
  });
  await Database.initialize();

  const app = express();
  const httpServer = http.createServer(app);
  const server = new ApolloServer({
    schema: await buildSchema({
      resolvers: [
        UserResolver,
        CategoryResolver,
        SubCategoryResolver,
        ThreadResolver,
      ],
      authChecker,
    }),
    context,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use("/oauth", ouathRouter);

  await server.start();
  server.applyMiddleware({ app });

  await new Promise<void>((resolve) =>
    httpServer.listen({ port: 4000 }, resolve)
  );
  console.log(`server ready at http://localhost:4000/graphql`);
};

main();
