import Link from "next/link";
import React from "react";
import { Icons } from "./Icons";
import { LinkedInLogoIcon, GitHubLogoIcon } from "@radix-ui/react-icons";

const Footer = () => {
  return (
    <div className="w-full font-leagueSpartan backdrop-blur dark:bg-black/80">
      <div className="mx-auto max-w-5xl">
        <div className="flex w-full flex-row justify-between p-6 pb-0">
          <div className="flex flex-col">
            <h3 className="text-3xl font-bold">nSquare.dev</h3>
            <div className="mt-1 flex flex-col justify-center gap-2 font-leagueSpartan leading-none">
              <Link href={""} className="flex items-center gap-1">
                <Icons.MapPinIcon /> <span>Los Angeles, CA</span>
              </Link>
              <Link
                href={"tel:408-614-9166"}
                className="flex items-center gap-1"
              >
                <Icons.PhoneIcon /> <span>408-614-9166</span>
              </Link>
              <Link
                href={"mailto:nguyen.nguyen@nsquare.dev"}
                className="flex items-center gap-1"
              >
                <Icons.MailIcon /> <span>nguyen.nguyen@nSquare.dev</span>
              </Link>
            </div>
          </div>

          <div className="flex gap-2 pt-2">
            <Link href={"https://www.linkedin.com/in/chrisng16"}>
              <LinkedInLogoIcon className="size-9" />
            </Link>
            <Link href={"https://github.com/chrisng16"}>
              <GitHubLogoIcon className="size-9" />
            </Link>
          </div>
        </div>
        <div className="flex w-full flex-col items-center justify-center pb-2 pt-4">
          <span className="text-center text-base">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.nSquare.dev"
            >
              © 2024 Nguyen Nguyen. All Rights Reserved.
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
