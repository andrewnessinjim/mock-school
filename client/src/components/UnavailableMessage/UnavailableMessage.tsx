import * as React from "react";
import styled from "styled-components";

function UnavailableMessage() {
  return <Wrapper>Not Available</Wrapper>;
}

const Wrapper = styled.p`
  font-style: italic;
`;

export default UnavailableMessage;
