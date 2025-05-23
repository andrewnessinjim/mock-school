import * as React from "react";
import { Heading, Wrapper } from "./styles";
import HamMenu from "../HamMenu";

function Header() {
  return (
    <Wrapper>
      <HamMenu />
      <Heading>Mock School</Heading>
    </Wrapper>
  );
}

export default Header;
