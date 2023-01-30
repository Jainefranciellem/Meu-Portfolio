import React, { Component } from 'react'
import myself from '../img/eu.png'
// import Typical from "react-typical";


const Hero = () => {

  const social_media = [
    { name: "logo-instagram", link: "https://www.instagram.com/francy_dart/" },
    { name: "logo-linkedin", link: "https://www.linkedin.com/in/franciellem-dias/" },
    { name: "logo-GitHub", link: "https://github.com/Jainefranciellem" },
    { name: "logo-Discord", link: "https://discord.com/channels/@me" },
  ]

  return (
    <section
      id="home"
      className="h-screen flex py-10 md:flex-row flex-col items-center"
    >
      <div className="flex-1 left-48 flex items-center justify-center">
        <img src={myself} alt="" className="md:w-8/12  shadow-2xl m-8 object-cover rounded-full "/>
      </div>
      <div className="flex-1">
       <div className="md:text-left text-center">
        <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-gray-900 font-bold">
            <span className="text-purple-400 md:text-6xl text-5xl">
           Olá!
           <br />
          </span>
            Meu nome é Jaine Franciellem
          </h1>
          <h4 className="md:text-2xl text-lg md:leading-normal  leading-5mt-4 font-bold text-gray-900">Desenvolvedora Web Front end</h4>
          <a href="#contact"><button className="btn-primary hover:scale-105 mt-8">Entre em contato</button></a>
        <div className="mt-8 text-5xl md:justify-start justify-center flex items-center gap-8">
            {
              social_media.map(icon =>(
                <div key={`${icon.name} ${Date.now()}`} className="text-gray-900 hover:scale-105 cursor-pointer">
                    <a href={icon.link} className="" target="_blank"><ion-icon name={icon.name}></ion-icon></a>
                </div>
              ))
            }
          </div>
       </div>
        
      </div>
    </section>
  )
}

export default Hero