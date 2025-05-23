import * as React from "react";
import { Heading, Wrapper } from "./styles";
import HamMenu, { MenuItems } from "../HamMenu";

const hamMenuItems: MenuItems = [
  {
    label: "Home",
  },
  {
    label: "About",
  },
  {
    label: "Courses",
    subItems: [
      { label: "Course 1" },
      { label: "Course 2" },
      { label: "Course 3" },
    ],
  },
  {
    label: "Contact",
  },
  {
    label: "Blog",
  },
  {
    label: "Resources",
    subItems: [{ label: "Resource 1" }, { label: "Resource 2" }],
  },
  {
    label: "Login",
  },
];

function Header() {
  return (
    <Wrapper>
      <HamMenu menuItems={hamMenuItems} />
      <Heading>Mock School</Heading>
    </Wrapper>
  );
}

export default Header;
