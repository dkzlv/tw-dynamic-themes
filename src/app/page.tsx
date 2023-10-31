import { Button } from "@/components/Button";
import { Field } from "@/components/Field";
import { Input, Select } from "@/components/Input";
import { ThemePicker } from "@/components/themePicker/ThemePicker";
import Image from "next/image";
import { PropsWithChildren, ReactNode } from "react";

import Pic from "./avatar.png";

const secondaryNavigation = [
  { current: true, href: "#", name: "Account" },
  { current: false, href: "#", name: "Notifications" },
  { current: false, href: "#", name: "Billing" },
  { current: false, href: "#", name: "Teams" },
  { current: false, href: "#", name: "Integrations" },
];

export default function Root() {
  return (
    <>
      <main>
        <header className="border-b border-black/5 dark:border-white/5">
          {/* Secondary navigation */}
          <nav className="flex overflow-x-auto py-4">
            <ul
              className="flex min-w-full flex-none gap-x-6 px-4 text-sm font-semibold leading-6 sm:px-6 lg:px-8"
              role="list"
            >
              {secondaryNavigation.map((item) => (
                <li key={item.name}>
                  <a
                    className={
                      item.current
                        ? "text-accent-500 dark:text-accent-200"
                        : "hover:text-accent-500 dark:hover:text-accent-200"
                    }
                    href={item.href}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </header>

        <div className="divide-y divide-black/5 dark:divide-white/5">
          <div className="grid max-w-7xl grid-cols-1 gap-x-8 gap-y-10 px-4 py-16 sm:px-6 md:grid-cols-3 lg:px-8">
            <Explainer title="Personal Information">
              Use a permanent address where you can receive mail.
            </Explainer>

            <form className="md:col-span-2">
              <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:max-w-xl sm:grid-cols-6">
                <div className="col-span-full flex items-center gap-x-8">
                  <Image
                    alt=""
                    className="h-24 w-24 flex-none object-cover"
                    height={512}
                    src={Pic.src}
                    width={512}
                  />
                  <div>
                    <Button theme="ghost">Change avatar</Button>
                    <p className="mt-2 text-xs leading-5 text-accent-600 dark:text-accent-200">
                      JPG, GIF or PNG. 1MB max.
                    </p>
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <Field id="first-name" label="First name">
                    <Input
                      autoComplete="given-name"
                      id="first-name"
                      name="first-name"
                    />
                  </Field>
                </div>

                <div className="sm:col-span-3">
                  <Field id="last-name" label="Last name">
                    <Input
                      autoComplete="family-name"
                      id="last-name"
                      name="last-name"
                    />
                  </Field>
                </div>

                <div className="col-span-full">
                  <Field id="email" label="Email address">
                    <Input
                      autoComplete="email"
                      id="email"
                      name="email"
                      type="email"
                    />
                  </Field>
                </div>

                <div className="col-span-full">
                  <Field id="timezone" label="Timezone">
                    <Select id="timezone" name="timezone">
                      <option>Pacific Standard Time</option>
                      <option>Eastern Standard Time</option>
                      <option>Greenwich Mean Time</option>
                    </Select>
                  </Field>
                </div>
              </div>

              <div className="mt-8 flex">
                <Button>Save</Button>
              </div>
            </form>
          </div>

          <div className="grid max-w-7xl grid-cols-1 gap-x-8 gap-y-10 px-4 py-16 sm:px-6 md:grid-cols-3 lg:px-8">
            <Explainer title="Customize appearance">
              Change the way product looks so the experience is tailored for
              you.
            </Explainer>

            <ThemePicker />
          </div>

          <div className="grid max-w-7xl grid-cols-1 gap-x-8 gap-y-10 px-4 py-16 sm:px-6 md:grid-cols-3 lg:px-8">
            <Explainer title="Delete account">
              No longer want to use our service? You can delete your account
              here. This action is not reversible. All information related to
              this account will be deleted permanently.
            </Explainer>

            <form className="flex items-start md:col-span-2">
              <Button theme="alert">Yes, delete my account</Button>
            </form>
          </div>
        </div>
      </main>
    </>
  );
}

function Explainer({
  children,
  title,
}: PropsWithChildren<{ title: ReactNode }>) {
  return (
    <div>
      <h2 className="text-base font-semibold leading-7">{title}</h2>
      <p className="mt-1 text-sm leading-6 text-accent-800 dark:text-accent-100">
        {children}
      </p>
    </div>
  );
}
