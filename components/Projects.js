import { projects } from "../data";
import React from "react";
import Image from "next/image";
function Projects() {
  return (
    <section
      id="projects"
      className="text-gray-100    flex flex-col  justify-center items-center w-screen min-h-1/2 font-mono">
      <div className="max-w-5xl">
        <div className="  px-10 flex flex-col  justify-center container">
          <h2 className="text-5xl">Projects</h2>
          <div className="flex flex-wrap justify-center items-center w-full">
            {projects.map((x, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-col md:flex-row justify-center items-center ">
                  <a
                    href={x.link}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full md:w-1/2 m-4">
                    <Image
                      src={x.image}
                      alt="alt"
                      width={x.imageWidth}
                      height={x.imageHeight}
                    />
                  </a>
                  <div className="md:m-2 md:self-start w-full md:w-1/2">
                    <h3 className="text-2xl">{x.title}</h3>
                    <p className="mt-2 text-md">{x.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
