"use client"

import WorkSlider from "@/components/Elements/WorkSlider/WorkSlider";
import Main from "@/components/Layouts/Main";
import {motion} from "framer-motion"


const ProjectPage = () => {
  return (
    <Main>
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-8 justify-center items-center">
        {/* text */}
        <motion.div 
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 1.75 }}
          className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-8 gap-y-2 md:gap-y-5">
          <h2 className="text-2xl md:text-6xl font-head font-semibold">
            My <span className="text-cyan-500">work</span>
          </h2>
          <p className="font-body text-sm md:text-base">
            This is a collection of my work from during the bootcamp and some
            that I have done outside of the bootcamp.
          </p>
        </motion.div>
        {/* slider */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 1.75 }}
          className="w-full xl:max-w-[65%] h-full"
        >
        <WorkSlider/>
        </motion.div>
        </div>
      </div>
    </Main>
  );
};

export default ProjectPage;
