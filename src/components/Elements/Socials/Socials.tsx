import Link from "next/link";
import React from "react";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";

type SocialDataType = {
  name: string;
  href: string;
  icon: JSX.Element;
};

const socialsData: SocialDataType[] = [
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/yerikhowilliamt/",
    icon: <FaLinkedinIn className="w-4 h-4" />,
  },
  {
    name: "Github",
    href: "https://github.com/yerikhowilliamt",
    icon: <FaGithub className="w-4 h-4" />,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/yerikhowilliams/",
    icon: <FaInstagram className="w-4 h-4" />,
  },
];

const Socials = () => {
  return (
    <div className="flex gap-2">
      {socialsData.map((item, index) => (
        <Link key={index} href={item.href} target="_blank" className="border-2 border-current rounded-full p-2 hover:bg-white/20 w-8 h-8 flex items-center">{item.icon}</Link>
      ))}
    </div>
  );
};

export default Socials;
