import StudentGallery from "@/components/StudentGallery";
import { LoadingWrapper, Wrapper } from "./styles";
import { PageTitle } from "../styles";
import Spacer from "@/components/Spacer";
import React from "react";
import Spinner from "@/components/Spinner";

export const dynamic = "force-dynamic";

function StudentsPage({ children }: { children: React.ReactNode }) {
  return (
    <Wrapper>
      <PageTitle>Students</PageTitle>
      <Spacer size={16} />
      <React.Suspense fallback={<LoadingIndicator />}>
        <StudentGallery />
      </React.Suspense>
      {children}
    </Wrapper>
  );
}

function LoadingIndicator() {
  return (
    <LoadingWrapper>
      <Spinner />
    </LoadingWrapper>
  );
}

export default StudentsPage;
