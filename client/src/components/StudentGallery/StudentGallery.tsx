import * as React from "react";
import { gql } from "@apollo/client";
import StudentCard from "../StudentCard";
import { Wrapper } from "./styles";
import apolloClient from "@/apolloClient";
import { Student } from "../../../types";

const GET_STUDENTS = gql`
  query GetStudents($sort: [SortOrder!], $pageSize: Int, $cursor: Int) {
    students(sort: $sort, pageSize: $pageSize, cursor: $cursor) {
      items {
        id
        name
        age
        class {
          description
        }
      }
    }
  }
`;
// function delay(ms: number): Promise<void> {
//   return new Promise(resolve => setTimeout(resolve, ms));
// }

async function StudentGallery() {
  const result = await apolloClient.query({
    query: GET_STUDENTS,
    variables: {
      sort: [{ field: "name", direction: "asc" }],
      pageSize: 12,
      cursor: 0,
    },
  });

  const students = result.data.students;

  return (
    <Wrapper>
      {students.items.map((student: Student) => (
        <StudentCard key={student.id} student={student} />
      ))}
    </Wrapper>
  );
}

export default StudentGallery;
