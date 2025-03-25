"use client";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";
import { sections, SectionType } from "./navbar";

type Props = {
  children: React.ReactNode;
};

const SideNav = ({ children }: Props) => {
  const [activeSection, setActiveSection] = useState<SectionType>("home");

  const scrollToSection = (section: SectionType) => {
    setActiveSection(section);
    document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <Drawer direction="left">
      <DrawerTrigger asChild>{children}</DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle className="text-center">
            <p className="font-bold italic text-2xl text-[#212ce6]">TAWT</p>
          </DrawerTitle>
        </DrawerHeader>
        <Separator />
        <div className="space-x-2 w-full flex flex-col items-start px-4">
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
          {/* <NavBar
                    items={navItems}
                    onNavtrigger={(navTitle) => scrollToSection(navTitle)}
                  /> */}
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default SideNav;
