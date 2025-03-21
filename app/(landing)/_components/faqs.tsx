"use client";

import { Circle } from "lucide-react";

import SectionTitle from "@/components/section-title";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const pageData = [
  {
    subtitle: "Expected Returns",
    text: "Investors in SimpliFi Coin (TAWT) can anticipate returns based on several factors, including:",
    list: [
      {
        key: "Initial Token Sale Price",
        value: (
          <>
            The initial token price is set at $0.01, with projections indicating
            potential price appreciation as the platform gains traction.
          </>
        ),
      },
      {
        key: "Staking Rewards",
        value: (
          <>
            Investors participating in the staking program can earn passive
            rewards, estimated at{" "}
            <span className="font-bold">up to 10% annually</span>, based on
            engagement levels and overall token performance.
          </>
        ),
      },

      {
        key: "Long-Term Value Appreciation",
        value: (
          <>
            Given the projected increase in platform adoption, expected returns
            could potentially range from{" "}
            <span className="font-bold">100% to 400%</span> within the first few
            years as the ecosystem expands and transaction volumes rise.
          </>
        ),
      },
    ],
  },

  {
    subtitle: "Risks & Mitigation Strategies",
    text: "Investors should be aware of the inherent risks associated with cryptocurrency investments, including:",
    list: [
      {
        key: "Market Volatility",
        value:
          "The cryptocurrency market can experience significant price fluctuations.",
      },
      {
        key: "Mitigation",
        value:
          "Implement a gradual vesting schedule for team and early investor tokens to reduce the risk of sudden market dumps and ensure stability.",
      },
      {
        key: "Adoption Rates",
        value: "Success depends on user adoption of the platform.",
      },
      {
        key: "Mitigation",
        value:
          "Active marketing initiatives and partnerships with educational institutions will be pursued to foster user engagement and platform usage.",
      },
      {
        key: "Regulatory Risks",
        value: "Changes in regulatory environments could impact operations.",
      },
      {
        key: "Mitigation",
        value:
          "The project will adopt a compliance-first approach, working closely with legal experts to navigate regulatory landscapes and adapt to changes as necessary.",
      },
      {
        key: "Technological Risks",
        value:
          "Issues such as hacks or smart contract vulnerabilities could pose threats.",
      },
      {
        key: "Mitigation",
        value:
          " Regular security audits of the codebase and contracts, along with ongoing monitoring and updates, will be a priority to enhance security posture.",
      },
    ],
  },

  // {
  //   subtitle: "Roadmap Timeline",
  //   text: "A clear, visual roadmap outlining key milestones includes:",
  //   list: [
  //     {
  //       key: "Q1 2023",
  //       value: "Completion of whitepaper and initial seed funding.",
  //     },
  //     {
  //       key: "Q2 2023",
  //       value: "Launch of token sale and initial liquidity pool setup.",
  //     },
  //     {
  //       key: "Q3 2023",
  //       value:
  //         "Development of the SimpliTaught platform and integration of educational resources.",
  //     },
  //     {
  //       key: "Q4 2023",
  //       value:
  //         "Launch of the public platform with initial educational offerings, and rollout of the staking program.",
  //     },
  //     {
  //       key: "Q1 2024",
  //       value:
  //         "Establish strategic partnerships with educational institutions.",
  //     },
  //     {
  //       key: "Q2 2024",
  //       value:
  //         "Introduction of additional features based on user feedback and technological advancements.",
  //     },
  //     {
  //       key: "Q3 2024 & Beyond",
  //       value:
  //         "Continuous platform enhancements, community expansion, and potential collaborations or innovations in the edtech space.",
  //     },
  //   ],
  // },
  {
    subtitle: "Contact for Inquiries",
    text: "For further information, investor relations, or customer support, please contact:",
    list: [
      {
        key: "Email",
        value: "support@simplitaught.com",
      },
      {
        key: "Phone",
        value: "+1 (555) 123-4567",
      },
      {
        key: "Website",
        value: (
          <>
            <a
              href="https://www.simplitaught.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.simplitaught.com
            </a>
          </>
        ),
      },
      {
        key: "Social Media",
        value:
          "Follow us on Twitter, LinkedIn, and Telegram for the latest updates and community interactions.",
      },
    ],
    extensions:
      "Feel free to reach out for any questions or additional information regarding investment opportunities and project developments.",
  },
];

const Faqs = () => {
  return (
    <div className="w-full">
      <div className="flex flex-col items-center justify-center gap-y-8 rounded-3xl p-6 w-full">
        <div className="flex flex-col items-center justify-center gap-y-8 w-full">
          <SectionTitle title="Investor FAQs & Contact Support" />

          <div className="rounded-3xl p-6 text-muted-foreground space-y-2 w-full">
            <Accordion type="single" collapsible className="w-full">
              {pageData.map((item) => (
                <AccordionItem key={item.subtitle} value={item.subtitle}>
                  <AccordionTrigger className="text-xl cursor-pointer">
                    {item.subtitle}
                  </AccordionTrigger>
                  <AccordionContent className="space-y-4">
                    <p>{item.text}</p>

                    <ul className="pl-6 space-y-2">
                      {item.list.map((bullet, idx) => (
                        <li
                          key={`${bullet.key}_${idx}`}
                          className="flex gap-x-4 text-base"
                        >
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

                    {item.extensions && (
                      <p className="mt-6">{item.extensions}</p>
                    )}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faqs;
