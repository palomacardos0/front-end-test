import { useMediaQuery } from "react-responsive";

import Logo from "../../assets/svgs/logo.svg";
import Search from "../../assets/svgs/search.svg";
import User from "../../assets/svgs/user.svg";
import Cart from "../../assets/svgs/cart.svg";
import MenuIcon from "../../assets/svgs/menu.svg";
import "./styles.scss";
import { Minicart } from "../Minicart";
import { useState } from "react";
import { Menu } from "../Menu";

export const Header = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 1024px)" });

  const [openCart, setOpenCart] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <header className="header-container">
      {isMobile ? (
        <div className="header-container__wrapper">
          <div className="header-container__top">
            <button
              onClick={() => {
                setOpenMenu(!openMenu);
              }}
            >
              <img src={MenuIcon} alt="Menu" />
            </button>
            <a href="/" className="header-container__logo">
              <img src={Logo} alt="Logo Corebiz" />
            </a>
            <div className="header-container__cart">
              <button
                onClick={() => {
                  setOpenCart(!openCart);
                }}
              >
                <img src={Cart} alt="Carrinho" />
                <span>1</span>
              </button>
            </div>
          </div>
          <div className="header-container__search">
            <input type="text" placeholder="O que está procurando?" />
            <button>
              <img src={Search} alt="Buscar" />
            </button>
          </div>
          {openMenu ? <Menu /> : <></>}
        </div>
      ) : (
        <div className="header-container__wrapper">
          <a href="/">
            <img src={Logo} alt="Logo Corebiz" />
          </a>
          <div className="header-container__search">
            <input type="text" placeholder="O que está procurando?" />
            <button>
              <img src={Search} alt="Buscar" />
            </button>
          </div>

          <div className="header-container__cart">
            <a href="/account">
              <img src={User} alt="Ícone Usuário" />
              <span>Minha Conta</span>
            </a>
            <button
              onClick={() => {
                setOpenCart(!openCart);
              }}
            >
              <img src={Cart} alt="Carrinho" />
              <span>1</span>
            </button>
          </div>
        </div>
      )}
      {openCart ? <Minicart /> : <></>}
    </header>
  );
};
