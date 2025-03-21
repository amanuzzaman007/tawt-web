"use client";

import SectionTitle from "@/components/section-title";
import TokenDistributions from "./token-distributions";

// const pageData = {
//   data: [
//     {
//       subtitle: "Token Allocation",
//       text: "The token allocation for SimpliFi Coin (SIMF) is structured to support various aspects of the ecosystem and ensure long-term sustainability. Below is a detailed breakdown of the distribution:",
//       list: [
//         {
//           key: "Total Supply",
//           value: "2,000,000,000 TAWT",
//         },
//         {
//           key: "Team",
//           value:
//             "20% (400,000,000 TAWT) for project development and incentives for key personnel.",
//         },
//         {
//           key: "Investors",
//           value:
//             "25% (500,000,000 TAWT) allocated for early investors and strategic partners to secure initial funding.",
//         },
//         {
//           key: "Liquidity Pools",
//           value:
//             "15% (300,000,000 TAWT) reserved to facilitate liquidity for trade pairs on exchanges, ensuring efficient transactions.",
//         },
//         {
//           key: "Staking Rewards",
//           value:
//             "20% (400,000,000 TAWT) designated for rewards to incentivize users who stake their tokens within the ecosystem.",
//         },
//         {
//           key: "Community & Marketing",
//           value:
//             "10% (200,000,000 TAWT) to support community engagement, marketing initiatives, and educational outreach.",
//         },
//         {
//           key: "Reserve Fund",
//           value:
//             "10% (200,000,000 TAWT) kept in reserve for future development, strategic partnerships, and unforeseen operational costs.",
//         },
//       ],
//     },
//     {
//       subtitle: "Revenue Model",
//       text: "SimpliTaught Coin (TAWT) generates value through various channels, which include:",
//       list: [
//         {
//           key: "Transaction Fees",
//           value:
//             "A small fee will be charged for transactions made using TAWT within the platform. Users who utilize TAWT for payments will also enjoy a discount, incentivizing adoption.",
//         },
//         {
//           key: "Staking Rewards",
//           value:
//             "Users can stake their TAWT tokens to earn rewards. Staking not only benefits users with passive income but also helps stabilize token circulation by locking tokens.",
//         },
//         {
//           key: "Partnerships",
//           value:
//             "Collaborations with educational institutions and content creators to accept TAWT as payment for their resources can create additional revenue streams.",
//         },
//         {
//           key: "Marketplace for Educational Resources",
//           value:
//             "TAWT can be used in the marketplace to buy books, courses, and digital learning materials, further enhancing the ecosystem's utility and driving transactions.",
//         },
//       ],
//     },
//     {
//       subtitle: "Investment Opportunity",
//       text: "",
//       list: [
//         {
//           key: "ROI Projections",
//           value:
//             "Based on the initial token sale price and the anticipated growth of the SimpliTaught ecosystem, early investors can expect substantial returns on investment. Projections consider increased adoption rates, transaction volumes, and broader market conditions.",
//         },
//         {
//           key: "Growth Potential",
//           value:
//             "As the platform expands its user base and services, the demand for SIMF is likely to grow, resulting in increased usage and value over time. Key factors include.",
//         },
//         {
//           key: "",
//           value: "Expansion of educational offerings.",
//         },
//         {
//           key: "",
//           value: "Growing user engagement in the staking program.",
//         },
//         {
//           key: "",
//           value:
//             "Enhancements to the platform driven by AI and blockchain capabilities.",
//         },
//         {
//           key: "Staking Rewards",
//           value:
//             "Participants in the staking program receive monthly rewards, which can create an additional income stream and increase investor interest in holding SIMF for longer periods.",
//         },
//         {
//           key: "Market Forecasts",
//           value:
//             "Given the projected increase in platform adoption, comprehensive user engagement strategies, and the overall growth of the educational technology sector, the outlook for SIMF is optimistic, with comparative analysis against similar tokens in the marketplace suggesting favorable outcomes for early investors.",
//         },
//       ],
//     },
//   ],
//   extensions:
//     "By strategically leveraging its tokenomics model and growth potential, SimpliFi Coin (SIMF) aims to position itself as a transformative asset in the educational landscape, providing significant ROI opportunities for investors.",
// };

const TokenomicsAndFinancials = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-y-8">
      <SectionTitle title="Tokenomics & Financials" />

      <TokenDistributions />

      {/* {pageData.data.map((item) => (
        <div
          key={item.subtitle}
          className="bg-purple-700 shadow-lg shadow-purple-500/50 rounded-3xl p-6 text-white space-y-2"
        >
          <h2 className="text-2xl font-bold">{item.subtitle}</h2>
          <p>{item.text}</p>

          <ul className="pl-6 space-y-2">
            {item.list.map((bullet, idx) => (
              <li key={`${bullet.key}_${idx}`} className="flex gap-x-4 text-xl">
                <Circle className="w-4 h-4 shrink-0 mt-1.5" />
                <span>
                  {bullet.key && (
                    <span className="font-bold">{bullet.key}:</span>
                  )}{" "}
                  {bullet.value}
                </span>
              </li>
            ))}
          </ul>
        </div>
      ))} */}
    </div>
  );
};

export default TokenomicsAndFinancials;
