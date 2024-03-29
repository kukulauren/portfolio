import React from "react";
import resume from "../assets/resume.pdf";
import resume1 from "../assets/resume1.jpg";
import resume2 from "../assets/resume2.jpg";
import cv1 from "../assets/cv1.png";
import cv2 from "../assets/cv2.png";
import cv3 from "../assets/cv3.png";
import cv from "../assets/cv.pdf";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
const FooterComponents = () => {
  return (
    <footer id="contact" className=" border-t-2 py-8">
      <div className=" flex w-full justify-between">
        <div className="">
          <p>@kukulauren2024</p>
        </div>
        <div className="flex flex-col gap-2">
          <p>t.me/kukulauren</p>
          <p>kukulauren1997@gmail.com</p>
        </div>
        <div className="flex flex-col gap-2">
          <Dialog>
            <DialogTrigger className="text-start">My CV</DialogTrigger>
            <DialogContent className=" h-screen">
              <DialogHeader className="overflow-y-scroll">
                <DialogTitle>
                  <a
                    href={cv}
                    download={"Khin-Myat-Noe-CV.pdf"}
                    className="flex items-center my-5"
                  >
                    Download CV
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                      />
                    </svg>
                  </a>
                </DialogTitle>
                <DialogDescription className="">
                  <img src={cv1} className=" h-screen" alt="" />
                  <img src={cv2} className=" h-screen" alt="" />
                  <img src={cv3} className=" h-screen" alt="" />
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
          <Dialog>
            <DialogTrigger>My Resume</DialogTrigger>
            <DialogContent className=" h-screen">
              <DialogHeader className="overflow-y-scroll">
                <DialogTitle>
                  <a
                    href={resume}
                    download={"Khin-Myat-Noe-resume.pdf"}
                    className="flex items-center my-5"
                  >
                    Download Resume
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                      />
                    </svg>
                  </a>
                </DialogTitle>
                <DialogDescription className="">
                  <img src={resume1} className=" h-screen" alt="" />
                  <img src={resume2} className=" h-screen" alt="" />
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>
        <div className=" flex gap-5  items-start">
          <a
            href="https://www.facebook.com/profile.php?id=100081978610983&mibextid=ZbWKwL"
            target="_blank"
          >
            <svg
              fill="#000000"
              width="24px"
              height="24px"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 2.03998C6.5 2.03998 2 6.52998 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.84998C10.44 7.33998 11.93 5.95998 14.22 5.95998C15.31 5.95998 16.45 6.14998 16.45 6.14998V8.61998H15.19C13.95 8.61998 13.56 9.38998 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96C15.9164 21.5878 18.0622 20.3855 19.6099 18.57C21.1576 16.7546 22.0054 14.4456 22 12.06C22 6.52998 17.5 2.03998 12 2.03998Z" />
            </svg>
          </a>
          <a href="https://github.com/kukulauren" target="_blank">
            <svg
              className="w-6 h-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z"
                clipRule="evenodd"
              />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/khin-myat-noe-86b98a260/"
            target="_blank"
          >
            <svg
              className="w-6 h-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z"
                clipRule="evenodd"
              />
              <path d="M7.2 8.809H4V19.5h3.2V8.809Z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponents;
