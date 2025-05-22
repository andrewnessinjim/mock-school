import {
  deleteStudent,
  fetchStudent,
  fetchStudents,
  saveStudent,
  updateStudent,
} from "../services/studentServices";
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
    students: async (_, __, { prisma }) => {
      return fetchStudents(prisma);
    },
    student: async (_, { id: studentId }, { prisma }) => {
      return fetchStudent(prisma, studentId);
    },
  },
  Mutation: {
    addStudent: async (_, { name, age, class_id }, { prisma }) => {
      return saveStudent(prisma, name, age, class_id);
    },
    updateStudent: async (_, { id, name, age, class_id }, { prisma }) => {
      return updateStudent(prisma, id, name, age, class_id);
    },
    deleteStudent: async (_, { id }, { prisma }) => {
      return deleteStudent(prisma, id);
    },
  },
};

export default studentResolvers;
