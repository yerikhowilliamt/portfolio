"use client"

import Transition from "@/components/Containers/Transition/Transition";
import Header from "@/components/Layouts/Header";
import { AnimatePresence, motion } from "framer-motion";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div className="h-full">
          <Transition/>
          <Header />
          {children}
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default Layout;
