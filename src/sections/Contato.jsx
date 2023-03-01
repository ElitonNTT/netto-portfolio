export default function Contato() {
  return (
    <div id="contato" className="container layoutSections">
      <h1 className="topicos">FALE COMIGO!</h1>
      <form>
        <div className="box-contato">
          <div className="fields">
            <label htmlFor="name">Nome:</label>
            <input
              type="text"
              name="name"
              id="name"
              required
              placeholder="Jhon Doe"
            />
          </div>
          <div className="fields">
            <label htmlFor="subject">Assunto:</label>
            <input
              type="text"
              name="subject"
              id="subject"
              required
              placeholder="Projetos, Trabalhos..."
            />
          </div>
          <div className="fields">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              id="email"
              required
              placeholder="Insira um email válido"
            />
          </div>
        </div>
        <div className="box-mensagens">
          <div className="fields">
            <label htmlFor="message">Sua mensagem:</label>
            <textarea
              type="text"
              name="message"
              id="message"
              placeholder="Digite aqui: "
            />
          </div>
        </div>
      </form>
      <button type="submit">Enviar</button>
    </div>
  );
}
