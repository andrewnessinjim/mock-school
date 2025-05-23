"use client";

import * as Dialog from "@radix-ui/react-dialog";
import styled from "styled-components";

export const DialogOverlay = styled(Dialog.Overlay)`
  position: fixed;
  inset: 0;
  background-color: var(--mauve-1);
  opacity: 0.5;
`;
