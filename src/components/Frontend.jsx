import React from "react";

const Skills = () => {
  const skills = [
    {
      logo: "html5-original.svg",
      name: "html5",
    },
    {
      logo: "css3-original.svg",
      name: "css3",
    },
    {
      logo: "javascript-original.svg",
      name: "javascript",
    },
    {
      logo: "react-original.svg",
      name: "react",
    },
    {
      logo: "bootstrap-original.svg",
      name: "bootstrap",
    },
    {
      logo: "tailwindcss-original.svg",
      name: "tailwindcss",
    },
    {
      logo: "redux-original.svg",
      name: "redux",
    },
    {
      logo: "jest-plain.svg",
      name: "jest",
    },
    {
      logo: "figma-original.svg",
      name: "figma",
    },
    {
      logo: "angular-original.svg",
      name: "angular",
    },
  ];
  return (
    <section id="skills" className="flex justify-center py-10 relative">
      <div className="mt-8 text-center w-9/12">
        <h3 className="text-4xl font-semibold mb-28">
          Minhas <span className="text-purple-400 ">Habilidades</span>
        </h3>

        <h4 className="text-3xl text-gray-900">
          Skills em Frontend
        </h4>
        <div className="flex items-center justify-center mt-10 gap-20 flex-wrap">
          {skills.map((skill, i) => (
            <div
              key={`${skill.name} ${Date.now()}`}
              className="border-2 group border-purple-400 relative min-w-[10rem] max-w-[14rem] max-h-[17rem] p-10 rounded-xl"
            >
              <div
                style={{
                  background: `conic-gradient(#a527f9 ${skill.count}%,#f4ecec ${skill.count}%)`,
                }}
                className="w-32 h-32 flex items-center justify-center rounded-full"
              >
                <div className="text-6xl w-28 h-28 bg-gray-900 rounded-full flex items-center justify-center text-purple-400">
                  <img className="w-16 h-16"src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${skill.name}/${skill.logo}`} alt="" />
                </div>
              </div>
              <p className="text-3xl mt-2">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;