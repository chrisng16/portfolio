"use client";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef,  } from "react";
import Image from "next/image";
const HeroMotion = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: targetRef });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  return (
    <div ref={targetRef} className="relative h-[200vh]">
      <div className="flex sticky top-0 items-center h-screen justify-between overflow-hidden">
        <motion.div style={{ x }} className="flex">
          <motion.div className="grid grid-cols-3 w-screen h-screen flex-shrink-0">
            <div className="col-span-2 flex items-center">
              <div className="flex-1">
                <motion.h2
                  initial={{ x: "-400%", opacity: 0 }}
                  animate={{
                    x: ["-400%", "165px"],
                    opacity: 1,
                    transition: {
                      duration: 0.5,
                    },
                  }}
                  className="text-right text-3xl"
                >
                  Hello World,
                </motion.h2>
                <motion.h2
                  initial={{ x: "-400%", opacity: 0 }}
                  animate={{
                    x: ["-400%", "165px"],
                    opacity: 1,
                    transition: {
                      duration: 0.5,
                    },
                  }}
                  className="text-right text-3xl"
                >
                  I am{" "}
                </motion.h2>
                <motion.h2
                  initial={{ x: "-400%", y: 50, opacity: 0 }}
                  animate={{
                    x: ["-400%", 380],
                    y: 60,
                    opacity: 1,
                    transition: {
                      duration: 0.5,
                      delay: 3.6,
                    },
                  }}
                  className="text-right text-3xl"
                >
                  And I am a Software Developer
                </motion.h2>
              </div>
              <motion.div
                initial={{ x: 100 }}
                animate={{
                  x: 0,
                  transition: {
                    delay: 4,
                  },
                }}
                className="flex flex-col flex-1 justify-center items-center leading-none"
              >
                <motion.span
                  initial={{ y: -400, fontSize: "3rem" }}
                  animate={{
                    x: 0,
                    y: [-400, 0, -300, 0, -150, 0],
                    fontSize: "3rem",
                    transition: {
                      delay: 1,
                      duration: 2,
                      times: [0, 0.1, 0.4, 0.55, 0.8, 1],
                    },
                  }}
                  className="font-semibold"
                >
                  Nguyen
                </motion.span>
                <motion.span
                  initial={{ x: "-400%", y: -30, fontSize: "3rem" }}
                  animate={{
                    x: ["-400%", 0, 0, 0, 0, 0, 0, 0],
                    y: [-30, -30, -30, -20, -20, -10, -10, 0],
                    opacity: 1,
                    fontSize: "3rem",
                    transition: {
                      duration: 3,
                      times: [0, 0.1, 0.44, 0.46, 0.73, 0.75, 0.98, 1],
                    },
                  }}
                  className="font-semibold"
                >
                  Nguyen
                </motion.span>
              </motion.div>
            </div>
            <motion.div
              initial={{ x: "400%", opacity: 0.8 }}
              animate={{
                x: ["400%", -160],
                opacity: 1,
                transition: {
                  duration: 0.5,
                  delay: 3.5,
                },
              }}
              className="flex-1 flex items-center"
            >
              <Image
                src={"/images/avatar.png"}
                alt={"Avatar"}
                width={200}
                height={0}
                className="rounded-full border-4 border-[#7B7B7B]"
              />
            </motion.div>
          </motion.div>

          <motion.div className="h-screen w-screen flex items-center justify-center flex-shrink-0  bg-black/20">
            hello world
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroMotion;
