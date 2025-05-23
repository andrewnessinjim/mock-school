import { Prisma, PrismaClient } from "@prisma/client";

interface PaginationArgs {
  cursor?: { id: number };
  skip?: number;
  take?: number;
}
export async function fetchStudents(
  prisma: PrismaClient,
  cursor: number,
  pageSize: number = 10,
  direction: "forward" | "backward" = "forward",
  filter?: Prisma.studentsWhereInput,
  orderBy?: Prisma.studentsOrderByWithRelationInput
) {

  const paginationArgs: PaginationArgs = cursor
    ? {
        cursor: { id: cursor },
        skip: 1,
        take: direction === "forward" ? pageSize + 1 : -(pageSize + 1),
      }
    : {};

  const students = await prisma.students.findMany({
    where: filter,
    orderBy,
    ...paginationArgs,
  });

  const hasMore = students.length > pageSize;

  const slicedStudents = hasMore
    ? direction === "forward"
      ? students.slice(0, pageSize)
      : students.slice(1)
    : students;

  return {
    items: slicedStudents,
    hasNextPage: direction === "forward" ? hasMore : !!cursor,
    hasPreviousPage: direction === "backward" ? hasMore : !!cursor,
  };
}

export async function fetchStudent(prisma: PrismaClient, studentId: number) {
  return prisma.students.findUnique({
    where: { id: studentId },
  });
}

export async function saveStudent(
  prisma: PrismaClient,
  name: string,
  age: number,
  class_id?: string | null
) {
  const student = await prisma.students.create({
    data: {
      name,
      age,
      class_id,
    },
  });
  return student;
}

export async function deleteStudent(prisma: PrismaClient, studentId: number) {
  await prisma.students.delete({
    where: { id: studentId },
  });
  return true;
}

export async function updateStudent(
  prisma: PrismaClient,
  studentId: number,
  name?: string | null,
  age?: number | null,
  class_id?: string | null
) {
  const data: any = {
    ...(name !== undefined ? { name } : {}),
    ...(age !== undefined ? { age } : {}),
    ...(class_id !== undefined ? { class_id } : {}),
  };

  const student = await prisma.students.update({
    where: { id: Number(studentId) },
    data,
  });
  return student;
}
