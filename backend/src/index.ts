import "reflect-metadata";
import http from "http";
import dotenv from "dotenv";
import { ApolloServerPluginDrainHttpServer } from "apollo-server-core";
import express from "express";
import { ApolloServer } from "apollo-server-express";
import { DataSource } from "typeorm";
import { buildSchema } from "type-graphql";
import context from "./context";
import authChecker from "./auth/authChecker";
import ouathRouter from "./auth/oauth";
import { Category, Comment, SubCategory, Thread, User } from "./entities";
import {
  CategoryResolver,
  SubCategoryResolver,
  ThreadResolver,
  UserResolver,
  CommentResolver,
} from "./resolvers";

const main = async () => {
  dotenv.config();

  const Database = new DataSource({
    type: "postgres",
    url: process.env.DATABASE_URL,
    ssl: true,
    extra: { ssl: { rejectUnauthorized: false } },
    synchronize: true,
    entities: [User, Category, SubCategory, Thread, Comment],
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
        CommentResolver,
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
    httpServer.listen({ port: process.env.PORT }, resolve)
  );
  console.log(`server ready at ${process.env.BACKEND_URL}`);
};

main();
