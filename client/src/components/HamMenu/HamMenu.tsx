"use client";

import * as React from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import {
  ContentWrapperDiv,
  DropdownMenuArrow,
  DropdownMenuContent,
  DropdownMenuItem,
  ExpandableDropdownMenuItem,
  HamButton,
} from "./styles";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { ChevronRight, MenuIcon } from "lucide-react";

function ContentWrapper({ children }: { children: React.ReactNode[] }) {
  return (
    <ContentWrapperDiv
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
      {children}
    </ContentWrapperDiv>
  );
}

interface MenuItem {
  label: string;
}

interface MenuItemWithSubItems {
  label: string;
  subItems: MenuItem[];
}

export type MenuItems = (MenuItem | MenuItemWithSubItems)[];
interface Props {
  menuItems: MenuItems;
}
function HamMenu({ menuItems }: Props) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <DropdownMenu.Root open={isOpen} onOpenChange={(open) => setIsOpen(open)}>
      <DropdownMenu.Trigger asChild>
        <HamButton
          aria-label="Menu"
          animate={{
            backgroundColor: isOpen ? "var(--plum-6)" : "var(--plum-1)",
          }}
          whileHover={{
            backgroundColor: "var(--plum-6)",
          }}
        >
          <VisuallyHidden>Menu</VisuallyHidden>
          <MenuIcon size={32} />
        </HamButton>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenuContent sideOffset={5} align="start" avoidCollisions>
          <ContentWrapper>
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
                        <ContentWrapper>
                          {item.subItems.map((subItem, subIndex) => (
                            <DropdownMenuItem key={subIndex}>
                              {subItem.label}
                            </DropdownMenuItem>
                          ))}
                        </ContentWrapper>
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
          </ContentWrapper>
        </DropdownMenuContent>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}

export default HamMenu;
