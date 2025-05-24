import { applyMiddleware } from "graphql-middleware";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { rule, shield } from "graphql-shield";
import { Resolvers } from "../generated/graphql_types";
import { DocumentNode } from "graphql";

export default function withGuard(
  typeDefs: DocumentNode,
  resolvers: Resolvers
) {
  const isAuthenticated = rule()((_, __, ctx) => {
    return Boolean(ctx.user);
  });

  const isAdmin = rule()((_, __, ctx) => {
    return ctx.user?.role === "admin";
  });

  const permissions = shield({
    Mutation: {
      updateStudent: isAdmin,
      deleteStudent: isAdmin,
      addStudent: isAdmin,
    },
  });

  const guardedSchema = applyMiddleware(
    makeExecutableSchema({ typeDefs, resolvers }),
    permissions
  );
  return guardedSchema;
}
