"use client";

type Props = {
  title: string;
};

const SectionTitle = ({ title }: Props) => {
  return (
    <div className="flex items-center justify-center">
      <div className="space-y-2">
        <h2 className="font-bold text-2xl lg:text-4xl text-muted-foreground uppercase">
          {title}
        </h2>
        <div className="w-1/2 h-1 bg-muted-foreground rounded-md" />
      </div>
    </div>
  );
};

export default SectionTitle;
