import { SiInstagram, SiLinkedin, SiGithub } from "react-icons/si";

export default function Socials() {
  return (
    <div className="apresentacao">
      <h2>Olá, meu nome é</h2>
      <h1>Eliton Netto</h1>
      <h2>Desenvolvedor Front-End</h2>
      <div className="icons">
        <a href="https://www.instagram.com/eliton_netto_/" target="_blank">
          <SiInstagram />
        </a>
        <a href="https://www.linkedin.com/in/eliton-netto/" target="_blank">
          <SiLinkedin />
        </a>
        <a href="https://github.com/ElitonNTT" target="_blank">
          <SiGithub />
        </a>
      </div>
    </div>
  );
}
