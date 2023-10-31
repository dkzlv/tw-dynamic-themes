"use client";

import { VariantProps, cva } from "class-variance-authority";

const button = cva(
  "rounded-md px-3 py-2 text-sm font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
  {
    defaultVariants: { theme: "accent" },
    variants: {
      theme: {
        accent: "bg-accent-500 text-accent-50 hover:bg-accent-400",
        alert:
          "bg-red-500 text-white hover:bg-danger-400 focus-visible:outline-danger-500",
        ghost:
          "bg-black/10 hover:bg-black/20 dark:bg-white/10 dark:hover:bg-white/20",
      },
    },
  },
);
type ButtonVariants = VariantProps<typeof button>;

export function Button({
  className,
  theme,
  ...props
}: JSX.IntrinsicElements["button"] & ButtonVariants) {
  return (
    <button className={button({ className, theme })} type="button" {...props} />
  );
}
