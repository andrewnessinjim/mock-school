import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import { Resolvers } from "../generated/graphql_types";
import { fetchUser } from "../services/authService";

const authResolvers: Resolvers = {
  Mutation: {
    login: async (_, { email, password }, { prisma }) => {
      const user = await fetchUser(prisma, email);
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
          process.env.JWT_SECRET as string,
          { expiresIn: "7d" }
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
