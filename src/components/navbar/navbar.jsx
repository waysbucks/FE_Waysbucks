import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

import Dropdown from "./dropdown/dropdown";
import ModalAuth from "../modal/ModalAuth";

import Logo from "../../assets/Logo.svg";
import Cart from "../../assets/Vector.svg";

export default function Navbar({ counter }) {
  const [state] = useContext(UserContext);
  const isLogin = state.isLogin;

  return (
    <nav>
      <div>
        <Link to={"/"}>
          <img src={Logo} alt="Logo" className="navbarLogo" />
        </Link>
      </div>
      {isLogin ? (
        <div className="navbarRight">
          <div
            className={
              counter === undefined
                ? "d-none"
                : counter === 0
                ? "d-none"
                : "circle"
            }
          >
            {counter}
          </div>
          <Link to={"/cart"}>
            <img
              src={Cart}
              alt="cart"
              className={
                state.user.status === "customer" ? "navbarCart" : "d-none"
              }
            />
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
