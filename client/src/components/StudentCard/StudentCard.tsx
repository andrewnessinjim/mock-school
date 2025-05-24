import * as React from "react";
import { DropdownTriggerWrapper, StyledLink, Title, Wrapper } from "./styles";
import Spacer from "../Spacer";
import { Student } from "../../../types";
import InfoSection from "../InfoSection";
import StyledDropdownMenu from "../StyledDropdownMenu";
import { Ellipsis } from "lucide-react";

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
        <div>
          <Title>{student.name}</Title>
          <Spacer size={12} />
          <InfoSection
            age={student.age}
            className={student.class?.description}
            id={student.id}
            showImage={false}
          />
        </div>
      </StyledLink>
      <DropdownTriggerWrapper>
        <StyledDropdownMenu
          triggerButtonContent={<Ellipsis />}
          menuItems={[
            { label: "Edit" },
            { label: "Delete" },
            { label: "Flag" },
          ]}
        />
      </DropdownTriggerWrapper>
    </Wrapper>
  );
}

export default StudentCard;
