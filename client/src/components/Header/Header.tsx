import * as React from "react";
import { Heading, Wrapper } from "./styles";
import HamMenu from "../HamMenu";
import NavBar from "../NavBar";

function Header() {
  return (
    <Wrapper>
      <HamMenu />
      <Heading>Mock School</Heading>
      <NavBar />
    </Wrapper>
  );
}

export default Header;
