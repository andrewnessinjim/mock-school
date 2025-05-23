import { Prisma, PrismaClient } from "@prisma/client";

export async function fetchStudents(
  prisma: PrismaClient,
  filter?: Prisma.studentsWhereInput
) {
  return prisma.students.findMany({
    where: {
      ...filter,
    },
  });
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
