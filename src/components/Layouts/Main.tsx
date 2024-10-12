"use client"

import { ReactNode } from "react";

type MainProps = {
  children?: ReactNode;
}

const Main = ({children}: MainProps) => {
  return (
    <main className="w-full min-h-screen flex justify-center items-center px-3 py-20 md:px-24 gap-10">
      {children}
    </main>
  );
};

export default Main;
