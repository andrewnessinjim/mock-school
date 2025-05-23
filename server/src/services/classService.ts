import { PrismaClient } from "@prisma/client";
import { Class } from "../generated/graphql_types";

export function fetchClass(
  prisma: PrismaClient,
  classId: string
): Promise<Class | null> {
  return prisma.classes.findUnique({
    where: { id: classId },
  });
}
