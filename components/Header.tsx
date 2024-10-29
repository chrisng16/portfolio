"use client";
import Link from "next/link";
import React, { useState } from "react";
import ThemeSwitch from "./ThemeSwitch";
import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const Header = ({ active }: { active: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="h-15 sticky top-0 z-20 w-full overflow-x-clip bg-transparent text-center font-leagueSpartan backdrop-blur-md dark:bg-black/30">
      <nav className="flex items-center justify-evenly gap-4 p-2">
        <h1 className="flex-1 p-2 text-left font-leagueSpartan text-2xl font-semibold">
          nSquare.dev
        </h1>
        <div className="hidden flex-1 justify-evenly md:flex">
          <Link href="#about" className="group transition duration-300">
            About
            <span
              className={cn(
                "block h-0.5 max-w-0 bg-black/50 transition-all duration-300 group-hover:max-w-full dark:bg-white/50",
                active === "about" ? "max-w-full bg-black dark:bg-white" : "",
              )}
            ></span>
          </Link>
          <Link href="#experience" className="group transition duration-300">
            Experience
            <span
              className={cn(
                "block h-0.5 max-w-0 bg-black/50 transition-all duration-300 group-hover:max-w-full dark:bg-white/50",
                active === "experience"
                  ? "max-w-full bg-black dark:bg-white"
                  : "",
              )}
            ></span>
          </Link>
          <Link href="#contact" className="group transition duration-300">
            Contact
            <span
              className={cn(
                "block h-0.5 max-w-0 bg-black/50 transition-all duration-300 group-hover:max-w-full dark:bg-white/50",
                active === "contact" ? "max-w-full bg-black dark:bg-white" : "",
              )}
            ></span>
          </Link>
        </div>
        <div className="hidden flex-1 justify-end p-2 md:flex">
          <ThemeSwitch />
        </div>

        {/* Navbar Drawer for small screen */}
        <div className="flex dark:text-white md:hidden">
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="group relative z-20"
          >
            <div className="relative flex h-10 w-10 transform items-center justify-center rounded-md bg-none ring-gray-300 ring-opacity-30 transition-all duration-200 hover:ring-2 group-focus:ring-4">
              <div
                className={`flex h-4 w-4 origin-center transform flex-col justify-between overflow-hidden transition-all duration-300 ${
                  isOpen ? "-rotate-180" : ""
                }`}
              >
                <span
                  className={`h-[2px] w-6 transform bg-black transition-all duration-500 dark:bg-white ${
                    isOpen ? "rotate-[41deg]" : ""
                  } -translate-x-1`}
                ></span>
                <span className="h-[2px] w-6 transform rounded bg-black transition-all duration-500 dark:bg-white"></span>
                <span
                  className={`h-[2px] w-6 transform bg-black transition-all duration-500 dark:bg-white ${
                    isOpen ? "-rotate-[41deg]" : ""
                  } -translate-x-1`}
                ></span>
              </div>
            </div>
          </button>

          <div className="md:hidden" role="dialog" aria-modal="true">
            <div
              className={`fixed inset-y-0 flex flex-col ${
                isOpen ? "right-0" : "-right-full"
              } z-10 h-screen w-full overflow-y-auto bg-white/90 px-4 py-8 backdrop-blur transition-all duration-500 dark:bg-black/90 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10`}
            >
              <div className="mt-10 flow-root">
                <div className="grid space-y-2">
                  <a
                    href="#about"
                    onClick={() => setIsOpen(!isOpen)}
                    className="rounded-lg px-3 py-2 text-left text-base font-semibold leading-7 hover:underline"
                  >
                    About
                  </a>
                  <a
                    href="#experience"
                    onClick={() => setIsOpen(!isOpen)}
                    className="rounded-lg px-3 py-2 text-left text-base font-semibold leading-7 hover:underline"
                  >
                    Experience
                  </a>
                  <a
                    href="#contact"
                    onClick={() => setIsOpen(!isOpen)}
                    className="rounded-lg px-3 py-2 text-left text-base font-semibold leading-7 hover:underline"
                  >
                    Contact
                  </a>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="settings">
                      <AccordionTrigger className="rounded-lg px-3 py-2 text-base font-semibold leading-7">
                        Settings
                      </AccordionTrigger>
                      <AccordionContent className="mt-1 flex items-center justify-between px-4">
                        Toggle Theme <ThemeSwitch />
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
