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
    <label className="inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        checked={resolvedTheme === "dark"}
        className="sr-only peer"
        onChange={handleToggle}
      />
      <div className="relative w-12 h-7 bg-[#8FB5F5] peer-checked:bg-gray-700 ring-2 ring-blue-500 peer-checked:ring-zinc-800 rounded-full peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full after:absolute after:top-[4px] after:start-[4px] peer-checked:after:bg-[#7B7B7B] peer-checked:after:shadow-[6px_0px_0_0_inset] after:shadow-none peer-checked:after:shadow-black/20 after:bg-[#ECD21F] after:rounded-full after:size-5 after:transition-all ad dark:border-gray-600 "></div>
    </label>
  );
};

export default ThemeSwitch;
