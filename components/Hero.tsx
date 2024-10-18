"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useTransform, useScroll, motion } from "framer-motion";
import GoogleMap from "./GoogleMap";

const Hero = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: targetRef });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  const [ip, setIP] = useState<string>("none");

  useEffect(() => {
    const fetchLocation = async () => {
      const { ip } = await fetch("/api/get-ip").then((res) => res.json());
      console.log("from Hero", ip);
    };
    fetchLocation();
  }, []);

  return (
    <div ref={targetRef} className="relative h-[200vh]">
      <div className="flex sticky top-10 items-center h-[90vh] justify-between overflow-hidden">
        <motion.div
          style={{ x }}
          className="flex items-center snap-both snap-mandatory"
        >
          <div className="flex flex-col gap-4 justify-center items-center w-screen h-full snap-center">
            <Image
              src={"/images/avatar.png"}
              width={120}
              height={120}
              alt="Avatar"
              className="size-52 rounded-full border-4 border-zinc-400"
            />
            <div className="w-full max-w-5xl text-center font-leagueSpartan">
              <h2 className="text-4xl  font-leagueSpartan">Nguyen Nguyen</h2>
              <h3 className="text-3xl  ">Software Engineer</h3>
              <p className="text-xl">
                Transforming{" "}
                <span className="bg-[#d5c5ff] dark:bg-[#3a0342] p-1">
                  ideas
                </span>{" "}
                into digital{" "}
                <span className="bg-[#d5c5ff] dark:bg-[#3a0342] p-1">
                  solutions
                </span>
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center w-screen h-full snap-center">
            <div className="w-full max-w-5xl">
              <div className="bg-transparent rounded-lg flex gap-5 items-center justify-center">
                {/* <Image
                  src={"/images/avatar.png"}
                  width={120}
                  height={120}
                  alt="Avatar"
                  className="size-60 rounded-lg border-4 border-zinc-400"
                /> */}
                <GoogleMap />
                <div className="font-leagueSpartan flex flex-col">
                  <div className="flex flex-col pb-1">
                    <h2 className="font-medium text-xl">
                      Hi, I am Nguyen Nguyen 👋
                    </h2>
                    <h3 className="text-lg leading-tight">
                      I'm a detail oriented, user-minded software engineer based
                      in Los Angeles, CA
                    </h3>
                  </div>
                  <div>
                    <p className="pt-1 mb-1 text-justify">
                      I dive head on and turn complex challenges into elegant
                      and efficient solution utilizing modern techlogies like
                      Typescript, Tailwind CSS, and Next.js. I constantly ask
                      myself the question of what can be improved to enhance
                      users' experiences. And I truly believe that mindset of
                      constant improvement that makes me better everyday.
                    </p>
                    {/* <h3 className="text-lg">
                      "Your most unhappy customers are your greatest source of
                      learning" – Bill Gates
                    </h3>
                    <p className="pt-1 mb-1">
                      During and after my education, I worked in the food
                      industry, starting as a server and eventually becoming a
                      front-of-house manager. What began as a way to earn money
                      quickly turned into an invaluable learning experience. I
                      gained essential skills like communication, organization,
                      and active listening—lessons that have stayed with me and
                      shaped my approach to work and life. These experiences
                      reinforced my belief in the power of continuous learning,
                      both on the job and beyond.
                    </p> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
