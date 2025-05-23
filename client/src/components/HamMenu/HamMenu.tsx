"use client";

import * as React from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import {
  ContentWrapper,
  DropdownMenuArrow,
  DropdownMenuContent,
  DropdownMenuItem,
  HamButton,
} from "./styles";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { MenuIcon } from "lucide-react";

function HamMenu() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <DropdownMenu.Root open={isOpen} onOpenChange={(open) => setIsOpen(open)}>
      <DropdownMenu.Trigger asChild>
        <HamButton aria-label="Menu">
          <VisuallyHidden>Menu</VisuallyHidden>
          <MenuIcon size={32} />
        </HamButton>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenuContent sideOffset={5} align="start">
          <ContentWrapper
            initial={{
              opacity: 0,
              scaleY: 0,
            }}
            animate={{
              opacity: 1,
              scaleY: 1,
            }}
            style={{
              transformOrigin: "top left",
            }}
          >
            <DropdownMenuItem>Item 1</DropdownMenuItem>
            <DropdownMenuItem>Item 2</DropdownMenuItem>
            <DropdownMenuItem>Item 3</DropdownMenuItem>
            <DropdownMenuItem>Item 4</DropdownMenuItem>
            <DropdownMenuItem>Item 5</DropdownMenuItem>
            <DropdownMenuItem>Item 6</DropdownMenuItem>
            <DropdownMenuArrow />
          </ContentWrapper>
        </DropdownMenuContent>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}

export default HamMenu;
