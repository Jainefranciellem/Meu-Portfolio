import React, { Component, useEffect, useState } from 'react'

const Navbar = () => {
    const [sticky, setSticky] = useState(false)
    const [open, setOpen] = useState(false)

    const menuLinks = [
      { name: "PÁGINA INICIAL", link: "#home" },
      { name: "SOBRE MIM", link: "#about" },
      { name: "HABILIDADES", link: "#skills" },
      { name: "PROJETOS", link: "#project" },
      { name: "CONTATO", link: "#contact" },
    ]

    useEffect(() => {
      window.addEventListener("scroll", () => {
        const nav = document.querySelector('nav')
        window.scrollY > 0 ? setSticky(true): setSticky(false);
      });
    }, []);

    return (

    <nav className={`fixed w-full left-0 top-0 z-[999] ${sticky ? "bg-white/60 text-gray-900" : "text-purple-400"}`}>
        <div className="flex items-center justify-between">
          <div className="mx-7">
            <h4 className="text-2xl uppercase font-bold" >
              franciellem
            </h4>
          </div>
        <div className={` ${ sticky ? ' md:bg-white/0 bg-black' : ''} text-gray-900 md:block hidden px-7 py-2 font-medium rounded-bl-full`}>
            <ul className="flex items-center text-black gap-1 py-2 text-lg">
              {
                menuLinks.map((menu, i) => (
                <li key={`${menu.name} ${Date.now()}`} className="px-7 font-bold text-base hover:text-purple-400" >
                  <a href={menu.link}>{menu.name}</a>
                </li>
                ))
              }
            </ul>
          </div>
          <div 
          onClick={() => setOpen(!open)}
          className={`z-[999] $text-gray-900 text-3xl md:hidden m-5`}>
          <ion-icon name="menu"></ion-icon>
          </div>
          <div className={`md:hidden text-gray-900 absolute w-2/3 h-screen px-7 py-2 font-semibold bg-white/60 top-0 duration-200 ${ open ? 'right-0': 'right-[-100%]'}`}>
            <ul className='flex flex-col justify-center h-full gap-10 py-2'>
              {
                menuLinks.map((menu, i) => (
                  <li key={i} className="px-6 hover:text-purple-400 ">
                    <a href={menu.link}>{menu.name}</a>
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
    </nav>
    )
}

export default Navbar;