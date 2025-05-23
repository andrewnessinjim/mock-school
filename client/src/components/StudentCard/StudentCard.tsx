import * as React from "react";
import { StyledLink, Title, Wrapper } from "./styles";
import Spacer from "../Spacer";

interface Props {
  student: {
    id: number;
    name: string;
    age: number;
    class: {
      description: string;
    };
  };
}

function StudentCard({ student }: Props) {
  return (
    <Wrapper
      animate={{
        boxShadow: "2px 2px 5px var(--mauve-4)",
      }}
      whileHover={{
        boxShadow: "2px 2px 10px var(--mauve-8)",
        scale: 1.01,
      }}
    >
      <StyledLink href={`/students/student/${student.id}`}>
        <Title>{student.name}</Title>
        <Spacer size={12} />
        <p>Class: {student.class?.description ?? "No class assigned"}</p>
        <Spacer size={4} />
        <p>Age: {student.age ?? "No age assigned"}</p>
      </StyledLink>
    </Wrapper>
  );
}

export default StudentCard;
