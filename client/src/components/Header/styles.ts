"use client";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { MEDIA_QUERIES } from "@/constants";
import styled from "styled-components";

export const Wrapper = styled.main`
  ${MaxWidthWrapper};
  min-height: 72px;
  border-bottom: 2px solid var(--plum-7);
  display: flex;
  align-items: center;
  gap: 24px;

  @media ${MEDIA_QUERIES.phoneAndBelow} {
    flex-direction: column;
    gap: 24px;
    padding-bottom: 16px;
  }
`;

export const Heading = styled.h1`
  margin-right: auto;
`;

export const PrimaryHeader = styled.div`
  display: flex;
  flex: 1;
  gap: 24px;
  @media ${MEDIA_QUERIES.phoneAndBelow} {
    margin-top: 16px;
    gap: 8px;
    align-self: start;
  }
`;
export const SecondaryHeader = styled.div``;
