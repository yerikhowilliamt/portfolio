"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const Logo = () => {
  const [click, setClick] = useState(false);
  const router = useRouter();

  const handleClick = () => {
    setClick(!click);

    router.push("/");
  };

  return (
    <div
        onClick={handleClick}
        className="cursor-pointer flex justify-center items-center py-3"
      >
        <h1 className="text-3xl md:text-6xl text-center font-semibold tracking-[-.3rem] md:tracking-[-.7rem]">
          YWT
        </h1>
      </div>
  )
}

export default Logo