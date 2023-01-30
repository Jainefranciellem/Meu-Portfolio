import React from 'react'

const Footer = () => {
  return (
    <div
    className="flex justify-center bg-gray-900 text-purple-400 duration-200 p-2 text-center">
      <p className="m-4 mr-12">Feito por Franciellem.</p>
     <a href="/">
            <i className=" text-5xl text-purple-400 ">
              <ion-icon name="arrow-up-circle-outline"></ion-icon>
            </i>
        </a>
    </div>
  );
};

export default Footer;