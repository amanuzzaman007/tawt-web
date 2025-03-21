"use client";

import { useRive } from "@rive-app/react-canvas";

const WhatIsSection = () => {
  const { RiveComponent } = useRive({
    src: "/rive-files/monet.riv",
    stateMachines: "State Machine 1",
    animations: "Boolean 1",
    autoplay: true,
  });
  return (
    <div className="p-[2px] bg-gradient-to-b from-purple-800 to-black rounded-3xl">
      <div className="flex flex-col items-center justify-center gap-y-8 bg-[#010002] rounded-3xl p-6">
        <h3 className="font-bold text-4xl text-muted uppercase">
          What is Learn?
        </h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="text-lg font-medium text-muted space-y-6">
            <p>
              SimpliFi Coin (SIMF) is positioned as a groundbreaking solution
              that addresses key inefficiencies in the education sector. Built
              on the Solana blockchain, SimpliFi Coin (SIMF) facilitates
              low-cost, high-speed, and secure transactions that eliminate
              barriers associated with traditional financial systems. By
              removing intermediaries, SimpliFi Coin (SIMF) reduces cross-border
              payment fees, making education more affordable and accessible to
              learners worldwide.
            </p>
          </div>

          <div className="flex items-center justify-center">
            <div className="rounded-full overflow-hidden">
              <RiveComponent
                // onMouseEnter={() => rive && rive.play()}
                // onMouseLeave={() => rive && rive.pause()}
                className="w-[200px] h-[200px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatIsSection;
