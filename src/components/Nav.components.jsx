import React from "react";

const NavComponents = () => {
  return (
    <div className="fixed w-full bg-[#f9f9f9] shadow z-50">
      <div className=" h-[80px]">
        <div className="flex justify-between items-center max-w-[1200px] mx-auto h-full">
          <a className="font-extrabold text-3xl" href="/">
            Khin Myat Noe
          </a>
          <div className=" flex font-semibold gap-5">
            <a
              className=" hover:text-[#0044cc] opacity-85 text-[#333333]  py-5"
              href="#hero"
            >
              Home
            </a>
            <a
              className=" hover:text-[#0044cc] opacity-85 text-[#333333] py-5"
              href="#about"
            >
              About
            </a>
            <a
              className=" hover:text-[#0044cc] opacity-85 text-[#333333] py-5"
              href="#experience"
            >
              Experience
            </a>
            <a
              className=" hover:text-[#0044cc] opacity-85 text-[#333333] py-5"
              href="#skills"
            >
              Skills
            </a>

            <a
              className=" hover:text-[#0044cc] opacity-85 text-[#333333] py-5"
              href="#contact"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavComponents;
