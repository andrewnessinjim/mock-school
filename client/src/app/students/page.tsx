import StudentGallery from "@/components/StudentGallery";
import { Wrapper } from "./styles";
import { PageTitle } from "../styles";
import Spacer from "@/components/Spacer";

export function StudentsPage() {
  return (
    <Wrapper>
      <PageTitle>Students</PageTitle>
      <Spacer size={16} />
      <StudentGallery />
    </Wrapper>
  );
}

export default StudentsPage;
