import { PrismaClient } from "@prisma/client";
import { Subject } from "../generated/graphql_types";

export function fetchClass(
  prisma: PrismaClient,
  classId: string
): Promise<Subject[] | null> {
  return prisma.subjects.findMany({
    where: { class_id: classId },
  });
}
