import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import StyledComponentsRegistry from "@/components/StyledComponentsRegistry";

import "./globals.css";
import ApolloContextProvider from "@/components/ApolloContextProvider";
import Header from "@/components/Header";
import Spacer from "@/components/Spacer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mock School",
  description: "Created by Andrew for UltraShip recruitment process",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <div id="app-root">
          <ApolloContextProvider>
            <StyledComponentsRegistry>
              <Header />
              <Spacer size={24} />
              {children}
            </StyledComponentsRegistry>
          </ApolloContextProvider>
        </div>
      </body>
    </html>
  );
}
