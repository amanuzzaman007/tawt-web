import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, StarHalfIcon } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Box } from "lucide-react";
import Image from "next/image";

const grouped_dr = [
  {
    name: "Coin Overview",
    icon: Box,
    docs: [
      {
        id: 1,
        name: "Coin Overview",
        icon: "/icons/google-docs.png",
        link: "/file_links/Pitch Deck.pdf",
      },
    ],
  },
  {
    name: "Financials",
    icon: Box,
    docs: [
      {
        id: 2,
        name: "Financial Projections",
        icon: "/icons/statistics.png",
        link: "/file_links/Financial Projections.pdf",
      },
    ],
  },
  {
    name: "Legal & Compliance",
    icon: Box,
    docs: [
      {
        id: 3,
        name: "Legal Documents (Incorporation, Token Legal Opinion, etc.)",
        icon: "/icons/scale.png",
        link: "/file_links/TAWT Whitepaper.pdf",
      },
      // {
      //   id: 4,
      //   name: "Token Purchase Agreement",
      //   icon: "/icons/note.png",
      //   link: "/file_links/Token_Purchase_Agreement.pdf",
      // },
      {
        id: 6,
        name: "KYC/AML Policies",
        icon: "/icons/shield.png",
        link: "/file_links/KYC_AML_Policy.pdf",
      },
    ],
  },
  {
    name: "Technology",
    icon: Box,
    docs: [
      {
        id: 7,
        name: "Tech Architecture and Github Link (if applicable)",
        icon: "/icons/laptop.png",
        link: "/file_links/SimpliTaught_Tech_Architecture.pdf",
      },
    ],
  },
  {
    name: "Tokenomics",
    icon: Box,
    docs: [
      {
        id: 5,
        name: "Tokenomics",
        icon: "/icons/bar-graph.png",
        link: "/file_links/TAWT Whitepaper.pdf",
      },
    ],
  },
];

export default function DataRoomPage() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Navbar */}
      <div className="flex justify-between items-center bg-blue-700 text-white p-4 rounded-lg">
        <h1 className="text-xl font-bold">TAWT</h1>
        <div className="flex items-center gap-2">
          <Input
            className="bg-white text-black"
            placeholder="Search documents..."
          />
          <Button variant="primaryOutline" className="hover:bg-white/95">
            <Search size={20} />
          </Button>
        </div>
      </div>

      <div className="p-4 flex flex-col items-center justify-center gap-4 mt-6">
        {/* <Button variant={"ghost"} asChild>
                <Link href={"/"}>
                  <ArrowLeft /> Home
                </Link>
              </Button> */}
        <h1 className="text-3xl lg:text-5xl font-bold text-[#212ce6] tracking-wide flex items-center gap-2">
          <StarHalfIcon /> Investor Dataroom
        </h1>
        <p>Private access to documents for private partners</p>
        <p className="text-center text-xl lg:text-3xl text-[#212ce6] font-semibold">{`Welcome to Simplitaught's Investor Dataroom`}</p>
      </div>

      <div className="bg-white p-4 my-4">
        <Tabs defaultValue={grouped_dr[0].name}>
          <ScrollArea>
            <TabsList className="mb-3 h-auto -space-x-px bg-background p-0 shadow-sm shadow-black/5 rtl:space-x-reverse">
              {grouped_dr.map((group) => (
                <TabsTrigger
                  key={group.name}
                  value={group.name}
                  className="relative overflow-hidden rounded-none border border-border py-2 after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 first:rounded-s last:rounded-e data-[state=active]:bg-muted data-[state=active]:after:bg-primary cursor-pointer"
                >
                  <Box
                    className="-ms-0.5 me-1.5 opacity-60"
                    size={16}
                    strokeWidth={2}
                    aria-hidden="true"
                  />
                  {group.name}
                </TabsTrigger>
              ))}
            </TabsList>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
          {grouped_dr.map((group) => (
            <TabsContent value={group.name} key={group.name}>
              {/* Project Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
                {group.docs.map((doc, index) => (
                  <Card
                    key={index}
                    className="shadow-md rounded-lg overflow-hidden"
                  >
                    <CardContent className="p-4 flex flex-col items-center min-h-[250px]">
                      <Image
                        src={doc.icon}
                        alt={doc.name}
                        className="mb-4"
                        width={64}
                        height={64}
                        unoptimized
                      />
                      <div className="flex-1 flex flex-col justify-between w-full h-full">
                        <div className="text-center">
                          <h2 className="text-lg font-semibold">{doc.name}</h2>
                          <p className="text-gray-500 text-sm">
                            Last Accessed: 04/01/2025
                          </p>
                        </div>

                        <Button
                          variant={"primary"}
                          className="w-full mt-4"
                          asChild
                        >
                          <a
                            href={doc.link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            View
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}

          <TabsContent value="tab-2">
            <p className="p-4 pt-1 text-center text-xs text-muted-foreground">
              Content for Tab 2
            </p>
          </TabsContent>
          <TabsContent value="tab-3">
            <p className="p-4 pt-1 text-center text-xs text-muted-foreground">
              Content for Tab 3
            </p>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
