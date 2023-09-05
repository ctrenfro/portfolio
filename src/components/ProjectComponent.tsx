import React from "react";

type ProjectProps = {
  name: string;
  id: number;
  description: string;
  image: string;
  github: string;
  site: string;
  tags: string[];
};

const ProjectComponent = (props: ProjectProps) => {
  return (
    <div id="projects" className="flex flex-row mt-8">
      <div>
        <a href={props.site} target="_blank">
          <img
            className=" max-w-[200px] sm:max-w-[240px] md:max-w-[280px] rounded-lg mt-12 sm:mt-6 ml-1 hover:border-teal-400 border-4 border-[#13151a]"
            src={props.image}
            alt=""
          />
        </a>
      </div>
      <div className="flex flex-col pl-8 mt-4 text-slate-400">
        <h1 className="text-xl text-white sm:text-2xl md:text-3xl">
          {props.name}
        </h1>
        <p className="text-base sm:text-lg flex flex-wrap">
          {props.description}
        </p>
        <div className="flex flex-row flex-wrap text-lg mt-6">
          {props.tags.map((tag) => {
            return (
              <p className="bg-teal-400/10 text-teal-300 ml-1 mt-2 items-center font-medium py-1 leading-5 px-2 rounded-full">
                {tag}
              </p>
            );
          })}
        </div>
        <a
          href={props.github}
          target="_blank"
          className="mt-4 text-base px-2 sm:text-lg ml-1 bg-slate-600 text-slate-200 hover:text-teal-300 rounded-lg leading-5 font-bold items-center w-[58px] sm:w-[65px] flex justify-center"
        >
          Github
        </a>
      </div>
    </div>
  );
};

export default ProjectComponent;
