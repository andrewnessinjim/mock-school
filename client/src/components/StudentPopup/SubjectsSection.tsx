import styled from "styled-components";
import { Subject } from "../../../types";
import UnavailableMessage from "../UnavailableMessage";

interface Props {
  subjects: Subject[];
}

function SubjectsSection({ subjects }: Props) {
  return (
    <Wrapper>
      <h3>Subjects</h3>
      {subjects && subjects.length !== 0 ? (
        <ul>
          {subjects?.map((subject) => (
            <li key={subject.id}>{subject.name}</li>
          ))}
        </ul>
      ) : (
        <UnavailableMessage />
      )}
    </Wrapper>
  );
}

const Wrapper = styled.section`
  grid-area: subjects;
  h3 {
    margin-bottom: 0.25em;
  }

  ul {
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 0.15rem;
    list-style: none;
  }
`;

export default SubjectsSection;
