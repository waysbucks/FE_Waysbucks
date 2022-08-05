import React from "react";
import Navbar from "../components/navbar/navbar";
import cartModules from "../styles/cart.module.css";
import cart_pitc from "../assets/cart_pt.png";
// image

import trash from "../assets/trash.svg";

export default function CartPage() {
  return (
    <div>
      <section>
        <div className={cartModules.container}>
          <p>My Cart</p>
          <p1>Review Your Order</p1>
          <div className={cartModules.wrap}>
            <div className={cartModules.left}>
              <span>
                <img src={cart_pitc} />
              </span>
              <div className={cartModules.con_wrap}>
                <span className={cartModules.tex_left}>
                  <p>Ice Cofee Palm Sugar</p>
                  <p1>Rp33.000</p1>
                </span>
                <span className={cartModules.tex_left1}>
                  <p>
                    Toping :<p1> Bill Berry Boba,Buble Tea Gelatin</p1>
                  </p>
                  <img src={trash} />
                </span>
              </div>
            </div>
            <div className={cartModules.right}>
              <div className={cartModules.rightline}>
                <span>
                  <p>Subtotal</p>
                  <p>Rp.69.000</p>
                </span>
                <span>
                  <p>Qty</p>
                  <p>2</p>
                </span>
              </div>
              <span className={cartModules.price}>
                <p>Total</p>
                <p>Rp.69.000</p>
              </span>
              <div className={cartModules.btn_grp}>
                <button>Pay</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
