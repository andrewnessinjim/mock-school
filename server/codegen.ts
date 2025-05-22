import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "./src/schema.graphql",
  generates: {
    "./src/generated/graphql_types.ts": {
      plugins: ["typescript", "typescript-resolvers"],
       config: {
        contextType: "../context.d#GraphQLContext",
      },
    },
  },
};

export default config;
