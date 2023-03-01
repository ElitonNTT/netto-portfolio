import { useState } from "react";
import { IoLogoSass } from "react-icons/io";
import {
  SiReact,
  SiJavascript,
  SiVuedotjs,
  SiHtml5,
  SiCss3,
  SiGulp,
  SiTypescript,
} from "react-icons/si";

export default function About() {
  const [show, setShow] = useState(true);

  const toggleImg = () => {
    show ? setShow(false) : setShow(true);
  };

  return (
    <div id="about" className="container layoutSections">
      <div className="bg-about">
        <div className="box-imgs">
          <label class="switch">
            <input type="checkbox" className="toggle" onClick={toggleImg} />
            <span class="slider round"></span>
          </label>
          {show ? (
            <div className="real imgs" />
          ) : (
            <div className="avatar imgs" />
          )}
        </div>
        <div className="box-sobre">
          <div className="texto">
            <h1 className="topicos">Minha História</h1>
            <div className="history-text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </div>
          </div>
          <div className="tecnologias">
            <h1 className="topicos">TECNOLOGIAS</h1>
            <div className="icones">
              <SiHtml5 />
              <SiCss3 />
              <SiJavascript />
              <SiTypescript />
              <SiReact />
              <SiVuedotjs />
              <IoLogoSass />
              <SiGulp />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
