"use client";

import * as React from "react";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { MenuIcon } from "lucide-react";
import StyledDropdownMenu from "../StyledDropdownMenu";
import { MenuItems } from "../../../types";

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

function HamMenu() {
  return (
    <StyledDropdownMenu
      triggerButtonContent={
        <>
          <VisuallyHidden>Menu</VisuallyHidden>
          <MenuIcon size={32} />
        </>
      }
      menuItems={hamMenuItems}
    />
  );
}

export default HamMenu;
