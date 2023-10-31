"use client";
import { Dialog, Transition } from "@headlessui/react";
import { Bars3Icon, MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import {
  ChartBarSquareIcon,
  Cog6ToothIcon,
  FolderIcon,
  GlobeAltIcon,
  ServerIcon,
  SignalIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { cx } from "class-variance-authority";
import Image from "next/image";
import { Fragment, PropsWithChildren, useState } from "react";

import Pic from "./avatar.png";

const navigation = [
  { current: false, href: "#", icon: FolderIcon, name: "Projects" },
  { current: false, href: "#", icon: ServerIcon, name: "Deployments" },
  { current: false, href: "#", icon: SignalIcon, name: "Activity" },
  { current: false, href: "#", icon: GlobeAltIcon, name: "Domains" },
  { current: false, href: "#", icon: ChartBarSquareIcon, name: "Usage" },
  { current: true, href: "#", icon: Cog6ToothIcon, name: "Settings" },
];

export function Menu(props: PropsWithChildren) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div>
      <Transition.Root as={Fragment} show={sidebarOpen}>
        <Dialog
          as="div"
          className="relative z-50 text-white dark:text-accent-200 xl:hidden"
          onClose={setSidebarOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-accent-950/80" />
          </Transition.Child>

          <div className="fixed inset-0 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                    <button
                      className="-m-2.5 p-2.5"
                      onClick={() => setSidebarOpen(false)}
                      type="button"
                    >
                      <span className="sr-only">Close sidebar</span>
                      <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                    </button>
                  </div>
                </Transition.Child>
                {/* Sidebar component, swap this element with another sidebar if you like */}
                <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-accent-600 px-6 ring-1 ring-white/10">
                  <div className="flex h-16 shrink-0 items-center">
                    <Image
                      alt="My Company"
                      className="h-8 w-auto"
                      height={512}
                      src={Pic.src}
                      width={512}
                    />
                  </div>
                  <nav className="flex flex-1 flex-col">
                    <ul className="flex flex-1 flex-col gap-y-7" role="list">
                      <li>
                        <ul className="-mx-2 space-y-1" role="list">
                          {navigation.map((item) => (
                            <li key={item.name}>
                              <a
                                className={cx(
                                  item.current &&
                                    "bg-accent-700 dark:bg-accent-800",
                                  "group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6",
                                )}
                                href={item.href}
                              >
                                <item.icon
                                  aria-hidden="true"
                                  className="h-6 w-6 shrink-0"
                                />
                                {item.name}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </li>
                      <li className="-mx-6 mt-auto">
                        <a
                          className="flex items-center gap-x-4 px-6 py-3 text-sm font-semibold leading-6 hover:bg-accent-800"
                          href="#"
                        >
                          <Image
                            alt=""
                            className="h-8 w-8 rounded-full bg-accent-800"
                            height={512}
                            src={Pic.src}
                            width={512}
                          />
                          <span className="sr-only">Your profile</span>
                          <span aria-hidden="true">Dan Kozlov</span>
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
      {/* Static sidebar for desktop */}
      <div className="hidden xl:fixed xl:inset-y-0 xl:z-50 xl:flex xl:w-72 xl:flex-col">
        {/* Sidebar component, swap this element with another sidebar if you like */}
        <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-accent-600 px-6 text-accent-50 ring-1 ring-white/5 dark:bg-black/10 dark:text-accent-200">
          <div className="flex h-16 shrink-0 items-center">
            <Image
              alt="My Company"
              className="h-8 w-auto"
              height={512}
              src={Pic.src}
              width={512}
            />
          </div>
          <nav className="flex flex-1 flex-col">
            <ul className="flex flex-1 flex-col gap-y-7" role="list">
              <li>
                <ul className="-mx-2 space-y-1" role="list">
                  {navigation.map((item) => (
                    <li key={item.name}>
                      <a
                        className={cx(
                          item.current && "bg-accent-700 dark:bg-accent-800",
                          "group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 hover:bg-accent-700 dark:hover:bg-accent-800",
                        )}
                        href={item.href}
                      >
                        <item.icon
                          aria-hidden="true"
                          className="h-6 w-6 shrink-0"
                        />
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
              <li className="-mx-6 mt-auto">
                <a
                  className="flex items-center gap-x-4 px-6 py-3 text-sm font-semibold leading-6 hover:bg-accent-700 dark:hover:bg-accent-800"
                  href="#"
                >
                  <Image
                    alt=""
                    className="h-8 w-8 rounded-full"
                    height={512}
                    src={Pic.src}
                    width={512}
                  />
                  <span className="sr-only">Your profile</span>
                  <span aria-hidden="true">Dan Kozlov</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="xl:pl-72">
        <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-6 border-b border-black/5 bg-accent-50 px-4 shadow-sm dark:border-white/5 dark:bg-accent-950 sm:px-6 lg:px-8">
          <button
            className="-m-2.5 p-2.5 xl:hidden"
            onClick={() => setSidebarOpen(true)}
            type="button"
          >
            <span className="sr-only">Open sidebar</span>
            <Bars3Icon aria-hidden="true" className="h-5 w-5" />
          </button>

          <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
            <form action="#" className="flex flex-1" method="GET">
              <label className="sr-only" htmlFor="search-field">
                Search
              </label>
              <div className="relative w-full">
                <MagnifyingGlassIcon
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-y-0 left-0 h-full w-5 text-accent-500"
                />
                <input
                  className="block h-full w-full border-0 bg-transparent py-0 pl-8 pr-0 focus:ring-0 sm:text-sm"
                  id="search-field"
                  name="search"
                  placeholder="Search..."
                  type="search"
                />
              </div>
            </form>
          </div>
        </div>

        {props.children}
      </div>
    </div>
  );
}
