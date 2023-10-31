import type { Metadata } from "next";

import { Menu } from "@/components/menu/Menu";
import { getThemeDataFromCookies } from "@/components/themePicker/ThemePicker";
import { Inter } from "next/font/google";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dynamic Tailwind themes",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const search = new URLSearchParams(getThemeDataFromCookies());

  const { className, style } = await (
    await fetch(
      process.env.NEXT_PUBLIC_HOST + "/api/my-theme?" + search.toString(),
    )
  ).json();

  return (
    <html className={"h-full " + className} lang="en" style={style}>
      <body
        className={
          inter.className +
          " h-full bg-accent-50 text-accent-950 dark:bg-accent-950 dark:text-accent-50"
        }
      >
        <Menu>{children}</Menu>
      </body>
    </html>
  );
}
