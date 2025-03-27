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
            <a
              href="https://x.com/simplitaughtAI"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaXTwitter style={{ width: "30px", height: "30px" }} />
            </a>
          </Button>

          <Button size={"icon"} className="w-14 h-14">
            <a
              href="https://t.me/simplitaughtAI"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTelegramPlane style={{ width: "30px", height: "30px" }} />
            </a>
          </Button>

          <Button size={"icon"} className="w-14 h-14">
            <a
              href="https://discord.gg/S8YfN5hq"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaDiscord style={{ width: "30px", height: "30px" }} />
            </a>
          </Button>

          <Button size={"icon"} className="w-14 h-14">
            <a
              href="https://www.facebook.com/simplitaught"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook style={{ width: "30px", height: "30px" }} />
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default JoinCommunity;
