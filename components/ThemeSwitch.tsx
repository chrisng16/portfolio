"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, resolvedTheme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const handleToggle = () => {
    if (theme === "dark") setTheme("light");
    else setTheme("dark");
  };

  return (
    <label className="inline-flex cursor-pointer items-center">
      <input
        type="checkbox"
        checked={resolvedTheme === "dark"}
        className="peer sr-only"
        onChange={handleToggle}
      />
      <div className="relative h-7 w-12 rounded-full bg-[#8FB5F5] ring-2 ring-zinc-300 after:absolute after:start-[4px] after:top-[4px] after:size-5 after:rounded-full after:bg-[#ECD21F] after:shadow-none after:transition-all peer-checked:bg-gray-700 peer-checked:ring-zinc-800 peer-checked:after:translate-x-full peer-checked:after:bg-[#7B7B7B] peer-checked:after:shadow-[6px_0px_0_0_inset] peer-checked:after:shadow-black/20 dark:border-gray-600 rtl:peer-checked:after:-translate-x-full"></div>
    </label>
  );
};

export default ThemeSwitch;
