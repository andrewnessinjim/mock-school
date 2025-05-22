import { fetchStudents } from "../services/studentServices";
import { Resolvers } from "../generated/graphql_types";

const books = [
  {
    title: "The Awakening",
    author: "Kate Chopin",
  },
  {
    title: "City of Glass",
    author: "Paul Auster",
  },
];

const studentResolvers: Resolvers = {
  Query: {
    books: () => books,
    students: async (_, __dirname, { pgPool }) => {
      return fetchStudents(pgPool);
    },
  },
};

export default studentResolvers;
