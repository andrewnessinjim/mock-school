"use client";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import styled from "styled-components";

export const Wrapper = styled.main`
  ${MaxWidthWrapper};
`;

export const LoadingWrapper = styled.div`
  width: 100%;
  margin-top: 2rem;
  display: flex;
  justify-content: center;
`;