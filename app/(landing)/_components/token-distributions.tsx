"use client";

import { Pie, PieChart } from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import Image from "next/image";
import { TokenomicsModal } from "./tokenomics-modal";
const chartData = [
  {
    name: "Founders",
    value: 15,
    fill: "var(--color-founders)",
    colorName: "founders",
    tokens: "300M",
    cliff: "9 months",
    vesting: "linear vesting over 36 months",
    icon: "/tokenomics-icons/founder.png",
  },
  {
    name: "Reserve",
    value: 15,
    fill: "var(--color-reserve)",
    colorName: "reserve",
    tokens: "300M",
    cliff: "No cliff",
    vesting: `
        No tokens are
        accessible for the
        first 6 months. After
        6 months, Tokens
        start unlocking in 18
        equal installments.
        1st installment:
        300,000,000 ÷ 18 =
        16.67M tokens are
        unlocked. Each
        month for 18 months:
        16.67M tokens are
        unlocked until all
        300M tokens are fully
        distributed.
    `,
    icon: "/tokenomics-icons/reserve.png",
  },
  {
    name: "Staking Reward",
    value: 15,
    fill: "var(--color-stakingreward)",
    colorName: "stakingreward",
    tokens: "300M",
    cliff: "Released as per actual earning",
    vesting: "N/A",
    icon: "/tokenomics-icons/stake.png",
  },
  {
    name: "Reward Pool",
    value: 11,
    fill: "var(--color-rewardpool)",
    colorName: "rewardpool",
    tokens: "220M",
    cliff: "No cliff",
    vesting: "N/A",
    icon: "/tokenomics-icons/trophy.png",
  },
  {
    name: "Marketing",
    value: 10,
    fill: "var(--color-marketing)",
    colorName: "marketing",
    tokens: "200M",
    cliff: "3 months",
    vesting: "linear vesting over 4 months",
    icon: "/tokenomics-icons/social-media.png",
  },
  {
    name: "Public",
    value: 6,
    fill: "var(--color-public)",
    colorName: "public",
    tokens: "120M",
    cliff: "6 months",
    vesting: "linear vesting over 12 months",
    icon: "/tokenomics-icons/feedback.png",
  },
  {
    name: "Ecosystem",
    value: 5,
    fill: "var(--color-ecosystem)",
    colorName: "ecosystem",
    tokens: "100M",
    cliff: "No cliff",
    vesting: `After the first month,
        20M tokens are
        unlocked (1/5 of
        100M). For the next 4
        months, 20M tokens
        are unlocked each
        month until all 100M
        tokens are fully
        distributed.`,
    icon: "/tokenomics-icons/entrepreneurship.png",
  },
  {
    name: "Private",
    value: 5,
    fill: "var(--color-private)",
    colorName: "private",
    tokens: "100M",
    cliff: "1 months",
    vesting: "linear vesting over 3 months",
    icon: "/tokenomics-icons/privacy-policy.png",
  },
  {
    name: "Seed",
    value: 5,
    fill: "var(--color-seed)",
    colorName: "seed",
    tokens: "100M",
    cliff: "3 months",
    vesting: "linear vesting over 4 months",
    icon: "/tokenomics-icons/sunflower-seed.png",
  },
  {
    name: "Team",
    value: 5,
    fill: "var(--color-team)",
    colorName: "team",
    tokens: "100M",
    cliff: "12 months",
    vesting: "linear vesting over 24 months",
    icon: "/tokenomics-icons/team.png",
  },
  {
    name: "DEX Liquidity",
    value: 3,
    fill: "var(--color-dexliquidity)",
    colorName: "dexliquidity",
    tokens: "60M",
    cliff: "No cliff",
    vesting: "No lookup",
    icon: "/tokenomics-icons/liquidity.png",
  },
  {
    name: "Pre-seed",
    value: 3,
    fill: "var(--color-preseed)",
    colorName: "preseed",
    tokens: "60M",
    cliff: "3 months",
    vesting: "linear vesting over 6 months",
    icon: "/tokenomics-icons/growing-seed.png",
  },
  {
    name: "Advisors",
    value: 2,
    fill: "var(--color-advisors)",
    colorName: "advisors",
    tokens: "40M",
    cliff: "3 months",
    vesting: "linear vesting over 6 months",
    icon: "/tokenomics-icons/conversation.png",
  },
];

