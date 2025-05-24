"use client";

import React from "react";
import * as motion from "motion/react-client";
import styled from "styled-components";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

export default function ErrorPage() {
  return (
    <Wrapper
      key={Math.random()}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      Something went wrong!{"  "}
      <LinkButton onClick={() => window.location.reload()}>
        Try again
      </LinkButton>
    </Wrapper>
  );
}

const Wrapper = styled(motion.div)`
  ${MaxWidthWrapper}
  display: flex;
  justify-content: center;
  margin-top: 4rem;
  gap: 8px;
`;
const LinkButton = styled.button`
  background-color: transparent;
  border: none;
  color: var(--plum-11);
  text-decoration: underline;
  cursor: pointer;
  font-size: inherit;
  padding: 0;
  margin: 0;
`;
