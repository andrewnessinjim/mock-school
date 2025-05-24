require("dotenv").config();

import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

import { readFileSync } from "fs";
import path from "path";
import { gql } from "graphql-tag";

import { PrismaClient } from "@prisma/client";
import jwt from "jsonwebtoken";
import withGuard from "./permissions";
import resolvers from "./resolvers";

const prisma = new PrismaClient();

const typeDefs = gql(
  readFileSync(path.resolve(__dirname, "./schema.graphql"), {
    encoding: "utf-8",
  })
);

const guardedSchema = withGuard(typeDefs, resolvers);

async function startApolloServer() {
  const server = new ApolloServer({
    schema: guardedSchema,
    introspection: true,
  });
  const { url } = await startStandaloneServer(server, {
    context: async ({ req }) => {
      const authHeader = req.headers.authorization || "";
      const token = authHeader.replace("Bearer ", "").trim();

      let user = null;
      if (token) {
        try {
          user = jwt.verify(token, process.env.JWT_SECRET as string);
        } catch (err) {
          console.error("Invalid token", err);
          console.error("Token:", token);
        }
      }
      return {
        prisma,
        user,
      };
    },
  });

  console.log(`
    🚀  Server is running!
    📭  Query at ${url}
  `);
}

startApolloServer();
