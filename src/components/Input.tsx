"use client";

import { cx } from "class-variance-authority";

const baseInputStyles =
  "block w-full rounded-md border-0 dark:bg-accent-950/30 py-1.5 shadow-sm ring-1 ring-inset ring-accent-200 dark:ring-accent-700 dark:focus:ring-accent-400 focus:ring-2 focus:ring-inset focus:ring-accent-500 sm:text-sm sm:leading-6";

export function Input({ className, ...rest }: JSX.IntrinsicElements["input"]) {
  return <input className={cx(baseInputStyles, className)} {...rest} />;
}

export function Select({
  className,
  ...rest
}: JSX.IntrinsicElements["select"]) {
  return (
    <select
      className={cx(baseInputStyles, "[&_*]:text-black", className)}
      {...rest}
    />
  );
}
