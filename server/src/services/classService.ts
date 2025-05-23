import { PrismaClient } from "@prisma/client";
import { Class } from "../generated/graphql_types";

export function fetchClass(
  prisma: PrismaClient,
  classId: string
): Promise<Class | null> {
    console.log("Fetching class with ID:", classId);
  return prisma.classes.findUnique({
    where: { id: classId },
  });
}
