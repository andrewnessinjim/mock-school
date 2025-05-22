import { Pool } from "pg";

export async function fetchStudents(pgPool: Pool) {
  const result = await pgPool.query(
    "SELECT id, name, age, class_id FROM students"
  );
  return result.rows;
}
