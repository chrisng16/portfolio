import React from "react";
import ContactForm from "./ContactForm";

const ContactSection = () => {
  return (
    <div className="w-full font-leagueSpartan relative">
      <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/wavey-fingerprint.svg')] opacity-30 -z-10 repeat-infinite"></div>
      <div className="p-6 md:p-0 w-full font-leagueSpartan">
        <div className="max-w-5xl flex flex-col md:flex-row items-center gap-6 mx-auto p-0 md:p-6">
          <div className="w-full md:w-1/2 space-y-2">
            <h2 className="text-4xl text-center md:text-left">
              Let&apos;s Connect...
            </h2>
            <p className="text-lg">
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
