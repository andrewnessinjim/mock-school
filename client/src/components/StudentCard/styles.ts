"use client";

import { motion } from "motion/react";
import Link from "next/link";
import styled from "styled-components";

export const Wrapper = styled(motion.div)`
  display: inline-block;
  font-size: inherit;
  text-align: start;
  background-color: var(--plum-3);
  padding: 12px;
  border-radius: 8px;
  border: 1px solid var(--plum-5);
  cursor: pointer;
`;

export const StyledLink = styled(Link)``;

export const Title = styled.h3`
  text-align: center;
`;
