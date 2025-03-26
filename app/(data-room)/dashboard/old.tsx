"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { StarHalfIcon } from "lucide-react";
import Image from "next/image";

const grouped_dr = [
  {
    name: "Company Overview",
    docs: [
      {
        id: 1,
        name: "Pitch Deck (PDF / Google Slides)",
        icon: "/icons/google-docs.png",
        link: "/file_links/Pitch Deck.pdf",
      },
    ],
  },
  {
    name: "Financials",
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
    docs: [
      {
        id: 3,
        name: "Legal Documents (Incorporation, Token Legal Opinion, etc.)",
        icon: "/icons/scale.png",
        link: "/file_links/TAWT Whitepaper.pdf",
      },
      {
        id: 4,
        name: "Token Purchase Agreement",
        icon: "/icons/note.png",
        link: "/file_links/Token_Purchase_Agreement.pdf",
      },
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
    docs: [
      {
        id: 5,
        name: "Cap Table (if applicable)",
        icon: "/icons/bar-graph.png",
        link: "/file_links/Cap_Table.pdf",
      },
    ],
  },
];

// const docsArr = [
//   {
//     id: 1,
//     name: "Pitch Deck (PDF / Google Slides)",
//     icon: "/icons/google-docs.png",
//     link: "/file_links/Pitch Deck.pdf",
//   },
//   {
//     id: 2,
//     name: "Financial Projections",
//     icon: "/icons/statistics.png",
//     link: "/file_links/Financial Projections.pdf",
//   },
//   {
//     id: 3,
//     name: "Legal Documents (Incorporation, Token Legal Opinion, etc.)",
//     icon: "/icons/scale.png",
//     link: "/file_links/TAWT Whitepaper.pdf",
//   },
//   {
//     id: 4,
//     name: "Token Purchase Agreement",
//     icon: "/icons/note.png",
//     link: "/file_links/Token_Purchase_Agreement.pdf",
//   },
//   {
//     id: 5,
//     name: "Cap Table (if applicable)",
//     icon: "/icons/bar-graph.png",
//     link: "/file_links/Cap_Table.pdf",
//   },
//   {
//     id: 6,
//     name: "KYC/AML Policies",
//     icon: "/icons/shield.png",
//     link: "/file_links/KYC_AML_Policy.pdf",
//   },
//   {
//     id: 7,
//     name: "Tech Architecture and Github Link (if applicable)",
//     icon: "/icons/laptop.png",
//     link: "/file_links/SimpliTaught_Tech_Architecture.pdf",
//   },
// ];

export default function Page() {
  return (
    <SidebarProvider>
      {/* <AppSidebar /> */}
      <SidebarInset>
        {/* <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">
                    Building Your Application
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Data Fetching</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header> */}

        <div className="flex flex-col min-h-screen items-center p-6 pb-10">
          <div>
            <div className="p-4 flex flex-col items-center justify-center gap-4">
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
          </div>

          {grouped_dr.map((group) => (
            <div
              key={group.name}
              className="max-w-7xl w-full mx-auto flex flex-col gap-4 mt-10"
            >
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-slate-700">
                  {group.name}
                </h3>
                <Separator className="m-0" />
              </div>
              <div className="flex flex-1 flex-col gap-4">
                <div className="grid gap-8 md:grid-cols-2">
                  {group.docs.map((doc) => (
                    <div
                      key={doc.id}
                      className="flex flex-col w-full items-center gap-4 p-4 rounded-md border bg-indigo-100 text-indigo-500 text-base lg:text-xl font-semibold hover:scale-105 transition-all"
                      // initial={{ scale: 0 }}
                      // whileHover={{ scale: 1.05 }}
                    >
                      <div className="flex items-center gap-2">
                        <Image
                          src={doc.icon}
                          alt={doc.name}
                          width={26}
                          height={27}
                        />
                        {doc.name}
                      </div>

                      <Button variant={"primary"} className="w-full" asChild>
                        <a
                          href={doc.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          View
                        </a>
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
          {/* <div className="max-w-7xl mx-auto flex flex-col gap-4 mt-10">
            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-slate-700">
                Company Overview
              </h3>
              <Separator className="m-0" />
            </div>
            <div className="flex flex-1 flex-col gap-4">
              <div className="grid auto-rows-min gap-4 md:grid-cols-2">
                {docsArr.map((doc) => (
                  <div
                    key={doc.id}
                    className="flex flex-col items-center gap-4 p-4 rounded-md border bg-indigo-100 text-indigo-500 text-xl font-semibold"
                  >
                    <div className="flex items-center gap-2">
                      <Image
                        src={doc.icon}
                        alt={doc.name}
                        width={26}
                        height={27}
                      />
                      {doc.name}
                    </div>

                    <Button variant={"primary"} className="w-full" asChild>
                      <a
                        href={doc.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View
                      </a>
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </div>  */}
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
