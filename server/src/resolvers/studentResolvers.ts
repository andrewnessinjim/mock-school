import {
  deleteStudent,
  fetchStudent,
  fetchStudents,
  saveStudent,
  updateStudent,
} from "../services/studentServices";
import {
  Resolvers,
  SortOrder,
  StudentFilter,
} from "../generated/graphql_types";
import { Prisma } from "@prisma/client";
import { fetchClass } from "../services/classService";
import { fetchAttendance } from "../services/attendanceService";

function graphqlToPrismaFilter(
  filter?: StudentFilter | null
): Prisma.studentsWhereInput | undefined {
  if (!filter) {
    return undefined;
  }

  const { age, class_id } = filter;
  return {
    age: {
      ...(age?.lte ? { lte: age?.lte } : undefined),
      ...(age?.gte ? { gte: age?.gte } : undefined),
      ...(age?.gt ? { gt: age?.gt } : undefined),
      ...(age?.lt ? { lt: age?.lt } : undefined),
      ...(age?.equals ? { equals: age?.equals } : undefined),
      ...(age?.not ? { not: age?.not } : undefined),
    },
    class_id: class_id ? { equals: class_id } : undefined,
  };
}

function graphqlToPrismaSort(
  sort?: SortOrder[] | null
): Prisma.studentsOrderByWithRelationInput | undefined {
  if (!sort) {
    return undefined;
  }

  const orderBy: Prisma.studentsOrderByWithRelationInput = {};
  sort.forEach((sortItem) => {
    const { field, direction } = sortItem;
    orderBy[field] = direction;
  });
  return orderBy;
}

const studentResolvers: Resolvers = {
  Student: {
    class: async (parent, _, { prisma }) => {
      if (!parent.class_id) {
        return null;
      }

      return fetchClass(prisma, parent.class_id);
    },
    subjects: async (parent, _, { prisma }) => {
      if (!parent.class_id) {
        return null;
      }
      return prisma.subjects.findMany({
        where: { class_id: parent.class_id },
      });
    },
    attendance: async (parent, _, { prisma }) => {
      if (!parent.id) {
        return null;
      }
      return fetchAttendance(prisma, parent.id);
    },
  },
  Query: {
    students: async (_, args, { prisma }) => {
      const { filter, sort, cursor, pageSize } = args;

      return fetchStudents(
        prisma,
        cursor ?? 1,
        pageSize ?? 10,
        graphqlToPrismaFilter(filter),
        graphqlToPrismaSort(sort)
      );
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
