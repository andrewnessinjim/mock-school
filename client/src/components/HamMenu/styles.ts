"use client";

import styled from "styled-components";

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { motion } from "motion/react";

export const HamButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DropdownMenuContent = styled(DropdownMenu.Content)``;

export const ContentWrapper = styled(motion.div)`
  background: var(--plum-5);
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 150px;
  border-radius: 8px;
`;

export const DropdownMenuItem = styled(DropdownMenu.Item)`
  padding: 8px;
  &[data-highlighted]{
    background-color: var(--plum-1);
  }
`;

export const DropdownMenuArrow = styled(DropdownMenu.Arrow)`
  fill: var(--plum-5);
`;
