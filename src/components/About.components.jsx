import React from "react";
import Me from "../assets/me.jpeg";

const AboutComponents = () => {
  return (
    <section id="about" className=" relative h-[100vh] snap-start snap-always">
      <div className="flex items-center h-full">
        <div className=" grid grid-cols-12 w-full">
          <div className=" col-span-7 relative">
            <div className=" relative -translate-x-12 w-fit">
              <svg
                height="425"
                width="640"
                fill="none"
                viewBox="0 0 640 525"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M-10.4941 198.112H44.0902L151.377 75.8994H614.402"
                  stroke="black"
                  strokeOpacity="0.5"
                  strokeWidth="2"
                />
                <path
                  d="M-10.8711 388.506H98.6739L205.96 511.147H506.739"
                  stroke="black"
                  strokeWidth="2"
                />
                <path d="M-12 300.17H346.374" stroke="black" strokeWidth="2" />
                <path
                  d="M-10.4941 14.1514H451.778"
                  stroke="black"
                  strokeOpacity="0.5"
                  strokeWidth="3"
                />
                <ellipse
                  cx="464.577"
                  cy="14.1509"
                  fill="black"
                  fillOpacity="0.5"
                  rx="12.7991"
                  ry="14.1509"
                />
                <ellipse
                  cx="627.2"
                  cy="75.8999"
                  fill="black"
                  fillOpacity="0.5"
                  rx="12.7991"
                  ry="14.1509"
                />
                <ellipse
                  cx="518.031"
                  cy="510.718"
                  fill="black"
                  fillOpacity="0.5"
                  rx="12.7991"
                  ry="14.1509"
                />
                <ellipse
                  cx="356.161"
                  cy="298.884"
                  fill="black"
                  fillOpacity="0.5"
                  rx="12.7991"
                  ry="14.1509"
                />
              </svg>
              <img
                className=" absolute size-[300px] top-[5.5rem] left-1/2"
                src={Me}
                alt=""
              />
            </div>
          </div>
          <div className=" col-span-5 ">
            <h1 className=" mb-5 text-[#0044CC] text-[40px] font-bold">
              2022-present
            </h1>
            <p className=" mb-5">
              Proficient in HTML, CSS, and JavaScript, I've leveraged these
              languages to create dynamic and engaging web experiences.I'm
              well-versed in React and its associated libraries and frameworks,
              allowing me to build scalable and interactive interfaces.
            </p>
            <p>
              I've had the opportunity to work on several projects, where I've
              implemented responsive UI designs and ensured accessibility for
              all users. Whether it's a simple landing page or a complex web
              application, I strive to deliver excellence in every project I
              undertake.
            </p>
            <p>
              During my time as a tech intern at a local NGO, I had the
              privilege of immersing myself in a real-world development
              environment. Here, I not only honed my technical skills but also
              gained valuable insights into the workflow of a development team.
              Embracing agile methodologies, I collaborated closely with
              colleagues to deliver impactful solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutComponents;
