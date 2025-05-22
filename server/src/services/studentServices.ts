import { Pool } from "pg";

export async function fetchStudents(pgPool: Pool) {
  const result = await pgPool.query(
    "SELECT id, name, age, class_id FROM students"
  );
  return result.rows;
}

export async function fetchStudent(pgPool: Pool, studentId: string) {
  const result = await pgPool.query(
    "SELECT id, name, age, class_id FROM students WHERE id = $1",
    [studentId]
  );
  return result.rows[0];
}

export async function saveStudent(
  pgPool: Pool,
  name: string,
  age: number,
  class_id?: string | null
) {
  const result = await pgPool.query(
    "INSERT INTO students (name, age, class_id) VALUES ($1, $2, $3) RETURNING *",
    [name, age, class_id]
  );
  return result.rows[0];
}

export async function deleteStudent(pgPool: Pool, studentId: string) {
  const result = await pgPool.query(
    "DELETE FROM students WHERE id = $1 RETURNING *",
    [studentId]
  );

  return result.rowCount !== 0;
}

export async function updateStudent(
  pgPool: Pool,
  studentId: string,
  name?: string | null,
  age?: number | null,
  class_id?: string | null
) {
  const fieldsToUpdate = [];
  const values = [];
  let paramIndex = 1;
  if (name !== undefined) {
    fieldsToUpdate.push(`name = $${paramIndex}`);
    values.push(name);
    paramIndex++;
  }

  if (age !== undefined) {
    fieldsToUpdate.push(`age = $${paramIndex}`);
    values.push(age);
    paramIndex++;
  }

  if (class_id !== undefined) {
    fieldsToUpdate.push(`class_id = $${paramIndex}`);
    values.push(class_id);
    paramIndex++;
  }

  if (fieldsToUpdate.length === 0) {
    throw new Error("No fields to update");
  }
  const setClause = fieldsToUpdate.join(", ");
  values.push(studentId);
  const query = `UPDATE students SET ${setClause} WHERE id = $${paramIndex} RETURNING *`;
  console.log("query", query);
  console.log("values", values);
  const result = await pgPool.query(query, values);
  return result.rows[0];
}
