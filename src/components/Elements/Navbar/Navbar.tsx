"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { FaHome, FaUser } from "react-icons/fa";
import { HiDocumentText } from "react-icons/hi";
import { IoMdMail } from "react-icons/io";

type NavDataType = {
  id: string;
  name: string;
  href: string;
  icon: JSX.Element;
};

const navData: NavDataType[] = [
  { id: "1", name: "Home", href: "/", icon: <FaHome /> },
  { id: "2", name: "About", href: "/about", icon: <FaUser /> },
  { id: "3", name: "Project", href: "/project", icon: <HiDocumentText /> },
  { id: "4", name: "Contact", href: "/contact", icon: <IoMdMail /> },
];

const Navbar = () => {
  const pathName = usePathname();

  return (
    <nav className="flex flex-col items-center xl:justify-center gap-y-4 fixed h-max bottom-0 mt-auto xl:right-[2%] z-50 top-0 w-full xl:w-16 xl:max-w-md left-0 xl:left-auto xl:h-screen">
      <ul className="flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-10 px-4 md:px-40 xl:px-0 h-5 xl:h-max py-8 bg-neutral-500/50 backdrop-blur-sm text-3xl xl:text-xl xl:rounded-full">
        {navData.map((link) => (
          <li key={link.id} className="relative group">
            <Link
              href={link.href}
              className="relative flex items-center transition-all ease-in-out duration-300"
            >
              {/* Text */}
              <div className="absolute pr-14 right-0 hidden xl:group-hover:flex">
                <div className="bg-neutral-500 relative flex items-center p-[6px]">
                  <p className={`text-sm font-semibold ${
                pathName === link.href ? "text-cyan-400" : "text-white"
                }`}>{link.name}</p>
                  <div className="border-solid border-l-neutral-500 border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute -right-2"></div>
                </div>
              </div>
              {/* Text */}

              {/* Icon */}
              <div className={`transition-colors duration-300 ${
                pathName === link.href ? "text-cyan-400" : "group-hover:text-cyan-400"
                }`}>
                {link.icon}
              </div>
              {/* Icon */}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
