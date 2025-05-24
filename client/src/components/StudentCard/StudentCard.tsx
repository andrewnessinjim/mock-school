import * as React from "react";
import { StyledLink, Title, Wrapper } from "./styles";
import Spacer from "../Spacer";
import { Student } from "../../../types";
import InfoSection from "../InfoSection";

interface Props {
  student: Student;
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
      <StyledLink href={`/students/${student.id}`}>
        <Title>{student.name}</Title>
        <Spacer size={12} />
        <InfoSection
          age={student.age}
          className={student.class?.description}
          id={student.id}
          showImage={false}
        />
      </StyledLink>
    </Wrapper>
  );
}

export default StudentCard;
