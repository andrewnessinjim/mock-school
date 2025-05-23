import StudentGallery from "@/components/StudentGallery";
import { Wrapper } from "./styles";

export function StudentsPage() {
  return (
    <Wrapper>
      <h2>Students</h2>
      <StudentGallery />
    </Wrapper>
  );
}

export default StudentsPage;
