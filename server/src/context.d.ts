import { Pool } from "pg";

export type GraphQLContext = {
  pgPool: Pool;
};
