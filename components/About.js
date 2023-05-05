import React from "react";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { SiDevpost, SiReact, SiTailwindcss, SiCodewars } from "react-icons/si";
function About() {
  return (
    <section
      id="about"
      className="text-gray-100 md:my-4 lg:my-6 xl:my-10  flex flex-col  justify-center items-center w-screen min-h-1/2 font-mono">
      <div className="max-w-5xl">
        <div className="  p-10 flex flex-col  justify-center container">
          <h1 className="text-5xl">
            Hi, I&#39;m Cat. A full-stack web developer.
          </h1>
          <p className="my-10 text-md">
            I&#39;m a highly motivated and enthusiastic developer looking to
            work on exciting and challenging projects. Lately I&#39;ve been
            developing my projects with{" "}
            <span className=" whitespace-nowrap">
              <SiReact className=" inline mr-2 text-cyan-200" />
              React.js
            </span>{" "}
            and{" "}
            <span className=" whitespace-nowrap">
              <SiTailwindcss className=" inline mr-2 text-sky-400" />
              TailwindCSS.
            </span>
          </p>
          <div className="flex flex-row items-center">
            <a
              href="https://github.com/catmcclelland"
              target="_blank"
              rel="noreferrer">
              <FiGithub className="w-6 h-6 mr-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/catmcclelland/"
              target="_blank"
              rel="noreferrer">
              <FiLinkedin className="w-6 h-6 mx-4" />
            </a>
            <a
              href="https://devpost.com/catmcclelland"
              target="_blank"
              rel="noreferrer">
              <SiDevpost className="w-6 h-6 mx-4" />
            </a>

            <a
              href="mailto: catmcclelland@yahoo.com"
              className="py-2 px-3 bg-gray-800 rounded-full">
              Email Me
            </a>
          </div>
          <div
            className=" w-full mt-10 animate-gradient"
            style={{
              backgroundPosition: "0% 0%",
              background:
                "linear-gradient(to right, #B294FF, #57E6E6, #FEFFB8, #57E6E6, #B294FF, #57E6E6)",
              animation: "gradient 3s linear infinite",
              backgroundSize: "500% auto",
              height: "2px",
              borderBottomRightRadius: "2px",
              borderBottomLeftRadius: "2px",
            }}></div>
        </div>
      </div>
    </section>
  );
}

export default About;
