import React from "react";
import { Button } from "@/components/ui/button";
import FooterComponents from "./Footer.components";

const SkillsComponents = () => {
  return (
    <section
      id="skills"
      className=" relative h-[100vh] snap-start snap-always pt-20"
    >
      <div className=" flex justify-between flex-col h-full">
        <div className="">
          <h1 className=" text-center my-5 text-[40px] font-bold text-[#0044cc]">
            My proficiencies
          </h1>
          <div className="flex flex-wrap w-full mb-10 md:space-y-0 space-y-6">
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 mb-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                />
              </svg>

              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                  Design
                </h2>
                <p className="leading-relaxed text-base">
                  Strong foundation in design principles to craft user-friendly
                  interfaces
                </p>
              </div>
            </div>
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div className="flex mb-5">
                <svg
                  className="w-6 h-6 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="m8 8-4 4 4 4m8 0 4-4-4-4m-2-3-4 14"
                  />
                </svg>
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                  Code
                </h2>
                <p className="leading-relaxed text-base">
                  Skilled in HTML, CSS, and JavaScript to bring designs to life
                </p>
              </div>
            </div>
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 mb-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 0 1-.657.643 48.39 48.39 0 0 1-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 0 1-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 0 0-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 0 1-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 0 0 .657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 0 1-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 0 0 5.427-.63 48.05 48.05 0 0 0 .582-4.717.532.532 0 0 0-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.96.401v0a.656.656 0 0 0 .658-.663 48.422 48.422 0 0 0-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 0 1-.61-.58v0Z"
                />
              </svg>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                  Fetching tools
                </h2>
                <p className="leading-relaxed text-base">
                  Adept at identifying and tackling technical challenges to
                  build robust solutions
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap w-full mb-10 md:space-y-0 space-y-6">
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 mb-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                  Testing
                </h2>
                <p className="leading-relaxed text-base">
                  Committed to thorough testing practices for a seamless user
                  experience
                </p>
              </div>
            </div>
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 mb-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
                />
              </svg>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                  Deployment
                </h2>
                <p className="leading-relaxed text-base">
                  Experienced in deploying projects efficiently and ensuring
                  smooth launches
                </p>
              </div>
            </div>
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
              <svg
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
                fill="none"
                className=" mb-5"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22 7.99995H20M20 7.99995H19C17 6.00173 14 3.99974 12 5.99995M20 7.99995V15.9999M12 5.99995L8.99956 9.00158C8.9202 9.08097 8.88052 9.12066 8.84859 9.1558C8.15499 9.91889 8.15528 11.0842 8.84927 11.847C8.88121 11.8821 8.92098 11.9218 9.00031 12.0011C9.07967 12.0804 9.11936 12.1201 9.15449 12.152C9.91743 12.8453 11.0824 12.8452 11.8451 12.1516C11.8802 12.1197 11.9199 12.08 11.9992 12.0007L12.9996 11.0003M12 5.99995C10 3.99974 7 6.0018 5 8.00001H4M2 8.00001H4M4 8.00001V15.9999M20 15.9999V18.9999H22M20 15.9999H17.1716M15 12.9999L16.5 14.4999C16.5796 14.5796 16.6195 14.6194 16.6515 14.6547C17.3449 15.4175 17.3449 16.5824 16.6515 17.3452C16.6195 17.3805 16.5796 17.4203 16.5 17.4999C16.4204 17.5795 16.3805 17.6194 16.3453 17.6515C15.5824 18.3449 14.4176 18.3449 13.6547 17.6515C13.6195 17.6194 13.5796 17.5795 13.5 17.4999L13 16.9999C12.4548 17.5452 12.1821 17.8178 11.888 17.9636C11.3285 18.2408 10.6715 18.2408 10.112 17.9636C9.81788 17.8178 9.54525 17.5452 9 16.9999C8.31085 17.9188 6.89563 17.7912 6.38197 16.7639L6 15.9999H4M4 15.9999V18.9999H2"
                  stroke="#000000"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                  Collaboration
                </h2>
                <p className="leading-relaxed text-base">
                  Thrives in collaborative environments and fosters strong
                  communication with stakeholders
                </p>
              </div>
            </div>
          </div>
        </div>
        <FooterComponents />
      </div>
    </section>
  );
};

export default SkillsComponents;
