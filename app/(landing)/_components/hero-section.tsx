"use client";

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
    <div className="w-full flex gap-4 border rounded-xl mt-20 lg:mt-32">
      <div className="flex flex-col items-center justify-center p-4 lg:p-8">
        <div className="space-y-4">
          <h1 className="text-7xl lg:text-9xl bg-gradient-to-r from-[#212ce6] to-[#6268d9] bg-clip-text font-extrabold text-transparent">
            TAWT
          </h1>
          <p className="mt-4 text-4xl text-muted-foreground">
            {`TAWT - Gamifying the Future of Learning`}
          </p>

          <p className="mt-2 text-muted-foreground text-xl font-semibold">
            {`Today's education technology
            often falls short in making learning fun, engaging, and rewarding.
            That's where TAWT Coin (TAWT) comes in.`}
          </p>
          <p className="mt-2 text-muted-foreground text-xl font-semibold">
            Built on the lightning-fast, low-cost Solana blockchain, TAWT is the
            utility token that powers the SimpliTaught ecosystem-bringing
            secure, scalable, and decentralized transactions to education.
          </p>
          {/* <Button variant={"secondary"} size={"lg"}>
            Buy Now
          </Button> */}
        </div>
      </div>
      <div className="w-full h-full hidden lg:block">
        <CustomLottie animationData={animationData} loop={true} />
      </div>
    </div>
  );
};

export default HeroSection;
