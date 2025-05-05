"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { MenuIcon } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import SideNav from "./side-nav";

export type SectionType =
  | "home"
  | "about"
  | "tokenomics"
  | "roadmap"
  | "team"
  | "faqs & community";

export const sections: SectionType[] = [
  "home",
  "about",
  "tokenomics",
  "roadmap",
  "team",
  "faqs & community",
];

const MainNavbar = () => {
  const [activeSection, setActiveSection] = useState<SectionType>("home");
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (section: SectionType) => {
    // setActiveSection(section);
    document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      let currentSection = "";
      sections.forEach((section) => {
        const sectionElement = document.getElementById(section);
        if (sectionElement) {
          const sectionTop = sectionElement.offsetTop - 60;
          if (window.scrollY >= sectionTop) {
            currentSection = section;
          }
        }
      });
      if (currentSection) {
        setActiveSection(currentSection as SectionType);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    <div className="fixed top-0 left-0 w-full text-white bg-white z-50">
      <SideNav isOpen={isOpen} onClose={() => setIsOpen(false)} />
      <div className="max-w-[1440px] mx-auto py-6 px-4 flex items-center justify-between space-x-4 w-full">
        <div className="w-full space-y-1 block lg:hidden ">
          <div className="flex items-center justify-between gap-2 w-full">
            <Button size={"icon"} onClick={() => setIsOpen(true)}>
              <MenuIcon />
            </Button>
            <p
              className="font-bold text-xl text-[#212ce6]"
              onClick={() => {
                window.scrollTo({ top: 300, behavior: "smooth" });
              }}
            >
              SimpliTaught Token (TAWT)
            </p>
            <Button size={"icon"} className="opacity-0">
              <MenuIcon />
            </Button>
          </div>
          <Separator />
        </div>
        <div className="hidden lg:block">
          <div className="flex items-center gap-2">
            <Image
              src={"/logo-gold.png"}
              alt="TAWT Coin"
              width={50}
              height={50}
              priority
            />
            <p className="font-bold italic text-2xl text-[#212ce6]">TAWT</p>
          </div>
        </div>
        <div className="space-x-2 hidden lg:block">
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
        {/* <div className="flex items-center gap-4">
          <Button size={"icon"} variant={"secondary"} className="relative">
            <BellIcon />
            <span className="absolute -top-2 -right-1 bg-red-500 text-black rounded-full text-[10px] p-1 animate-bounce">
              30
            </span>
          </Button>
        </div> */}
      </div>
    </div>
  );
};

export default MainNavbar;
