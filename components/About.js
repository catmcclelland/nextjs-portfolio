import React from "react";
import { FiGithub, FiTwitter } from "react-icons/fi";
import { SiDevpost } from "react-icons/si";
function About() {
  return (
    <section className="text-gray-100 md:my-4 lg:my-6 xl:my-10  flex flex-col  justify-center items-center w-screen min-h-1/2 font-mono">
      <div className="max-w-5xl">
        <div className="  p-10 flex flex-col  justify-center container">
          <h1 className="text-5xl">
            Hi, I&#39;m Cat. A front-end web developer.
          </h1>
          <p className="my-10 text-md">
            I&#39;m a highly motivated and enthusiastic developer looking to
            work on exciting and challenging projects.Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Maecenas aliquam tortor eu mauris
            euismod, id tristique nisl tempor.
          </p>
          <div className="flex flex-row items-center">
            <a href="#">
              <FiGithub className="w-6 h-6 mr-4" />
            </a>
            <a href="#">
              <FiTwitter className="w-6 h-6 mx-4" />
            </a>
            <a href="#">
              <SiDevpost className="w-6 h-6 mx-4" />
            </a>
            <a href="mailto: #" className="py-2 px-3 bg-gray-800 rounded-full">
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