const chartConfig = {
  founders: {
    label: "Founders",
    color: "var(--chart-1)",
  },
  reserve: {
    label: "Reserve",
    color: "var(--chart-2)",
  },
  stakingreward: {
    label: "Staking Reward",
    color: "var(--chart-3)",
  },
  rewardpool: {
    label: "Reward Pool",
    color: "var(--chart-4)",
  },
  marketing: {
    label: "Marketing",
    color: "var(--chart-5)",
  },
  public: {
    label: "Public",
    color: "var(--chart-6)",
  },
  ecosystem: {
    label: "Ecosystem",
    color: "var(--chart-7)",
  },
  private: {
    label: "Private",
    color: "var(--chart-8)",
  },
  seed: {
    label: "Seed",
    color: "var(--chart-9)",
  },
  team: {
    label: "Team",
    color: "var(--chart-10)",
  },
  dexliquidity: {
    label: "DEX Liquidity",
    color: "var(--chart-11)",
  },
  preseed: {
    label: "Pre-seed",
    color: "var(--chart-12)",
  },
  advisors: {
    label: "Advisors",
    color: "var(--chart-13)",
  },
} satisfies ChartConfig;

function TokenDistributions() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center p-4 lg:p-6">
        <h2 className="text-slate-500 text-2xl font-bold">
          Allocation of Tokens in %
        </h2>
        <div className="flex flex-col lg:flex-row items-center gap-6">
          <ChartContainer
            config={chartConfig}
            className="mx-auto aspect-square h-[390px]"
          >
            <PieChart>
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel />}
              />
              <Pie
                data={chartData}
                dataKey="value"
                nameKey="name"
                innerRadius={90}
              />
            </PieChart>
          </ChartContainer>
          <div>
            {chartData.map((item) => (
              <div key={item.name} className="flex items-center gap-2">
                <div
                  className="w-4 h-4 rounded-full"
                  //   @ts-expect-error: colorName is a valid key
                  style={{ backgroundColor: chartConfig[item.colorName].color }}
                ></div>
                <p className="text-muted-foreground text-base">
                  {item.name} - {item.value}%{" "}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="p-4">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
          {chartData.map((item) => (
            <TokenomicsModal key={item.name} {...item}>
              <div
                key={item.name}
                className="flex flex-col gap-4 shadow justify-center p-4 border rounded-md overflow-hidden cursor-pointer hover:bg-slate-100 transition-all hover:scale-105"
                role="button"
              >
                <div className="flex items-center justify-center w-full">
                  <Image
                    src={item.icon}
                    alt={item.name}
                    className="mb-4"
                    width={64}
                    height={64}
                    unoptimized
                  />
                </div>
                <h3 className="text-base font-bold text-[#212ce6]">
                  {item.name}
                </h3>
                <div className="flex flex-col gap-2 text-sm">
                  <p className="text-muted-foreground">
                    <span className="font-semibold text-slate-700">
                      Allocation
                    </span>
                    : {item.value}%
                  </p>
                  <p className="text-muted-foreground">
                    <span className="font-semibold text-slate-700">Tokens</span>
                    : {item.tokens}
                  </p>
                  <p className="text-muted-foreground">
                    <span className="font-semibold text-slate-700">Cliff</span>:{" "}
                    {item.cliff}
                  </p>
                  <p className="text-muted-foreground flex items-start gap-2">
                    <span className="font-semibold text-slate-700 shrink-0">
                      Vesting:
                    </span>

                    <div className="shrink-0 flex-1 truncate">
                      {item.vesting.slice(0, 200)}
                    </div>
                  </p>
                </div>
              </div>
            </TokenomicsModal>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TokenDistributions;
