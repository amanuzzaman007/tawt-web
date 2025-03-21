"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const tableData = [
  {
    stage: "Pre-Seed",
    allocation: "3%",
    tokens: "60M",
    cliff: "3 months",
    vesting: "linear vesting over 6 months",
  },
  {
    stage: "Seed",
    allocation: "5%",
    tokens: "100M",
    cliff: "3 months",
    vesting: "linear vesting over 4 months",
  },
  {
    stage: "Private",
    allocation: "5%",
    tokens: "100M",
    cliff: "1 months",
    vesting: "linear vesting over 3 months",
  },
  {
    stage: "Marketing",
    allocation: "10%",
    tokens: "200M",
    cliff: "3 months",
    vesting: "linear vesting over 4 months",
  },
  {
    stage: "Public",
    allocation: "6%",
    tokens: "120M",
    cliff: "6 months",
    vesting: "linear vesting over 12 months",
  },
  {
    stage: "Founders",
    allocation: "15%",
    tokens: "300M",
    cliff: "9 months",
    vesting: "linear vesting over 36 months",
  },
  {
    stage: "Team",
    allocation: "5%",
    tokens: "100M",
    cliff: "12 months",
    vesting: "linear vesting over 24 months",
  },
  {
    stage: "Advisors",
    allocation: "2%",
    tokens: "40M",
    cliff: "3 months",
    vesting: "linear vesting over 6 months",
  },
];

const Tokenomics = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-y-8 max-w-2xl mx-auto">
      <h3 className="font-bold text-4xl text-muted uppercase">Tokenomics</h3>

      <div className="bg-purple-700 shadow-lg shadow-purple-500/50 rounded-3xl p-6 text-white">
        <Table>
          {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
          <TableHeader>
            <TableRow className="hover:bg-transparent text-lg ">
              <TableHead className="w-[100px] font-bold text-white">
                Stage
              </TableHead>
              <TableHead className="font-bold text-white">Allocation</TableHead>
              <TableHead className="font-bold text-white">Tokens</TableHead>
              <TableHead className="text-right font-bold text-white">
                Cliff
              </TableHead>
              <TableHead className="text-right font-bold text-white">
                Vesting
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tableData.map((row) => (
              <TableRow key={row.stage}>
                <TableCell className="font-bold text-white">
                  {row.stage}
                </TableCell>
                <TableCell className="font-bold text-white">
                  {row.allocation}
                </TableCell>
                <TableCell className="font-bold text-white">
                  {row.tokens}
                </TableCell>
                <TableCell className="text-right font-bold text-white">
                  {row.cliff}
                </TableCell>
                <TableCell className="text-right font-bold text-white">
                  {row.vesting}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Tokenomics;
