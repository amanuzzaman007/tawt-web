"use client";

import { Button } from "@/components/ui/button";
import { BellIcon } from "lucide-react";
import { useState } from "react";

export type SectionType =
  | "home"
  | "about"
  | "tokenomics"
  | "roadmap"
  | "team"
  | "faqs"
  | "community";

export const sections: SectionType[] = [
  "home",
  "about",
  "tokenomics",
  "roadmap",
  "team",
  "faqs",
  "community",
];

const MainNavbar = () => {
  const [activeSection, setActiveSection] = useState<SectionType>("home");

  const scrollToSection = (section: SectionType) => {
    console.log({ section });
    setActiveSection(section);
    document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
  };

  // const navItems = [
  //   { name: "Home", url: "#Home" },
  //   { name: "About", url: "#About" },
  //   { name: "Tokenomics", url: "#Tokenomics" },
  //   { name: "Roadmap", url: "#Roadmap" },
  //   { name: "Team", url: "#Team" },
  //   { name: "Faqs", url: "#Faqs" },
  //   { name: "Community", url: "#Community" },
  // ];

  return (
    <div className="sticky top-0 w-full text-white bg-white z-50">
      <div className="max-w-[1440px] mx-auto py-6 px-6 flex items-center justify-between space-x-4 w-full">
        <div>
          <p className="font-bold italic text-2xl text-[#212ce6]">TAWT</p>
        </div>
        <div className="space-x-2">
          {sections.map((section) => (
            <Button
              key={section}
              variant={section === activeSection ? "primary" : "ghost"}
              onClick={() => scrollToSection(section)}
            >
              {section}
            </Button>
          ))}
          {/* <NavBar
            items={navItems}
            onNavtrigger={(navTitle) => scrollToSection(navTitle)}
          /> */}
        </div>
        <div className="flex items-center gap-4">
          <Button size={"icon"} variant={"secondary"} className="relative">
            <BellIcon />
            <span className="absolute -top-2 -right-1 bg-red-500 text-black rounded-full text-[10px] p-1 animate-bounce">
              30
            </span>
          </Button>
          {/* <Button variant={"super"}>Learn to gain</Button> */}
        </div>
      </div>
    </div>
  );
};

export default MainNavbar;
