"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import ThemeSwitch from "./ThemeSwitch";
import useHash from "@/hooks/use-hash";
import { cn } from "@/lib/utils";

const Header = ({ active }: { active: string }) => {
  return (
    <div className="text-center font-leagueSpartan sticky top-0 h-15 z-50 w-full bg-transparent dark:bg-black/30 backdrop-blur-md">
      <nav className="flex justify-evenly items-center gap-4 p-2">
        <h1 className="text-2xl flex-1 text-left p-2 font-leagueSpartan font-semibold">
          nSquare.dev
        </h1>
        <div className="flex-1 flex justify-evenly">
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
        <div className="flex-1 flex justify-end p-2">
          <ThemeSwitch />
        </div>
      </nav>
    </div>
  );
};

export default Header;
