import { PrismaClient } from "@prisma/client";
import { Pool } from "pg";

export type GraphQLContext = {
  prisma: PrismaClient;
};
