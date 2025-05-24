import authResolvers from "./authResolvers";
import studentResolvers from "./studentResolvers";

const resolvers = {
  ...studentResolvers,
  Query: {
    ...studentResolvers.Query,
  },
  Mutation: {
    ...studentResolvers.Mutation,
    ...authResolvers.Mutation,
  },
};

export default resolvers;
