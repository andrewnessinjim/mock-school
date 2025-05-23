"use client";

import { usePathname } from "next/navigation";

import styled from "styled-components";
import Link from "next/link";
import { motion } from "motion/react";

function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isActive = pathname === href;
  return (
    <NavLinkWrapper href={href}>
      {isActive && <ActiveLinkHighlighter layoutId="active-link" />}
      <LinkContent>{children}</LinkContent>
    </NavLinkWrapper>
  );
}

export const NavLinkWrapper = styled(Link)`
  text-decoration: none;
  color: inherit;
  padding: 8px 12px;
  display: inline-block;
  position: relative;

  &:hover {
    text-decoration: underline;
  }
`;

export const ActiveLinkHighlighter = styled(motion.div)`
  position: absolute;
  inset: 0;
  background-color: var(--mauve-7);
  border-radius: 4px;
`;

export const LinkContent = styled.div`
  position: relative;
  z-index: 1;
`;

export default NavLink;
