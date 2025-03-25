"use client";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import PdfViewer from "./PdfViewer";

type Props = {
  children: React.ReactNode;
  url: string;
};

function PdfModal({ children, url }: Props) {
  return (
    <Dialog>
      <DialogTrigger>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Pdf View</DialogTitle>
        </DialogHeader>
        <PdfViewer url={url} />
      </DialogContent>
    </Dialog>
  );
}

export default PdfModal;
