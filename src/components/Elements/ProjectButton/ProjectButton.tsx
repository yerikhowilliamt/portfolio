import Link from "next/link";
import { HiArrowRight } from "react-icons/hi2";

const ProjectButton = () => {
  return (
    <div className="mx-auto xl:mx-0">
      <Link
        href={"/project"}
        className="w-60 h-full flex gap-5 py-2 justify-center items-center border-4 rounded-full group"
      >
        <h1 className="text-xl xl:text-2xl">My Project</h1>
        <HiArrowRight className="text-4xl group-hover:translate-x-2 transition-all duration-300" />
      </Link>
    </div>
  );
};

export default ProjectButton;
