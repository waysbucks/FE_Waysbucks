import React, { useState } from "react";
import cartModules from "../styles/cart.module.css";
import productCart from "../DataDummy/dummyCart";
import Rupiah from "rupiah-format";
// image

import trash from "../assets/trash.svg";
import dummyTransaction from "../DataDummy/dummyTransaction";

import ModalCart from "../components/modal/modalCart";
import Navbar from "../components/navbar/navbar";

export default function CartPage() {
  let resultTotal = productCart.reduce((a, b) => {
    return a + b.price;
  }, 0);

  let handleRemove = () => {
    dummyTransaction.splice(0, 1);
  };

  const [showTrans, setShowTrans] = useState(false);
  const handleShow = () => setShowTrans(true);
  const handleClose = () => setShowTrans(false);
  return (
    <>
      <Navbar />
      <div className={cartModules.container}>
        <section>
          <p className={cartModules.titlePage}>My Cart</p>
          <p className={cartModules.subtitlePage}>Review Your Order</p>
          <div className={cartModules.wrap}>
            <div className={cartModules.wrap}>
              {/*  */}
              <div className={cartModules.left}>
                {productCart?.map((item, index) => (
                  <div className={cartModules.warpProduct} key={index}>
                    <img
                      src={item.image}
                      className={cartModules.imgProduct}
                      alt="cartimage"
                    />
                    <div className={cartModules.con_wrap}>
                      <span className={cartModules.tex_left}>
                        <p>{item.name}</p>
                        <p>{Rupiah.convert(item.price)}</p>
                      </span>
                      <span className={cartModules.tex_left1}>
                        <p>
                          Toping : <span> {item.toping.toString()}</span>
                        </p>
                        <img src={trash} onClick={handleRemove} alt="#" />
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className={cartModules.right}>
                <div className={cartModules.rightline}>
                  <span>
                    <p>Subtotal</p>
                    <p>{Rupiah.convert(resultTotal)}</p>
                  </span>
                  <span>
                    <p>Qty</p>
                    <p>{productCart.length}</p>
                  </span>
                </div>
                <span className={cartModules.price}>
                  <p>Total</p>
                  <p>{Rupiah.convert(resultTotal)}</p>
                </span>
                <div className={cartModules.btn_grp}>
                  <button onClick={handleShow}>Pay</button>
                </div>
              </div>
            </div>
          </div>
          <ModalCart showTrans={showTrans} close={handleClose} />
        </section>
      </div>
    </>
  );
}
