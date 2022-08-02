import { useState } from "react";
import { Link } from "react-router-dom";

import Dropdown from "./dropdown/dropdown";
import Login from "./auth/Login";
import Register from "./auth/Register";

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
        <div className="navbarLeft">
          <Login />
          <Register />
        </div>
      ) : (
        <div className="navbarRight">
          <img src={Cart} alt="cart" className="navbarCart" />
          <Dropdown />
        </div>
      )}
    </nav>
  );
}
