"use client";

import SectionTitle from "@/components/section-title";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const HowToBuy = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-y-6">
      <SectionTitle title="How To Buy" />

      <div>
        <p className="mt-2 text-muted-foreground text-xl font-semibold">
          Built on the lightning-fast, low-cost Solana blockchain, TAWT is the
          utility token that powers the SimpliTaught ecosystem-bringing secure,
          scalable, and decentralized transactions to education.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white shadow-lg shadow-slate-500/50 rounded-3xl p-4 text-muted-foreground flex flex-col items-center justify-center gap-y-6 text-center">
          <strong className="text-4xl">Step 1</strong>
          <p className="font-semibold text-2xl">
            Create a Solana-compatible wallet like Phantom or Solflare.
          </p>
        </div>

        <div className="bg-slate-700 shadow-lg shadow-purple-500/50 rounded-3xl p-4 text-white flex flex-col items-center justify-center gap-y-6 text-center">
          <strong className="text-4xl">Step 2</strong>
          <p className="font-semibold text-2xl">
            Purchase SOL from an exchange (Binance, Coinbase, etc.).
          </p>
        </div>

        <div className="bg-purple-700 shadow-lg shadow-purple-500/50 rounded-3xl p-4 text-white flex flex-col items-center justify-center gap-y-6 text-center">
          <strong className="text-3xl">Step 3</strong>
          <p className="font-semibold text-xl">
            Send SOL to your wallet and swap it for TAWT on a DEX like Raydium.
          </p>
        </div>
      </div>

      <Button
        variant={"primary"}
        size={"lg"}
        asChild
        className="w-[250px] h-[60px] mt-10 text-2xl"
      >
        <a
          href=" https://www.pinksale.finance/solana/launchpad/E5GfpvbsUZ2pQ4RbC1E6KeZGjWh7N1LNEGE1uRABeV62"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={"/logo-t.png"}
            alt="TAWT Coin"
            width={50}
            height={50}
            priority
          />
          Buy Now
        </a>
      </Button>
    </div>
  );
};

export default HowToBuy;
