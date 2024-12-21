import { useState } from "react";
import "./styles.scss";
import { postNewsletter } from "../../services/newsletterServer";

export const Newsletter = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const response = await postNewsletter(name, email);

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (email.trim() === "" || name.trim() === "") {
      setMessage("Preencha todos os campos!");
      return;
    }
    if (!emailRegex.test(email)) {
      setMessage("O formato do e-mail é inválido!");
      return;
    }

    if (response.status === 200) {
      setName("");
      setEmail("");
      setMessage("E-mail cadastrado com sucesso!");
    } else {
      setMessage("Houve um erro inesperado, por favor tente novamente!");
    }
  }

  return (
    <div className="newsletter-container">
      <div className="newsletter-container__wrapper">
        <h2 className="newsletter-container__title">
          Participe de nossas news com promoções e novidades!
        </h2>
        <form className="newsletter-container__form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Digite seu nome"
            onChange={(e) => {
              setName(e.target.value);
            }}
            value={name}
          />
          <input
            type="text"
            placeholder="Digite seu email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
          />
          <button type="submit">Eu quero!</button>
        </form>
        {message}
      </div>
    </div>
  );
};
