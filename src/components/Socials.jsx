import { SiInstagram, SiLinkedin, SiGithub } from "react-icons/si";

export default function Socials() {
  return (
    <div className="apresentacao">
      <h2>Olá, meu nome é</h2>
      <h1>Eliton Netto</h1>
      <h2>Desenvolvedor Front-End</h2>
      <div className="icons">
        <SiInstagram />
        <SiLinkedin />
        <SiGithub />
      </div>
    </div>
  );
}
