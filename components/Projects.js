import { projects } from "../data";
import React from "react";
import { Image } from "next/image";
function Projects() {
  return (
    <section className="text-gray-100 md:my-4 lg:my-6 xl:my-10  flex flex-col  justify-center items-center w-screen min-h-1/2 font-mono">
      <div className="max-w-5xl">
        <div className="  p-10 flex flex-col  justify-center container">
          <h2 className="text-5xl">Projects</h2>
          <div className="flex flex-wrap w-full">
            {projects.map((x, index) => {
              return (
                <div
                  key={index}
                  className="mt-10 flex flex-col md:flex-row justify-start items-center md:items-start">
                  <a href={x.link} className="w-full md:w-1/2 mr-10">
                    <Image
                      src={x.image}
                      alt={x.subtitle}
                      className="object-cover aspect-video"
                    />
                  </a>
                  <div className="mt-6 md:mt-0 w-full md:w-1/2">
                    <h3 className="text-2xl">{x.title}</h3>
                    <p className="mt-2">{x.description}</p>
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
