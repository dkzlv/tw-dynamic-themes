"use client";

import { Switch as LibSwitch } from "@headlessui/react";
import { cx } from "class-variance-authority";
import { ComponentProps, useState } from "react";

export function Switch({
  defaultChecked,
  label,
  onChange,
  ...rest
}: { label: string } & ComponentProps<typeof LibSwitch>) {
  const [checked, setChecked] = useState(defaultChecked);

  return (
    <LibSwitch
      {...rest}
      checked={checked}
      className={cx(
        checked ? "bg-accent-600" : "bg-gray-600",
        "relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-accent-600 focus:ring-offset-2",
      )}
      onChange={(checked) => {
        setChecked(checked);
        onChange?.(checked);
      }}
    >
      <span className="sr-only">{label}</span>
      <span
        aria-hidden="true"
        className={cx(
          checked ? "translate-x-5" : "translate-x-0",
          "pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out",
        )}
      />
    </LibSwitch>
  );
}
