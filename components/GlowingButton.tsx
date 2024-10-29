import React from "react";
import { cn } from "@/lib/utils";

type PropsType = {
  children: React.ReactNode;
  href: string;
  className?: string;
  download?: string;
};

const GlowingButton: React.FC<PropsType> = ({
  children,
  href,
  className,
  download = href,
}) => {
  return (
    <div className={cn("group relative mx-auto max-w-xl", className)}>
      <div className="absolute -inset-1 rounded-lg bg-[#7551d1] opacity-60 blur-lg transition delay-100 duration-1000 group-hover:opacity-100 group-hover:duration-300 dark:bg-[#b067e0]" />
      {/* <Button className="w-full">{children}</Button> */}
      <div className="relative rounded-lg bg-black/80 px-6 py-3 leading-none text-white dark:bg-white/80 dark:text-black">
        <a href={href} download={download} className="p-3">
          {children}
        </a>
      </div>
    </div>
  );
};

export default GlowingButton;
