import React from "react";

const Skills = () => {
  const skills = [
    {
      logo: "color-palette-outline",
      name: "Criatividade",
    },
    {
      logo: "trending-up-outline",
      name: "perseverança",
    },
    {
      logo: "extension-puzzle-outline",
      name: "Resolução de Problemas",
    },
    {
      logo: "shapes-outline",
      name: "Adaptabilidade",
    },
    {
      logo: "people-outline",
      name: "Colaboração",
    },
    {
      logo: "flash-outline",
      name: "Proatividade",
    },

  ];
  return (
    <section id="skills" className="py-10 relative">
      <div className="mt-8 text-gray-900 text-center">
      <h4 className="text-3xl text-gray-900">
          Minhas Soft Skills
        </h4>
        <div className="flex items-center justify-center mt-10 gap-8 flex-wrap">
          {skills.map((skill, i) => (
            <div
              key={i}
              className="border-2 group border-purple-400 relative min-w-[10rem] max-w-[14rem] max-h-[17rem] p-10 rounded-xl"
            >
                <div className="text-6xl w-28 h-28 bg-gray-900 rounded-full flex items-center justify-center text-purple-400 m-6">
                  <ion-icon name={skill.logo}></ion-icon>
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