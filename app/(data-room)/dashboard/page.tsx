import { Button } from "@/components/ui/button";
import { StarHalfIcon } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const documents = [
  {
    id: 5,
    name: "Whitepaper",
    icon: "/icons/bar-graph.png",
    link: "/file_links/TAWT Whitepaper.pdf",
  },
  {
    id: 1,
    name: "Coin Overview",
    icon: "/icons/google-docs.png",
    link: "/file_links/TAWT Coin Overview.pdf",
  },
  {
    id: 4,
    name: "Investor Deck",
    icon: "/icons/investor.png",
    link: "/file_links/INV ST.pdf",
  },
  {
    id: 2,
    name: "Revenue and Opportunities",
    icon: "/icons/statistics.png",
    link: "/file_links/Revenue and Opportunities.pdf",
  },
  {
    id: 7,
    name: "Tech Architecture",
    icon: "/icons/laptop.png",
    link: "/file_links/SimpliTaught Tech Architecture.pdf",
  },
  {
    id: 3,
    name: "Simple Agreement for Future Token",
    icon: "/icons/insurance.png",
    link: "",
  },
  {
    id: 6,
    name: "KYC/AML Policies",
    icon: "/icons/shield.png",
    link: "/file_links/KYC_AML_Policy.pdf",
  },
];

// const grouped_dr = [
//   {
//     name: "Coin Overview",
//     icon: Box,
//     docs: [],
//   },
//   {
//     name: "Financial Projections",
//     icon: Box,
//     docs: [],
//   },
//   {
//     name: "Legal & Compliance",
//     icon: Box,
//     docs: [
//       // {
//       //   id: 4,
//       //   name: "Token Purchase Agreement",
//       //   icon: "/icons/note.png",
//       //   link: "/file_links/Token_Purchase_Agreement.pdf",
//       // },
//     ],
//   },
//   {
//     name: "Technology",
//     icon: Box,
//     docs: [],
//   },
//   {
//     name: "Tokenomics",
//     icon: Box,
//     docs: [],
//   },
// ];

export default function DataRoomPage() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Navbar */}
      <div className="flex justify-between items-center bg-blue-700 text-white p-4 rounded-lg">
        <h1 className="text-xl font-bold">TAWT</h1>
        {/* <div className="flex items-center gap-2">
          <Input
            className="bg-white text-black"
            placeholder="Search documents..."
          />
          <Button variant="primaryOutline" className="hover:bg-white/95">
            <Search size={20} />
          </Button>
        </div> */}
      </div>

      <div className="p-4 flex flex-col items-center justify-center gap-4 mt-6 pb-4">
        <h1 className="text-2xl lg:text-5xl font-bold text-[#212ce6] tracking-wide flex items-center gap-2">
          <StarHalfIcon /> Investor Dataroom
        </h1>
        <p className="text-center text-muted-foreground">
          Private access to documents for private partners
        </p>
        <p className="text-center text-xl lg:text-3xl text-[#212ce6] font-semibold">{`Welcome to Simplitaught's Investor Dataroom`}</p>
      </div>

      <div className="p-4 mt-6 space-y-8 bg-slate-200">
        {/* Project Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
          {documents.map((doc, index) => (
            <Card
              key={index}
              className="shadow-md rounded-lg overflow-hidden hover:scale-105 transition-all"
            >
              <CardContent className="p-4 flex flex-col items-center min-h-[210px]">
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
                  </div>

                  {doc.link ? (
                    <Button variant={"primary"} className="w-full mt-4" asChild>
                      <a
                        href={doc.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View
                      </a>
                    </Button>
                  ) : (
                    <Button
                      variant={"primary"}
                      className="w-full mt-4"
                      disabled={true}
                    >
                      View
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
