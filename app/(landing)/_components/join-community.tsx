"use client";

import SectionTitle from "@/components/section-title";
import { Button } from "@/components/ui/button";
import { FaFacebook, FaInstagram, FaTelegramPlane } from "react-icons/fa";
import { FaDiscord, FaXTwitter } from "react-icons/fa6";

const JoinCommunity = () => {
  return (
    <div className="rounded-3xl border p-6 border-b-4">
      <div className="flex flex-col items-center justify-center gap-y-8 rounded-3xl p-6">
        <SectionTitle title="Join the community" />
        <div className="flex items-center justify-around w-full gap-10 max-w-lg">
          <Button size={"icon"} className="w-14 h-14">
            <a
              href="https://x.com/TawtToken"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full h-full flex items-center justify-center"
            >
              <FaXTwitter style={{ width: "30px", height: "30px" }} />
            </a>
          </Button>

          <Button size={"icon"} className="w-14 h-14">
            <a
              href="https://t.me/simplitaughtAI"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full h-full flex items-center justify-center"
            >
              <FaTelegramPlane style={{ width: "30px", height: "30px" }} />
            </a>
          </Button>

          <Button size={"icon"} className="w-14 h-14">
            <a
              href="https://discord.com/users/simplitaught"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full h-full flex items-center justify-center"
            >
              <FaDiscord style={{ width: "30px", height: "30px" }} />
            </a>
          </Button>

          <Button size={"icon"} className="w-14 h-14">
            <a
              href="https://www.instagram.com/tawttoken/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full h-full flex items-center justify-center"
            >
              <FaInstagram style={{ width: "30px", height: "30px" }} />
            </a>
          </Button>

          <Button size={"icon"} className="w-14 h-14">
            <a
              href="https://www.facebook.com/tawttoken"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full h-full flex items-center justify-center"
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
