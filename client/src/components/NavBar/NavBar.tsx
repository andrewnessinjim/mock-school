import * as React from "react";
import { NavList, NavListItem, Wrapper } from "./styles";
import NavLink from "./NavLink";

function NavBar() {
  return (
    <Wrapper>
      <NavList>
        <NavListItem>
          <NavLink href="/">Home</NavLink>
        </NavListItem>
        <NavListItem>
          <NavLink href="/students">Students</NavLink>
        </NavListItem>
        <NavListItem>
          <NavLink href="/about">About</NavLink>
        </NavListItem>
      </NavList>
    </Wrapper>
  );
}

export default NavBar;
