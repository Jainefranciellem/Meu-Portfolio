import React from "react";

const Contact = () => {
  const contact_info = [
    { logo: "mail", text: "jainefranciellen@gmail.com" },
    { logo: "logo-whatsapp", text: "(+55) 79 99673-3389" },
  ];
  return (
    <section id="contact" className="py-10 px-3 text-gray-900">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          Entre em <span className="text-purple-400">Contato</span>
        </h3>
        <div
          className="mt-16 flex md:flex-row flex-col
         gap-6 max-w-5xl bg-gray-900 md:p-6 p-2 rounded-lg mx-auto"
        >
          <form className="flex flex-col flex-1 gap-5">
            <input type="text" placeholder="Your Name" />
            <input type="Email" placeholder="Your Email Address" />
            <textarea placeholder="Your Message" rows={10}></textarea>
            <button className="btn-primary w-fit">Enviar Mensagem</button>
          </form>
          <div className="flex flex-col  gap-7 ">
            {contact_info.map((contact, i) => (
              <div
                key={i}
                className="flex flex-row  
                  text-left gap-4 flex-wrap items-center"
              >
                <div className="min-w-[3.5rem]  text-3xl min-h-[3.5rem] flex items-center justify-center text-white bg-purple-400 rounded-full">
                  <ion-icon name={contact.logo}></ion-icon>
                </div>
                <p className="md:text-base text-sm text-purple-400 break-words">
                  {contact.text}
                </p>
              </div>

            ))}
          </div>
        </div>
      </div>
      <br />
      <br />
    </section>
  );
};

export default Contact;
