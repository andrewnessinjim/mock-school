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
    students: async (_, __, { pgPool }) => {
      return fetchStudents(pgPool);
    },
    student: async (_, { id: studentId }, { pgPool }) => {
      return fetchStudent(pgPool, studentId);
    },
  },
  Mutation: {
    addStudent: async (_, { name, age, class_id }, { pgPool }) => {
      return saveStudent(pgPool, name, age, class_id);
    },
    updateStudent: async (_, { id, name, age, class_id }, { pgPool }) => {
      console.log("updateStudent", id, name, age, class_id);
      return updateStudent(pgPool, id, name, age, class_id);
    },
    deleteStudent: async (_, { id }, { pgPool }) => {
      return deleteStudent(pgPool, id);
    },
  },
};

export default studentResolvers;
