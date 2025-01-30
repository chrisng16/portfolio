"use client";
// import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useTransform, useScroll, motion } from "framer-motion";
import GoogleMap from "./GoogleMap";
import GlowingButton from "./GlowingButton";

const Hero = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: targetRef });

  let scrollRange: Array<string> = ["0%", "0%", "0%"];
  if (typeof window !== "undefined") {
    if (window.matchMedia("(min-width: 640px)").matches) {
      scrollRange = ["0%", "-50%", "-50%"];
    } else {
      scrollRange = ["0%", "0%", "0%"];
    }
  }

  const x = useTransform(scrollYProgress, [0, 0.8, 1], scrollRange);

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [userLocation, setUserLocation] =
    useState<google.maps.LatLngLiteral | null>(null);
  const [distance, setDistance] = useState<number>(0);

  function calculateDistanceFromUser(userLoc: google.maps.LatLngLiteral) {
    const R = 6371; // Radius of the earth in km
    const myLoc: google.maps.LatLngLiteral = {
      lat: 34.0138,
      lng: -118.4405,
    };
    const dLat = deg2rad(myLoc.lat - userLoc.lat); // deg2rad below
    const dLng = deg2rad(myLoc.lng - userLoc.lng);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(myLoc.lat)) *
        Math.cos(deg2rad(userLoc.lat)) *
        Math.sin(dLng / 2) *
        Math.sin(dLng / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const d = (R * c) / 1.6; // Distance in km
    return Math.round(d);
  }

  function deg2rad(deg: number) {
    return deg * (Math.PI / 180);
  }

  const onLoadComplete = (userLoc: google.maps.LatLngLiteral) => {
    setUserLocation(userLoc);
    setIsLoading(false);
    setDistance(calculateDistanceFromUser(userLoc));
  };

  useEffect(() => {
    const fetchLocation = async () => {
      setIsLoading(true);
      const { location } = await fetch("/api/get-location").then((res) =>
        res.json(),
      );
      return location;
    };
    fetchLocation().then((res) => {
      onLoadComplete(res as google.maps.LatLngLiteral);
    });
  }, []);

  return (
    <div ref={targetRef} id="about" className="relative h-auto sm:h-[190vh]">
      <div className="sticky flex items-center justify-between overflow-hidden sm:top-12">
        <motion.div
          style={{ x }}
          className="relative flex h-auto flex-col items-center sm:flex-row"
        >
          <div className="flex h-[90vh] w-screen flex-col items-center justify-center gap-4">
            <div className="relative size-60 rounded-full border-4 border-zinc-400 bg-[url('/images/nn_avatar.png')] bg-cover">
              {/* <Image
                src={"/images/avatar.jpg"}
                width={150}
                height={150}
                alt="Avatar"
                className="relative size-60 -rotate-[8deg]"
              /> */}
            </div>
            <div className="w-full max-w-5xl text-center font-leagueSpartan">
              <h2 className="font-leagueSpartan text-4xl">Nguyen Nguyen</h2>
              <h3 className="text-3xl">Software Engineer</h3>
              <p className="text-xl">
                Transforming{" "}
                <span className="bg-[#d5c5ff] p-1 dark:bg-[#3a0342]">
                  ideas
                </span>{" "}
                into elegant{" "}
                <span className="bg-[#d5c5ff] p-1 dark:bg-[#3a0342]">
                  solutions
                </span>
              </p>
              <GlowingButton
                className="mt-4 max-w-fit"
                href={"/NguyenNguyen-SWE-Resume-v25.01.pdf"}
                download="NguyenNguyen-SWE-Resume"
              >
                Download Resume
              </GlowingButton>
            </div>
          </div>
          <div className="h-auto w-screen p-6">
            <div className="mx-auto flex w-full max-w-5xl flex-col items-center justify-center font-leagueSpartan">
              <div className="flex flex-col-reverse items-center justify-center gap-6 pb-1 md:flex-row">
                <div className="w-full md:w-1/2">
                  {isLoading || userLocation === null ? (
                    <div>Loading...</div>
                  ) : (
                    <GoogleMap userLocation={userLocation} />
                  )}
                </div>
                <div className="flex w-full flex-col justify-center gap-1 md:w-1/2">
                  <h2 className="text-xl font-medium">
                    {`Greetings from ${distance} miles away, I am Nguyen Nguyen 👋`}
                  </h2>
                  <h3 className="text-lg leading-tight">
                    I&apos;m a detail oriented, user-minded software engineer
                    based in Los Angeles, CA
                  </h3>
                  <p className="text-justify">
                    I dive head on and turn complex challenges into elegant and
                    efficient solution utilizing modern techlogies like
                    Typescript, Tailwind CSS, and Next.js. I constantly ask
                    myself the question of what can be improved to enhance
                    users&apos; experiences. And I truly believe that mindset of
                    constant improvement that makes me better everyday.
                  </p>
                </div>
              </div>

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
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
