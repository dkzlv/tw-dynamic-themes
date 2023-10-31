import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

import { getVariables } from "../../../lib/runtime";
import { FormContent } from "./Form";

const hueCookie = "theme-hue",
  darkModeCookie = "theme-dark-mode";

const getHue = () => cookies().get(hueCookie)?.value ?? "40";
const getDarkMode = () => cookies().get(darkModeCookie)?.value ?? "no";

export const getThemeDataFromCookies = () => {
  return {
    darkMode: getDarkMode(),
    hue: getHue(),
  };
};

export function getThemeData(hue: string, darkMode: boolean) {
  const accent = getVariables({ baseName: "accent", hue: +hue });

  return {
    className: darkMode ? "dark" : "",
    style: Object.fromEntries(accent),
  };
}

export async function ThemePicker() {
  async function updateTheme(form: FormData) {
    "use server";

    cookies().set(hueCookie, form.get("hue") as string, {
      maxAge: 1704085200,
    });
    cookies().set(
      darkModeCookie,
      form.get("force-dark") == "on" ? "yes" : "no",
      { maxAge: 1704085200 },
    );

    revalidatePath("/api/my-theme");
  }

  return (
    <form action={updateTheme} className="md:col-span-2">
      <FormContent darkMode={getDarkMode() == "yes"} hue={getHue()} />
    </form>
  );
}
