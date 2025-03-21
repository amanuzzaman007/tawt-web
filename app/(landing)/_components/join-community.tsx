"use client";

import SectionTitle from "@/components/section-title";
import { Button } from "@/components/ui/button";
import { FaFacebook, FaTelegramPlane } from "react-icons/fa";
import { FaDiscord, FaXTwitter } from "react-icons/fa6";

const JoinCommunity = () => {
  return (
    <div className="rounded-3xl border p-6 border-b-4">
      <div className="flex flex-col items-center justify-center gap-y-8 rounded-3xl p-6">
        <SectionTitle title="Join the community" />
        <div className="flex items-center justify-around w-full gap-10 max-w-lg">
          <Button size={"icon"} className="w-14 h-14">
            <FaXTwitter style={{ width: "30px", height: "30px" }} />
          </Button>

          <Button size={"icon"} className="w-14 h-14">
            <FaTelegramPlane style={{ width: "30px", height: "30px" }} />
          </Button>

          <Button size={"icon"} className="w-14 h-14">
            <FaDiscord style={{ width: "30px", height: "30px" }} />
          </Button>

          <Button size={"icon"} className="w-14 h-14">
            <FaFacebook style={{ width: "30px", height: "30px" }} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default JoinCommunity;
