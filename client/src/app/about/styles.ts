"use client";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import styled from "styled-components";

export const Wrapper = styled.main`
  ${MaxWidthWrapper};
  max-width: var(--max-text-container-width);
`;
