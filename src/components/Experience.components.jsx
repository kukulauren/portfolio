import React from "react";
import { Button } from "@/components/ui/button";

const ExperienceComponents = () => {
  return (
    <section id="experience" className=" relative h-[100vh] snap-start snap-always">
      <div className="flex items-center h-full py-10 relative !after:content-[''] after:absolute after:h-full after:w-[2px] md:after:bg-[#e1e1e1] after:bg-transparent after:top-0 after:left-[50%]">
        <div className=" grid grid-cols-12 w-full">
          <div className=" col-span-6 pe-20 text-justify">
            <h1 className=" font-bold text-[40px] mb-5">
              Vision & Aspirations
            </h1>
            <p className=" mb-5">
              As I continue to evolve as a frontend developer, I am excited
              about the opportunities that lie ahead. With a passion for
              innovation and a dedication to excellence, I am eager to
              contribute my skills to future projects and endeavors.
            </p>
            <Button variant="default" className="w-full">
              Download my CV
            </Button>
          </div>
          <div className=" col-span-6 ps-20 text-justify">
            <h1 className=" font-bold text-[40px] mb-5">My projects</h1>
            <p className=" mb-5">
              As an entry level frontend developer, I have built a few websites
              which have great user experience and UI designs with my team. We
              used react as base frameworks, tailwind for css and other related
              libraries for better UX.
            </p>
            <Button variant="default" className="w-full">
              Check my projects
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceComponents;
