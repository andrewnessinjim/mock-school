"use client";

import * as React from "react";
import { useQuery, gql } from "@apollo/client";

const GET_STUDENT = gql`
  query GetStudent($id: Int!) {
    student(id: $id) {
      id
      name
      age
      class {
        description
      }
    }
  }
`;

function StudentGallery() {
  const { loading, error, data } = useQuery(GET_STUDENT, {
    variables: { id: 1 },
  });

  if (loading) return <p>Loading student...</p>;
  if (error) return <p>Error loading student: {error.message}</p>;

  const student = data.student;

  return (
    <div className="student-card">
      <h3>{student.name}</h3>
      <p>Age: {student.age}</p>
      <p>Class: {student.class?.description ?? "No class assigned"}</p>
    </div>
  );
}

export default StudentGallery;
