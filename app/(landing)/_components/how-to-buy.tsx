"use client";

import SectionTitle from "@/components/section-title";

const HowToBuy = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-y-6">
      <SectionTitle title="How To Buy" />

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
    </div>
  );
};

export default HowToBuy;
