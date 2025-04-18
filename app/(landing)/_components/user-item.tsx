"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { FaLinkedin } from "react-icons/fa6";

type Props = {
  image?: string;
  name: string;
  role: string;
  twitter: string;
};

const UserItem = ({ image, name, role, twitter }: Props) => {
  return (
    <div className="p-2 rounded-md w-full overflow-hidden border">
      <div className="aspect-[2/2.5] relative bg-slate-100">
        <Image
          src={image ? image : "/teams/placeholder.jpg"}
          alt={name}
          fill
          className="object-cover rounded-md object-top"
          sizes="100%"
        />
      </div>
      <h3 className="text-base font-bold text-foreground mt-1 truncate">
        {name}
      </h3>
      <p className="text-sm text-muted-foreground min-h-[40px] truncate">
        {role}
      </p>
      <Button size={"sm"} className="mt-2" asChild>
        <a href={twitter ?? "#"} target="_blank" rel="noopener noreferrer">
          <FaLinkedin style={{ width: "18px", height: "18px" }} />
          Connect
        </a>
      </Button>
    </div>
  );
};

export default UserItem;
