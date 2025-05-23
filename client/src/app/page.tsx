import Header from "@/components/Header";
import { Wrapper } from "./styles";
import StudentGallery from "@/components/StudentGallery";

export default function Home() {
  return (
    <Wrapper>
      <Header />
      <StudentGallery />
    </Wrapper>
  );
}
