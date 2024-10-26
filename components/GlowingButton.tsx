import React from "react";
import { cn } from "@/lib/utils";

type PropsType = {
  children: React.ReactNode;
  href: string;
  className?: string;
};

const GlowingButton: React.FC<PropsType> = ({ children, href, className }) => {
  return (
    <div className={cn("relative mx-auto max-w-xl group", className)}>
      <div className="absolute -inset-0.5 bg-[#685ef7] dark:bg-[#e7adf0] rounded-lg blur opacity-60 group-hover:opacity-100 group-hover:duration-300 transition duration-1000 delay-100" />
      {/* <Button className="w-full">{children}</Button> */}
      <div className="relative px-6 py-3 dark:bg-white/80 dark:text-black bg-black/80 text-white rounded-lg leading-none">
        <a href={href} className="p-3">
          {children}
        </a>
      </div>
    </div>
  );
};

export default GlowingButton;
