import * as React from "react";
import { Heading, PrimaryHeader, SecondaryHeader, Wrapper } from "./styles";
import HamMenu from "../HamMenu";
import NavBar from "../NavBar";

function Header() {
  return (
    <Wrapper>
      <PrimaryHeader>
        <HamMenu />
        <Heading>Mock School</Heading>
      </PrimaryHeader>
      <SecondaryHeader>
        <NavBar />
      </SecondaryHeader>
    </Wrapper>
  );
}

export default Header;
