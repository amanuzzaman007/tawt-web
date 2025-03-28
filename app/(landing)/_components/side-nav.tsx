"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaAngleLeft } from "react-icons/fa";
import { sections, SectionType } from "./navbar";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const SideNav = ({ isOpen, onClose }: Props) => {
  const [activeSection, setActiveSection] = useState<SectionType>("home");

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

  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{
        width: isOpen ? 220 : 0,
      }}
      className="fixed inset-0 flex flex-col h-screen bg-white border-r gap-y-4 drop-shadow-lg overflow-hidden"
    >
      <div className="flex items-center justify-between gap-4 p-4  border-b">
        <p className="text-xl text-[#212ce6] font-semibold text-center">TAWT</p>
        <Button size={"icon"} onClick={onClose}>
          <FaAngleLeft />
        </Button>
      </div>
      <div className="flex-1 space-x-2 w-full flex flex-col items-start px-4">
        {sections.map((section) => (
          <Button
            key={section}
            variant={section === activeSection ? "primary" : "ghost"}
            onClick={() => scrollToSection(section)}
            className="w-full"
          >
            {section}
          </Button>
        ))}
      </div>
    </motion.div>
  );
};

export default SideNav;
