import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import search from "../assets/search.svg";
import Typed from "typed.js";

const HeroComponents = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "I have a passion for crafting website interfaces with responsive layouts and exceptional user experiences.",
      ],
      typeSpeed: 50,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);
  return (
    <section id="hero" className=" pt-[100px]  h-screen snap-start snap-always">
      <div className="grid grid-cols-12 h-full">
        <div className=" col-span-5 relative">
          <div className=" pt-40 relative">
            <div className=" font-bold text-[40px]">
              <h1>Frontend</h1>
              <h1>Developer.</h1>

              <div className=" absolute bottom-14">
                <svg width="200.5px" height="21.5px" viewBox="0 0 445.5 21.5">
                  <path
                    className="fill-primary opacity-7"
                    d="M409.9,2.6c-9.7-0.6-19.5-1-29.2-1.5c-3.2-0.2-6.4-0.2-9.7-0.3c-7-0.2-14-0.4-20.9-0.5 c-3.9-0.1-7.8-0.2-11.7-0.3c-1.1,0-2.3,0-3.4,0c-2.5,0-5.1,0-7.6,0c-11.5,0-23,0-34.5,0c-2.7,0-5.5,0.1-8.2,0.1 c-6.8,0.1-13.6,0.2-20.3,0.3c-7.7,0.1-15.3,0.1-23,0.3c-12.4,0.3-24.8,0.6-37.1,0.9c-7.2,0.2-14.3,0.3-21.5,0.6 c-12.3,0.5-24.7,1-37,1.5c-6.7,0.3-13.5,0.5-20.2,0.9C112.7,5.3,99.9,6,87.1,6.7C80.3,7.1,73.5,7.4,66.7,8 C54,9.1,41.3,10.1,28.5,11.2c-2.7,0.2-5.5,0.5-8.2,0.7c-5.5,0.5-11,1.2-16.4,1.8c-0.3,0-0.7,0.1-1,0.1c-0.7,0.2-1.2,0.5-1.7,1 C0.4,15.6,0,16.6,0,17.6c0,1,0.4,2,1.1,2.7c0.7,0.7,1.8,1.2,2.7,1.1c6.6-0.7,13.2-1.5,19.8-2.1c6.1-0.5,12.3-1,18.4-1.6 c6.7-0.6,13.4-1.1,20.1-1.7c2.7-0.2,5.4-0.5,8.1-0.7c10.4-0.6,20.9-1.1,31.3-1.7c6.5-0.4,13-0.7,19.5-1.1c2.7-0.1,5.4-0.3,8.1-0.4 c10.3-0.4,20.7-0.8,31-1.2c6.3-0.2,12.5-0.5,18.8-0.7c2.1-0.1,4.2-0.2,6.3-0.2c11.2-0.3,22.3-0.5,33.5-0.8 c6.2-0.1,12.5-0.3,18.7-0.4c2.2-0.1,4.4-0.1,6.7-0.1c11.5-0.1,23-0.2,34.6-0.4c7.2-0.1,14.4-0.1,21.6-0.1c12.2,0,24.5,0.1,36.7,0.1 c2.4,0,4.8,0.1,7.2,0.2c6.8,0.2,13.5,0.4,20.3,0.6c5.1,0.2,10.1,0.3,15.2,0.4c3.6,0.1,7.2,0.4,10.8,0.6c10.6,0.6,21.1,1.2,31.7,1.8 c2.7,0.2,5.4,0.4,8,0.6c2.9,0.2,5.8,0.4,8.6,0.7c0.4,0.1,0.9,0.2,1.3,0.3c1.1,0.2,2.2,0.2,3.2-0.4c0.9-0.5,1.6-1.5,1.9-2.5 c0.6-2.2-0.7-4.5-2.9-5.2c-1.9-0.5-3.9-0.7-5.9-0.9c-1.4-0.1-2.7-0.3-4.1-0.4c-2.6-0.3-5.2-0.4-7.9-0.6 C419.7,3.1,414.8,2.9,409.9,2.6z"
                  />
                </svg>
              </div>
            </div>
            <p className="mt-4 h-[45px]">
              
              <span ref={el} />
            </p>
          </div>
          <div className=" mt-4 flex gap-4">
            <Button variant="default">Hire Me</Button>
            <Button variant="outline"  className="shadow"> My IT journey</Button>
          </div>
          <div className="absolute w-full flex bottom-28 left-80 right-0">
            <svg
              height="63"
              width="107"
              fill="none"
              viewBox="0 0 117 93"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M116.986 92.282L43.495 91.1559L44.2074 44.6613L0.712531 43.9948L1.3867 -5.81145e-06"
                stroke="black"
              />
            </svg>
            <p className="absolute font-bold left-7 text-sm text-wrap w-[50%] text-center">
              An entry level frontend developer with strong enthsiasm and
              scrupulous skills
            </p>
          </div>
        </div>
        <div className=" col-span-7">
          <div className=" pt-40 relative">
            <div className="flex justify-center items-center">
              <img src={search} className=" h-[300px] " alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroComponents;
