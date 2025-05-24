import StudentGallery from "@/components/StudentGallery";
import { Wrapper } from "./styles";
import { PageTitle } from "../styles";
import Spacer from "@/components/Spacer";

export const dynamic = 'force-dynamic';

function StudentsPage({ children }: { children: React.ReactNode }) {
  return (
    <Wrapper>
      <PageTitle>Students</PageTitle>
      <Spacer size={16} />
      <StudentGallery />
      {children}
    </Wrapper>
  );
}

export default StudentsPage;
