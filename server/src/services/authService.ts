import { PrismaClient } from "@prisma/client";

export async function fetchUser(prisma: PrismaClient, email: string) {
  return await prisma.users.findUnique({ where: { email } });
}
