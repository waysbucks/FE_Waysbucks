import { useState } from "react";
import { Link } from "react-router-dom";

import Dropdown from "./dropdown/dropdown";
import ModalAuth from "../modal/ModalAuth";

import Logo from "../../assets/Group.svg";
import Cart from "../../assets/Vector.svg";

export default function Navbar() {
  const [isLogin, setLogin] = useState(false);

  return (
    <nav>
      <div>
        <Link to={"/"}>
          <img src={Logo} alt="Logo" className="navbarLogo" />
        </Link>
      </div>
      {isLogin ? (
        <div className="navbarRight">
          <Link to={"/add-cart"}>
            <img src={Cart} alt="cart" className="navbarCart" />
          </Link>
          <Dropdown />
        </div>
      ) : (
        <div className="navbarLeft">
          <ModalAuth />
        </div>
      )}
    </nav>
  );
}
