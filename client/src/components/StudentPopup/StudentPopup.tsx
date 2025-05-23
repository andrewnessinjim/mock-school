"use client";

import * as React from "react";
import { useRouter } from "next/navigation";

import * as Dialog from "@radix-ui/react-dialog";
import styled from "styled-components";
import { Student } from "../../../types";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import Image from "next/image";
import Spinner from "../Spinner";

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
        <DialogContent>
          {isPlaceholder && !student ? (
            <Placeholder />
          ) : (
            student && (
              <>
                <Dialog.Title>{student.name}</Dialog.Title>
                <Dialog.Description>
                  <VisuallyHidden>
                    Full details for {student.name}
                  </VisuallyHidden>
                </Dialog.Description>
                <Image
                  src={`https://randomuser.me/api/portraits/lego/${
                    (student.id ? student.id : 0) % 10
                  }.jpg`}
                  width={200}
                  height={200}
                  alt={`Profile photo of ${student.name}`}
                />
              </>
            )
          )}
        </DialogContent>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

function Placeholder() {
  return (
    <PlaceholderWrapper>
      <Spinner />
      <Dialog.Title>
        <VisuallyHidden>Loading...</VisuallyHidden>
      </Dialog.Title>
      <Dialog.Description>
        <VisuallyHidden>Student Popup</VisuallyHidden>
      </Dialog.Description>
    </PlaceholderWrapper>
  );
}

const PlaceholderWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
`;

export const DialogOverlay = styled(Dialog.Overlay)`
  position: fixed;
  inset: 0;
  background-color: var(--mauve-1);
  opacity: 0.5;
`;

export const DialogContent = styled(Dialog.Content)`
  background-color: var(--mauve-5);
  width: 800px;
  max-width: 90vw;
  height: 500px;
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  top: 10%;
  border-radius: 8px;
  padding: 16px;
`;

export default StudentPopup;
