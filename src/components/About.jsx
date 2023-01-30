import React from "react";
const About = () => {
  const info = [
    { text: "Years experience", count: "04" },
    { text: "Completed Projects", count: "24" },
    { text: "Companies Work", count: "06" },
  ];
  return (
    <section id="about" className="py-10 text-gray-900">
      <div className="text-center m-12">
        <h3 className="text-4xl font-semibold">
          Sobre <span className="text-purple-400">Mim</span>
        </h3>
        <br />
        <br />
        <p  className="text-purple-400">
        </p>
        <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
          <div className="p-2">
            <div className="text-gray-900 font-semibold mt-12 my-3">
              <p className="text-justify text-xl leading-7 w-11/12 mx-auto">
              Curso Análise e Desenvolvimento de Sistemas pela Universidade Estácio de Sá e estudo Desenvolvimento Web FullStack na Trybe, onde ficarei durante 1 ano imersa na programação estudando Javascript, Typescript, Node, ReactJs, SQL, Docker e várias outras tecnologias, além do desenvolvimento da SoftSkills durante todo o curso.
              <br />
              <br /> Me considero uma entusiasta do conhecimento, sou completamente apaixonada por todo o processo de aprendizagem e gosto de trabalhar em  equipe. Esses foram alguns dos motivo pelo qual me encontrei na programação, área em que se está sempre aprendendo coisas novas e onde a colaboração é essencial.
              </p>
              <br />
              <br />
              <a href="./src/assets/Code_a_program.pdf" download>
              </a>
            </div>
          </div>
          <div className="flex-1 md:mt-0 mt-6 flex justify-center items-center">
            <div className="lg:w-96 h-full relative sm:w-10/12 w-12/12 max-w-sm aboutImg ">
              <img
                src="https://media.giphy.com/media/DMRTSCYcwNJxlc8HXc/giphy.gif"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;