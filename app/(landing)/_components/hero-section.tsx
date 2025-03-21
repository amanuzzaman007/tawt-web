"use client";

import { Button } from "@/components/ui/button";
import animationData from "@/public/lottie-files/animation-1.json";
import dynamic from "next/dynamic";
// import { useRive } from "@rive-app/react-canvas";

const CustomLottie = dynamic(() => import("@/components/CustomLottie"), {
  ssr: false,
});

const HeroSection = () => {
  // const { RiveComponent } = useRive({
  //   src: "/rive-files/ayy_section.riv",
  //   stateMachines: "Timeline 2",
  //   autoplay: true,
  // });

  return (
    <div className="w-full flex gap-4 border rounded-xl">
      <div className="flex flex-col items-center justify-center p-8">
        <div className="space-y-4">
          <h1 className="text-9xl bg-gradient-to-r from-[#212ce6] to-[#6268d9] bg-clip-text font-extrabold text-transparent">
            TAWT
          </h1>
          <p className="mt-4 text-4xl text-muted-foreground">
            Revolutionizing the Future of Decentralized Finance
          </p>
          <p className="mt-2 text-muted-foreground text-2xl">
            Built on the Solana blockchain for lightning-fast transactions and
            ultra-low fees. Secure, scalable, and community-driven.
          </p>
          <Button variant={"secondary"} size={"lg"}>
            Buy Now
          </Button>
        </div>
      </div>
      <div className="w-full h-full">
        <CustomLottie animationData={animationData} loop={true} />
      </div>
    </div>
  );
};

export default HeroSection;
