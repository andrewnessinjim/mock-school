import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import { Resolvers } from "../generated/graphql_types";

const authResolvers: Resolvers = {
  Mutation: {
    login: async (_, { email, password }, { prisma }) => {
      const user = await prisma.users.findUnique({ where: { email } });
      if (!user) {
        throw new Error("User not found");
      }

      const isValid = await bcrypt.compare(password, user.password);
      if (!isValid) {
        throw new Error("Invalid password");
      }

      return {
        token: jwt.sign(
          { email: user.email, role: user.role },
          process.env.JWT_SECRET as string
        ),
        user: {
          email: user.email,
          role: user.role,
          name: user.name,
        },
      };
    },
  },
};

export default authResolvers;
