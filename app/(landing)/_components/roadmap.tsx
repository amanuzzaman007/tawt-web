import SectionTitle from "@/components/section-title";
import { motion } from "framer-motion";

const roadmapSteps = [
  { id: 1, text: "1. Pre-Seed Funding, Seed Funding & Private Sale" },
  {
    id: 2,
    text: "2. Public Sale: Initial Coin Offering (ICO) / Initial DEX Offering (IDO) / Initial Exchange Offering (IEO)",
  },
  { id: 3, text: "3. Token Listing on Major Exchanges" },
  { id: 4, text: "4. Liquidity Provisioning" },
  { id: 5, text: "5. Airdrops and Forks" },
  { id: 6, text: "6. Staking Rewards" },
  { id: 7, text: "7. Network Upgrades or Protocol Announcements" },
  { id: 8, text: "8. Token Burn Events" },
  { id: 9, text: "9. Liquidity Unlock (Vesting Period Ends)" },
  { id: 10, text: "10. Bull Market Peaks & Market Cycles" },
  { id: 11, text: "11. Strategic Partnerships & Institutional Investments" },
  { id: 12, text: "12. NFT and Metaverse Integrations" },
  { id: 13, text: "13. DAO Voting & Governance Events" },
];

export default function Roadmap() {
  return (
    <div className="space-y-6 w-full overflow-hidden">
      <SectionTitle title="Roadmap" />
      <div className="space-y-4">
        <p>
          Simplitaught Coin (TAWT) Exchange Listing, Public Sales, and Growth
          Roadmap:
        </p>
        <div className="flex flex-col items-center relative py-4">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#948AE9]"></div>

          {roadmapSteps.map((step, index) => (
            <div
              key={step.id}
              className="relative flex w-full items-center my-2"
            >
              {/* Text Box Left */}
              {index % 2 === 0 ? (
                <motion.div
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="w-1/2 flex justify-end pr-10"
                >
                  <div className="bg-blue-600 text-white font-semibold p-2 lg:px-6 lg:py-3  text-sm lg:text-base rounded-lg shadow-lg w-max">
                    {step.text}
                  </div>
                </motion.div>
              ) : (
                <div className="w-1/2"></div>
              )}

              {/* Circle Marker */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-blue-600 rounded-full border-4 border-white"></div>

              {/* Text Box Right */}
              {index % 2 !== 0 ? (
                <motion.div
                  initial={{ opacity: 0, x: 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="w-1/2 flex justify-start pl-10"
                >
                  <div className="bg-blue-600 text-white font-semibold p-2 lg:px-6 lg:py-3  text-sm lg:text-base rounded-lg shadow-lg w-max">
                    {step.text}
                  </div>
                </motion.div>
              ) : (
                <div className="w-1/2"></div>
              )}
            </div>
          ))}

          {/* Arrow at Bottom */}
          <div className="mt-6">
            <div className="w-0 h-0 border-l-8 border-r-8 border-t-[16px] border-l-transparent border-r-transparent border-[#948AE9]"></div>
          </div>
        </div>{" "}
      </div>
    </div>
  );
}
