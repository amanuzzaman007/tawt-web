import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";

type Props = {
  children: React.ReactNode;
  name: string;
  value: number;
  fill: string;
  colorName: string;
  tokens: string;
  cliff: string;
  vesting: string;
  icon: string;
};

export function TokenomicsModal({ children, ...item }: Props) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{item.name}</DialogTitle>
        </DialogHeader>
        <div
          key={item.name}
          className="flex flex-col gap-4 justify-center p-4 rounded-md overflow-hidden"
        >
          <div className="flex items-center justify-center w-full">
            <Image
              src={item.icon}
              alt={item.name}
              className="mb-4"
              width={64}
              height={64}
            />
          </div>
          <h3 className="text-base font-bold text-[#212ce6]">{item.name}</h3>
          <div className="flex flex-col gap-2 text-sm">
            <p className="text-muted-foreground">
              <span className="font-semibold text-slate-700">Allocation</span>:{" "}
              {item.value}%
            </p>
            <p className="text-muted-foreground">
              <span className="font-semibold text-slate-700">Tokens</span>:{" "}
              {item.tokens}
            </p>
            <p className="text-muted-foreground">
              <span className="font-semibold text-slate-700">Cliff</span>:{" "}
              {item.cliff}
            </p>
            <p className="text-muted-foreground flex items-start gap-2">
              <span className="font-semibold text-slate-700 shrink-0">
                Vesting:
              </span>
              <p className="shrink-0 flex-1">{item.vesting}</p>
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
