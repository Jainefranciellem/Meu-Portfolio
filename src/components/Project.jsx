import React from "react";

const Project = () => {
  const project = [
    {
      id: 1,
      title: "Site Responsivo",
      imageSrc: "src/img/SiteResponsivo.png",
      link: "https://jainefranciellem.github.io/site-responsivo/",
    },
    {
      id: 2,
      title: "Pokedex",
      imageSrc: "src/img/Pokedex.png",
      link: "https://jainefranciellem.github.io/Pokedex/",
    },
    {
      id: 3,
      title: "Pixel Art",
      imageSrc: "src/img/pixelArt.png",
      link: "https://jainefranciellem.github.io/Art-pixel/",
    },
    {
      id: 4,
      title: "Shopping Cart",
      imageSrc: "src/img/ShoppingCart.png",
      link: "https://github.com/Jainefranciellem",
    },
    {
      id: 4,
      title: "Trybe Tunes",
      imageSrc: "src/img/TrybeTunes.png",
      link: "https://www.linkedin.com/feed/update/urn:li:activity:7013612254419906560/",
    },
  ];

  return (
    <div id="project">
      <br />
      <div className="text-center mt-12">
        <h3 className="text-4xl md:text-4xl m-8 text-gray-900 font-semibold">
          Meus <span className="text-purple-400">Projetos</span> 
        </h3>
        <br />
        <br />
        <div className="flex justify-center flex-wrap gap-8">
          {project.map(({ id, title, imageSrc, link }) => (
              <div
                key={id}
                className="  bg-gray-900 m-2 p-2 cursor-pointer group shadow-md min-w-[18rem] max-w-[19rem] max-h-[18rem] shadow-gray-600 overflow-hidden rounded-md"
              >
                <img
                src={imageSrc}
                alt="projects"
                className="rounded-md duration-200 hover:scale-105"
              />
               <div className="text-purple-400 hover:text-purple-400 text-center text-xl my-4 duration-200 cursor-pointer">
                    <a href={link} target="_blank">{title}</a>
                </div>
              </div>
          ))}
        </div>
            <br />
            <br />
        <div className="flex items-center justify-center">
            <a href="https://github.com/Jainefranciellem?tab=repositories" target="_blank" className="group flex items-center justify-center my-8 btn-primary hover:scale-105 px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer">
              Mais Projetos
              <span className="-rotate-90 duration-100 ease-in group-hover:translate-x-5">
              </span>
            </a>
        </div>
      </div>
    </div>
  );
};

export default Project;