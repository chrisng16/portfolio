// "use client";
// import MousePosition from "@/lib/MousePosition";
// import { useState } from "react";
// interface Position {
//   x: number;
//   y: number;
// }
const Background = () => {
  <div className="dur fixed inset-0 z-20 bg-[radial-gradient(circle_300px_at_90%_200px,rgba(29,78,216,0.15),transparent)] transition lg:absolute"></div>;
  //   const [position, setPosition] = useState<Position>({ x: 0, y: 0 });

  // Function to update mouse position received from child
  //   const handleMousePosition = (pos: Position) => {
  //     setPosition(pos);
  //     console.log(pos);
  //   };
  return (
    <div className="fixed left-0 top-0 -z-10 h-full w-full">
      {/* <MousePosition onMouseMove={handleMousePosition} />
      <div
        className={`fixed inset-0 z-20 transition duration-300 lg:absolute `}
        style={{
          background: `radial-gradient( 600px at ${position.x}px ${position.y}px,#d5c5ff80,transparent 60%)`,
        }}
      ></div> */}
      <div className="absolute inset-0 top-0 -z-10 h-screen w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem] dark:bg-black dark:bg-[linear-gradient(to_right,#0f0f0f_1px,transparent_1px),linear-gradient(to_bottom,#0f0f0f_1px,transparent_1px)]">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_600px_at_10%_200px,#d5c5ff,transparent)] opacity-100 dark:bg-[radial-gradient(circle_1000px_at_10%_50%,#3a0342,transparent)] dark:opacity-70"></div>
      </div>
    </div>
  );
};

export default Background;
