import Logo from "../../assets/logo.svg";
import Search from "../../assets/search.svg";
import User from "../../assets/user.svg";
import Cart from "../../assets/cart.svg";
import "./styles.scss";

export const Header = () => {
  return (
    <header className="header-container">
      <div className="header-container__wrapper">
        <a href="/">
          <img src={Logo} alt="Logo Corebiz" />
        </a>
        <div className="header-container__search">
          <input type="text" />
          <button>
            <img src={Search} alt="Buscar" />
          </button>
        </div>

        <div className="header-container__cart">
          <a href="/account">
            <img src={User} alt="Ícone Usuário" />
            <span>Minha Conta</span>
          </a>
          <button>
            <img src={Cart} alt="Carrinho" />
            <span>1</span>
          </button>
        </div>
      </div>
    </header>
  );
};
