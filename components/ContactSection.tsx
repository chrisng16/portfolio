import React from "react";
import ContactForm from "./ContactForm";

const ContactSection = () => {
  return (
    <div className="relative h-full w-full bg-gradient-to-r from-transparent from-10% via-white/40 via-60% to-white/80 to-100% font-leagueSpartan dark:via-transparent/20 dark:via-80% dark:to-transparent/40 md:h-[75vh]">
      <div className="absolute left-0 top-0 -z-10 h-full w-full bg-[url('/images/endless-constellation.svg')] opacity-50 repeat-infinite dark:bg-[url('/images/starry.svg')]"></div>
      <div className="h-full w-full p-6 font-leagueSpartan md:p-0">
        <div className="mx-auto flex h-full max-w-5xl flex-col items-center gap-6 p-0 md:flex-row md:p-6">
          <div className="w-full space-y-2 md:w-1/2">
            <h2 className="text-center text-3xl leading-none md:text-left md:text-4xl">
              Let&apos;s Connect...
            </h2>
            <p className="text-center text-lg md:text-left">
              I&apos;m excited to bring my skills in software development to
              your team. Let&apos;s connect to discuss how I can contribute to
              your company&apos;s success. Reach me at nguyen.nguyen@nSquare.dev
              or using the Contact Form.
            </p>
          </div>

          <ContactForm />
        </div>

        {/* <div className="h-min top-0 hidden sm:flex flex-col w-full items-center sm:items-baseline ">
          <h3 className="text-4xl font-bold">Nguyen Nguyen</h3>
          <h3 className="text-2xl font-semibold">Software Engineer</h3>
          <div className="flex flex-col gap-2 text-xl leading-normal font-leagueSpartan pt-2">
            <Link href={""} className="flex items-center gap-1">
              <Icons.MapPinIcon /> <span>Los Angeles, CA</span>
            </Link>
            <Link href={""} className="flex items-center gap-1">
              <Icons.PhoneIcon /> <span>408-614-9166</span>
            </Link>
            <Link
              href={""}
              className="text-xl leading-normal flex items-center gap-1"
            >
              <Icons.MailIcon /> <span>nguyen.nguyen@nSquare.dev</span>
            </Link>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default ContactSection;
