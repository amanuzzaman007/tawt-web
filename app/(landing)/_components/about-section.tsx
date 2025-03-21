"use client";

import SectionTitle from "@/components/section-title";
import { Circle } from "lucide-react";

const AboutSection = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-y-8 rounded-3xl">
      <SectionTitle title="About" />
      <div className="text-lg font-medium text-muted-foreground space-y-6">
        <p>
          SimpliTaught Coin (TAWT) is a cryptocurrency designed specifically for
          the SimpliTaught ecosystem, which aims to revolutionize the education
          and learning industry. Built on the Solana blockchain, SIMF serves as
          a utility token that facilitates payments for educational resources
          such as books and subscriptions, while also rewarding students and
          educators for their engagement within the platform. The mission of
          SimpliTaught Coin (TAWT) is to create an accessible, decentralized
          learning economy where participants can benefit from a transparent and
          efficient transaction system, ultimately enhancing educational
          opportunities globally.
        </p>

        <div className="space-y-2">
          <h2 className="text-slate-500 text-2xl font-bold">
            The Problem it Solves in the Education & Learning Industry
          </h2>
          <p>
            The education sector has long been plagued by inefficiencies such as
            high costs, lack of personalized learning experiences, and poor
            financial transaction systems. Many students struggle to access
            quality educational materials and face significant barriers to
            effective learning. SimpliTaught Coin (TAWT) addresses these
            challenges by leveraging blockchain technology to reduce transaction
            costs and enable quick, secure payments. The integration of AI also
            personalizes learning experiences, ensuring that students receive
            tailored educational content that meets their unique needs.
          </p>
        </div>

        <div className="space-y-2">
          <h2 className="text-slate-500 text-2xl font-bold">
            Vision & Mission Statement
          </h2>
          <p>
            The vision of SimpliTaught Coin (TAWT) and the SimpliTaught platform
            is to establish a global, blockchain-powered education ecosystem
            that democratizes access to quality learning opportunities. The
            guiding mission is to empower learners and educators through
            innovative technology and decentralized solutions, creating a
            sustainable and rewarding educational environment for all
            participants.
          </p>
        </div>

        <div className="space-y-2">
          <h2 className="text-slate-500 text-2xl font-bold">
            Summary of Token Utility & Economic Benefits
          </h2>
          <p>
            SimpliTaught Coin (TAWT) has multiple use cases within the
            SimpliTaught ecosystem:
          </p>
          <ul className="pl-6 space-y-2">
            <li className="flex items-baseline gap-x-4">
              <Circle className="w-4 h-4" />
              <span>
                <span className="font-bold">Payments</span>: Users can utilize
                TAWT for purchasing educational resources, enjoying benefits
                like reduced transaction fees.
              </span>
            </li>

            <li className="flex items-baseline gap-x-4">
              <Circle className="w-4 h-4" />
              <span>
                <span className="font-bold">Rewards</span>: Students earn TAWT
                by engaging with content, completing quizzes, and participating
                in the learning community.
              </span>
            </li>

            <li className="flex items-baseline gap-x-4">
              <Circle className="w-4 h-4" />
              <span>
                <span className="font-bold">Staking</span>: Token holders can
                stake their TAWT to earn passive rewards, access premium
                content, and participate in governance decisions within the
                platform.
              </span>
            </li>
          </ul>

          <p>
            These utilities enhance the overall value proposition of TAWT,
            establishing a vibrant economic ecosystem that incentivizes
            participation and supports the long-term sustainability and growth
            of the educational platform .
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
