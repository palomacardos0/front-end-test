import { useState } from "react";
import "./styles.scss";
import { postNewsletter } from "../../services/newsletterServer";

export const Newsletter = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(true);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const response = await postNewsletter(name, email);

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (email.trim() === "" || name.trim() === "") {
      setError(true);
      return;
    }
    if (!emailRegex.test(email)) {
      setError(true);
      return;
    }

    if (response.status === 200) {
      setName("");
      setEmail("");
      setSuccess(true);
      setError(false);
      setMessage("");
    } else {
      setMessage("Houve um erro inesperado, por favor tente novamente!");
    }
  }

  return (
    <div className="newsletter-container">
      {success ? (
        <div className="newsletter-container__wrapper">
          <h2 className="newsletter-container__title-success">
            Seu e-mail foi cadastrado com sucesso!
          </h2>
          <p className="newsletter-container__text-success">
            A partir de agora você receberá as novidade e ofertas exclusivas.
          </p>
          <button
            className="newsletter-container__button-success"
            onClick={() => {
              setSuccess(!success);
            }}
          >
            Cadastrar novo e-mail
          </button>
        </div>
      ) : (
        <div className="newsletter-container__wrapper">
          <h2 className="newsletter-container__title">
            Participe de nossas news com promoções e novidades!
          </h2>
          <form className="newsletter-container__form" onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                placeholder="Digite seu nome"
                onChange={(e) => {
                  setName(e.target.value);
                }}
                value={name}
                className={error && name.trim() === "" ? "error" : ""}
              />
              {error && name.trim() === "" ? (
                <span className="newsletter-container__error">
                  Preencha com seu nome completo
                </span>
              ) : (
                <></>
              )}
            </div>
            <div>
              <input
                type="text"
                placeholder="Digite seu email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                value={email}
                className={error && email.trim() === "" ? "error" : ""}
              />
              {error && email.trim() === "" ? (
                <span className="newsletter-container__error">
                  Preencha com um e-mail válido
                </span>
              ) : (
                <></>
              )}
            </div>

            <button type="submit">Eu quero!</button>
          </form>
          <div className="newsletter-container__unexpected-error">
            {message}
          </div>
        </div>
      )}
    </div>
  );
};
