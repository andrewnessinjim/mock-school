"use client";

import * as React from "react";
import { useRouter } from "next/navigation";

import * as Dialog from "@radix-ui/react-dialog";
import styled from "styled-components";
import { Student } from "../../../types";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import Spinner from "../Spinner";
import { motion } from "motion/react";
import SubjectsSection from "./SubjectsSection";
import AttendanceSection from "./AttendanceSection";
import InfoSection from "./InfoSection";

interface Props {
  student?: Student;
  isPlaceholder?: boolean;
}

function StudentPopup({ student, isPlaceholder = false }: Props) {
  const [isOpen, setIsOpen] = React.useState(true);

  const router = useRouter();

  return (
    <Dialog.Root
      open={isOpen}
      modal={true}
      onOpenChange={(open) => {
        setIsOpen(open);
        if (!open) {
          router.push("/students");
        }
      }}
    >
      <Dialog.Portal>
        <DialogOverlay />
        {isPlaceholder && !student ? (
          <Placeholder />
        ) : (
          <Dialog.Content>
            <DialogContent
              initial={{ opacity: 0, y: "-100%", x: "-50%" }}
              animate={{ opacity: 1, y: 0, x: "-50%" }}
            >
              <ContentWrapper>
                {student && (
                  <>
                    <DialogTitle>{student.name}</DialogTitle>
                    <Dialog.Description>
                      <VisuallyHidden>
                        Full details for {student.name}
                      </VisuallyHidden>
                    </Dialog.Description>

                    <InfoSection
                      age={student.age}
                      className={student.class.description}
                      id={student.id}
                    />
                    <SubjectsSection subjects={student.subjects} />
                    <AttendanceSection attendance={student.attendance} />
                  </>
                )}
              </ContentWrapper>
            </DialogContent>
          </Dialog.Content>
        )}
      </Dialog.Portal>
    </Dialog.Root>
  );
}

function Placeholder() {
  return (
    <PlaceholderWrapper>
      <Spinner />

      <VisuallyHidden>
        <Dialog.Title>Loading...</Dialog.Title>
      </VisuallyHidden>
      <VisuallyHidden>
        <Dialog.Description>Student Popup</Dialog.Description>
      </VisuallyHidden>
    </PlaceholderWrapper>
  );
}

const PlaceholderWrapper = styled.div`
  display: grid;
  grid-template-areas: "spinner";
  place-items: center;
  position: fixed;
  inset: 0;
`;

const DialogOverlay = styled(Dialog.Overlay)`
  position: fixed;
  inset: 0;
  background-color: var(--mauve-1);
  opacity: 0.5;
`;

const DialogContent = styled(motion.div)`
  background-color: var(--mauve-5);
  max-width: 90vw;
  width: 800px;
  min-height: 500px;
  max-height: 80vh;
  padding: 16px 32px;

  overflow-y: auto;
  position: fixed;
  left: 50%;
  top: 10%;
  border-radius: 8px;
  overflow-y: auto;
`;

const ContentWrapper = styled.div`
  width: fit-content;
  margin-left: auto;
  margin-right: auto;
  display: grid;
  grid-template-areas:
    "title title"
    "info attendance"
    "subjects .";
  gap: 16px 48px;
`;

const DialogTitle = styled(Dialog.Title)`
  text-align: center;
  margin-bottom: 16px;
  grid-area: title;
  border-bottom: 2px solid var(--plum-7);
  padding-bottom: 12px;
`;

export default StudentPopup;
