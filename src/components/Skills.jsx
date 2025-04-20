import React from "react";
import GridLayout from "./GridLayout";
import SectionHeading from "./SectionHeading";
import skills from "../data/skills";
import Skill from "./Skill";

const Skills = () => {
  return (
    <div
      id="Skills"
      className="h-full min-h-screen w-full flex items-center bg-gradient-to-b from-gray-800 to-slate-900 rounded-xl"
    >
      <div className="section pt-0">
        <div className="pb-5 pt-5 md:pt-0 text-white font-semibold">
        <div className='mb-3'>  My Tech Stack ~</div>
        </div>
        <div className="p-5 xs:p-4 rounded-lg bg-gray-900">
          <GridLayout style="grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6">
            {skills.map((skill, index) => {
              return <Skill key={index} skill={skill} />;
            })}
          </GridLayout>
        </div>
      </div>
    </div>
  );
};

export default Skills;
