import { Newsletter } from "../Newsletter";
import Email from "../../assets/svgs/email.svg";
import Headset from "../../assets/svgs/headset.svg";
import Logo from "../../assets/svgs/logo-white.svg";

import "./styles.scss";

export const Footer = () => {
  return (
    <footer className="footer-container">
      <Newsletter />
      <div className="footer-container__wrapper">
        <div className="footer-container__buttons">
          <a>
            <img src={Email} alt="Icon de Email" />
            ENTRE EM CONTATO
          </a>
          <a>
            <img src={Headset} alt="Icone de fone" />
            FALE COM O NOSSO CONSULTOR ONLINE
          </a>
        </div>
        <div className="footer-container__location">
          <h3>Localização</h3>
          <span className="footer-container__separator"></span>
          <p>Avenida Andrômeda, 2000. Bloco 6 e 8 - Alphavile SP</p>
          <p>brasil@corebiz.ag</p>
          <p>+55 11 3090 1039</p>
        </div>
        <div className="footer-container__created-by">
          <span>Created by</span> <img src={Logo}></img>
        </div>
      </div>
    </footer>
  );
};
