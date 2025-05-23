import { PrismaClient } from "@prisma/client";
import { Attendance } from "../generated/graphql_types";

export async function fetchAttendance(
  prisma: PrismaClient,
  studentId: number
): Promise<Attendance[] | null> {
  const rows = await prisma.attendance.findMany({
    where: { student_id: studentId },
    take: 10,
  });

  return rows.map((row) => ({
    ...row,
    date: row.date.toISOString(),
  }));
}
