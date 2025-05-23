import StudentGallery from "@/components/StudentGallery";
import { Wrapper } from "./styles";
import { PageTitle } from "../styles";

export function StudentsPage() {
  return (
    <Wrapper>
      <PageTitle>Students</PageTitle>
      <StudentGallery />
    </Wrapper>
  );
}

export default StudentsPage;
