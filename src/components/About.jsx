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
              <p className="text-justify text-xl leading-7 w-12/15 mx-auto">
              Sou formada em Análise e Desenvolvimento de Sistemas pela Universidade Estácio de Sá e também concluí o curso de Desenvolvimento Web FullStack na Trybe, onde tive a oportunidade de passar 1 ano imersa no mundo da programação. Nesse período, estudei intensivamente JavaScript, TypeScript, Node.js, React, SQL, Docker, entre outras tecnologias. Além das habilidades técnicas, desenvolvi também soft skills fundamentais para o trabalho em equipe e a resolução de problemas.
              <br />
              <br /> Tenho uma verdadeira paixão pelo aprendizado e por estar constantemente me desafiando. A programação me atraiu justamente por ser uma área em constante evolução, onde a colaboração é essencial e o aprendizado nunca para. Adoro contribuir em equipe e acredito que o conhecimento compartilhado é uma das maiores forças no ambiente de trabalho.
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