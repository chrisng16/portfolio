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
    <div className={cn("relative mx-auto max-w-xl group", className)}>
      <div className="absolute -inset-1 bg-[#7551d1] dark:bg-[#b067e0] rounded-lg blur-lg opacity-60 group-hover:opacity-100 group-hover:duration-300 transition duration-1000 delay-100" />
      {/* <Button className="w-full">{children}</Button> */}
      <div className="relative px-6 py-3 dark:bg-white/80 dark:text-black bg-black/80 text-white rounded-lg leading-none">
        <a href={href} download={download} className="p-3">
          {children}
        </a>
      </div>
    </div>
  );
};

export default GlowingButton;
