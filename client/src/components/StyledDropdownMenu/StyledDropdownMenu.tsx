"use client";

import * as React from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import {
  ContentWrapperDiv,
  DropdownMenuArrow,
  DropdownMenuContent,
  DropdownMenuItem,
  ExpandableDropdownMenuItem,
  TriggerButton,
} from "./styles";

import { ChevronRight } from "lucide-react";
import { MenuItems } from "../../../types";

const fadingSlideDownAnimation = {
  initial: {
    opacity: 0,
    scaleY: 0,
  },
  animate: {
    opacity: 1,
    scaleY: 1,
  },
  style: {
    transformOrigin: "top left",
  },
};

function AnimationWrapper({ children }: { children: React.ReactNode[] }) {
  return (
    <ContentWrapperDiv {...fadingSlideDownAnimation}>
      {children}
    </ContentWrapperDiv>
  );
}

interface Props {
  menuItems: MenuItems;
  triggerButtonContent: React.ReactNode;
}

function StyledDropdownMenu({ menuItems, triggerButtonContent }: Props) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <DropdownMenu.Root open={isOpen} onOpenChange={(open) => setIsOpen(open)}>
      <DropdownMenu.Trigger asChild>
        <TriggerButton
          aria-label="Menu"
          animate={{
            backgroundColor: isOpen ? "var(--plum-6)" : "var(--plum-1)",
          }}
          whileHover={{
            backgroundColor: "var(--plum-6)",
          }}
        >
          {triggerButtonContent}
        </TriggerButton>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenuContent sideOffset={5} align="start" avoidCollisions>
          <AnimationWrapper>
            {menuItems.map((item, index) => {
              if ("subItems" in item) {
                return (
                  <DropdownMenu.Sub key={index}>
                    <ExpandableDropdownMenuItem>
                      {item.label}
                      <ChevronRight />
                    </ExpandableDropdownMenuItem>
                    <DropdownMenu.Portal>
                      <DropdownMenu.SubContent
                        sideOffset={12}
                        alignOffset={0}
                        avoidCollisions
                      >
                        <AnimationWrapper>
                          {item.subItems.map((subItem, subIndex) => (
                            <DropdownMenuItem key={subIndex}>
                              {subItem.label}
                            </DropdownMenuItem>
                          ))}
                        </AnimationWrapper>
                      </DropdownMenu.SubContent>
                    </DropdownMenu.Portal>
                  </DropdownMenu.Sub>
                );
              }
              return (
                <DropdownMenuItem key={index}>{item.label}</DropdownMenuItem>
              );
            })}

            <DropdownMenuArrow />
          </AnimationWrapper>
        </DropdownMenuContent>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}

export default StyledDropdownMenu;
