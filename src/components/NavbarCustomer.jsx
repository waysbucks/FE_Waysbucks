import Logo from "../assets/Group.svg";
import Cart from "../assets/Vector.svg";
import { useState } from "react";
export default function NavbarCustomer() {
  const [isLogin, setLogin] = useState(false);
  return (
    <nav>
      <div>
        <img src={Logo} alt="Logo" className="navbarLogo" />
      </div>
      {isLogin ? (
        <div>
          <button className="btnNavbar login">Login</button>
          <button className="btnNavbar register">Register</button>
        </div>
      ) : (
        <div>
          <img src={Cart} alt="cart" />
        </div>
      )}
    </nav>
  );
}
