"use client";

import styled, { css } from "styled-components";

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { motion } from "motion/react";

export const TriggerButton = styled(motion.button)`
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
`;

export const DropdownMenuContent = styled(DropdownMenu.Content)``;

export const ContentWrapperDiv = styled(motion.div)`
  background: var(--plum-5);
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 150px;
  border-radius: 8px;
  border: 2px solid var(--plum-10);
`;

const DropdownMenuItemStyles = css`
  padding: 8px;
  border-radius: 4px;
  &[data-highlighted] {
    background-color: var(--plum-1);
  }
  &[data-state="open"] {
    background-color: var(--plum-1);
  }
`;

export const DropdownMenuItem = styled(DropdownMenu.Item)`
  ${DropdownMenuItemStyles}
`;

export const ExpandableDropdownMenuItem = styled(DropdownMenu.SubTrigger)`
  ${DropdownMenuItemStyles}
  display: flex;
  gap: 8px;
  justify-content: space-between;

  align-items: center;
`;

export const DropdownMenuArrow = styled(DropdownMenu.Arrow)`
  fill: var(--plum-5);
  stroke: var(--plum-10);
  stroke-width: 2px;
`;
