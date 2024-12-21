import "./styles.scss";

export const Newsletter = () => {
  return (
    <div className="newsletter-container">
      <div className="newsletter-container__wrapper">
        <h2 className="newsletter-container__title">
          Participe de nossas news com promoções e novidades!
        </h2>
        <form className="newsletter-container__form">
          <input type="text" placeholder="Digite seu nome" />
          <input type="text" placeholder="Digite seu email" />
          <button type="submit">Eu quero!</button>
        </form>
      </div>
    </div>
  );
};
