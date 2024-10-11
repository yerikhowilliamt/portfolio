import { Button } from "@/components/ui/button";
import { GrCircleInformation } from "react-icons/gr";
import { MdOutlineShoppingCart } from "react-icons/md";
import { MapPinIcon } from "lucide-react";
import { FaHeart } from "react-icons/fa";
import { useState } from "react";
import Link from "next/link";

type EventCardProps = {
  title: string;
  href: string;
  tech: JSX.Element[]
};

const EventCard = ({ title, href, tech }: EventCardProps) => {

  return (
    <div className="w-full h-full flex flex-col gap-2 items-center justify-between p-2 absolute">
      <div className="flex flex-col gap-2 justify-center items-center">
        <h3 className="text-base text-center font-head font-semibold">
          {title}
        </h3>
        <span>{tech}</span>
      </div>
      <div className="w-full flex flex-row font-body justify-center items-center gap-5">
        <Link href={href}></Link>
      </div>
    </div>
  );
};

export default EventCard;
