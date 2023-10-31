import { PropsWithChildren, ReactNode } from "react";

export function Field({
  children,
  id,
  label,
}: PropsWithChildren<{ id: string; label: ReactNode }>) {
  return (
    <div>
      <label className="block text-sm font-medium leading-6" htmlFor={id}>
        {label}
      </label>
      <div className="mt-2">{children}</div>
    </div>
  );
}
