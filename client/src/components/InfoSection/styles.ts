"use client";

import styled from "styled-components";

export const Wrapper = styled.section`
  dl {
    display: grid;
    grid-template-columns: max-content auto;
    row-gap: 0.25rem;
    column-gap: 0.5rem;
    color: #f0f0f0;
  }

  dt {
    font-weight: bold;
    &::after {
      content: ":";
      margin-right: 0.25rem;
    }
  }
`;

export const DefinitionDescription = styled.dd<{ $italic?: boolean }>`
  margin: 0;
  font-style: ${({ $italic }) => ($italic ? "italic" : "normal")};
`;
