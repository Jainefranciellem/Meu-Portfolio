import React from "react";

const Skills = () => {
  const skills = [
    {
      logo: "logo-html5",
      name: "Hmtl5",
    },
    {
      logo: "logo-css3",
      name: "Css3",
    },
    {
      logo: "logo-nodejs",
      name: "JavasCript",
    },
    {
      logo: "logo-react",
      name: "ReactJs",
    },
    {
      logo: "git-branch",
      name: "Git",
    },
    {
      logo: "flower-outline",
      name: "tailwind",
    },

  ];
  return (
    <section id="skills" className="py-10 relative">
      <div className="mt-8  text-center">
        <h3 className="text-4xl font-semibold">
          Minhas <span className="text-purple-400">Habilidades</span>
        </h3>
        <br />
        <br />
        <br />
        <h4 className="text-3xl text-gray-900">
          Minhas Hard Skills
        </h4>
        <div className="flex items-center justify-center mt-10 gap-8 flex-wrap">
          {skills.map((skill, i) => (
            <div
              key={i}
              className="border-2 group border-purple-400 relative min-w-[10rem] max-w-[14rem] max-h-[17rem] p-10 rounded-xl"
            >
              <div
                style={{
                  background: `conic-gradient(#a527f9 ${skill.count}%,#f4ecec ${skill.count}%)`,
                }}
                className="w-32 h-32 flex items-center justify-center rounded-full"
              >
                <div className="text-6xl w-28 h-28 bg-gray-900 rounded-full flex items-center justify-center text-purple-400">
                  <ion-icon name={skill.logo}></ion-icon>
                  {/* <ion-icon src="src/img/tailwind-css.svg"></ion-icon> */}
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