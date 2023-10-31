"use client";

import dynamic from "next/dynamic";
import { ComponentProps } from "react";

const Picker = dynamic(() => import("simple-hue-picker/react"), {
  ssr: false,
});

export default function HuePicker(props: ComponentProps<typeof Picker>) {
  return <Picker step={10} {...props} />;
}
