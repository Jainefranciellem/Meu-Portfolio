import React from "react";

const Skills = () => {
  const skills = [
    {
      logo: "docker-original.svg",
      name: "docker",
    },
    {
      logo: "mysql-original.svg",
      name: "mysql",
    },
    {
      logo: "typescript-original.svg",
      name: "typescript",
    },
    {
      logo: "python-original.svg",
      name: "python",
    },
    {
      logo: "sequelize-original.svg",
      name: "sequelize",
    },
    {
      logo: "nodejs-original.svg",
      name: "nodejs",
    },
    {
      logo: "mongodb-original.svg",
      name: "mongodb",
    },
    {
      logo: "express-original.svg",
      name: "express",
    },
    {
      logo: "git-original.svg",
      name: "git",
    },
  ];
  return (
    <section id="skills" className="flex justify-center py-10 relative text-center">
      <div className="mt-8 text-gray-900 text-center w-9/12">
      <h4 className="text-3xl text-gray-900">
        Skills em Backend
        </h4>
        <div className="flex items-center justify-center mt-10 gap-16 flex-wrap">
          {skills.map((skill, i) => (
            <div
              key={`${skill.name} ${Date.now()}`}
              className="border-2 group border-purple-400 relative min-w-[10rem] max-w-[14rem] max-h-[17rem] p-10 rounded-xl"
            >
                <div className="text-6xl w-28 h-28 bg-gray-900 rounded-full flex items-center justify-center text-purple-400 m-6">
                  <img className="w-16 h-16"src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${skill.name}/${skill.logo}`} alt="" />
                </div>
              <p className="text-xl">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;