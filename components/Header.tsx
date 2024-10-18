import Link from "next/link";
import React from "react";
import ThemeSwitch from "./ThemeSwitch";

const Header = () => {
  return (
    <div className="text-center sticky top-0 z-50 w-full bg-transparent dark:bg-black/30 backdrop-blur-md">
      <nav className="flex justify-evenly items-center gap-4 p-2">
        <h1 className="text-2xl flex-1 text-left p-2 font-leagueSpartan font-semibold">
          nSquare.dev
        </h1>
        <div className="flex-1 flex justify-evenly">
          <Link href={""}>About</Link>
          <Link href={""}>Experience</Link>
          <Link href={""}>Contact</Link>
        </div>
        <div className="flex-1 flex justify-end">
          <ThemeSwitch />
        </div>
      </nav>
    </div>
  );
};

export default Header;
