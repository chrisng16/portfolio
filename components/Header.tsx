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
    <div className="text-center font-leagueSpartan sticky top-0 h-15 z-20 w-full bg-transparent dark:bg-black/30 backdrop-blur-md overflow-x-clip">
      <nav className="flex justify-evenly items-center gap-4 p-2">
        <h1 className="text-2xl flex-1 text-left p-2 font-leagueSpartan font-semibold">
          nSquare.dev
        </h1>
        <div className="flex-1 hidden md:flex justify-evenly">
          <Link href="#about" className="group transition duration-300">
            About
            <span
              className={cn(
                "block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-black/50 dark:bg-white/50",
                active === "about" ? "bg-black dark:bg-white max-w-full" : ""
              )}
            ></span>
          </Link>
          <Link href="#experience" className="group transition duration-300">
            Experience
            <span
              className={cn(
                "block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-black/50 dark:bg-white/50",
                active === "experience"
                  ? "bg-black dark:bg-white max-w-full"
                  : ""
              )}
            ></span>
          </Link>
          <Link href="#contact" className="group transition duration-300">
            Contact
            <span
              className={cn(
                "block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-black/50 dark:bg-white/50",
                active === "contact" ? "bg-black dark:bg-white max-w-full" : ""
              )}
            ></span>
          </Link>
        </div>
        <div className="flex-1 hidden md:flex justify-end p-2">
          <ThemeSwitch />
        </div>

        {/* Navbar Drawer for small screen */}
        <div className="flex md:hidden dark:text-white">
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="relative group z-20"
          >
            <div className="relative flex items-center justify-center rounded-md w-10 h-10 transform transition-all bg-none hover:ring-2 ring-gray-300 ring-opacity-30 group-focus:ring-4 duration-200">
              <div
                className={`flex flex-col justify-between w-4 h-4 transform transition-all duration-300 origin-center overflow-hidden ${
                  isOpen ? "-rotate-180" : ""
                }`}
              >
                <span
                  className={`bg-black dark:bg-white h-[2px] w-6 transform transition-all duration-500 ${
                    isOpen ? "rotate-[41deg]" : ""
                  } -translate-x-1`}
                ></span>
                <span className="bg-black dark:bg-white  h-[2px] w-6 rounded transform transition-all duration-500 "></span>
                <span
                  className={`bg-black dark:bg-white  h-[2px] w-6 transform transition-all duration-500 ${
                    isOpen ? "-rotate-[41deg]" : ""
                  } -translate-x-1`}
                ></span>
              </div>
            </div>
          </button>

          <div className="md:hidden" role="dialog" aria-modal="true">
            <div
              className={`fixed flex flex-col inset-y-0 ${
                isOpen ? "right-0" : "-right-full"
              } z-10 w-full h-screen overflow-y-auto bg-white/90 dark:bg-black/90  backdrop-blur px-4 py-8 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 transition-all duration-500`}
            >
              <div className="mt-10 flow-root">
                <div className="space-y-2 grid">
                  <a
                    href="#about"
                    onClick={() => setIsOpen(!isOpen)}
                    className="text-left rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:underline"
                  >
                    About
                  </a>
                  <a
                    href="#experience"
                    onClick={() => setIsOpen(!isOpen)}
                    className="text-left rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:underline"
                  >
                    Experience
                  </a>
                  <a
                    href="#contact"
                    onClick={() => setIsOpen(!isOpen)}
                    className="text-left rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:underline"
                  >
                    Contact
                  </a>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="settings">
                      <AccordionTrigger className="rounded-lg px-3 py-2 text-base font-semibold leading-7">
                        Settings
                      </AccordionTrigger>
                      <AccordionContent className="flex justify-between mt-1 px-4 items-center">
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
