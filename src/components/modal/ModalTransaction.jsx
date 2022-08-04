import React from "react";
import { Modal } from "react-bootstrap";
import QRCode from "react-qr-code";
import Logo from "../../assets/Group.svg";
import Coffee from "../../assets/coffee.jpg";

export default function ModalTransaction({ showTrans, close }) {
  console.log(close);
  return (
    <Modal show={showTrans} onHide={close} className="modal-transaction">
      <div className="profileCard">
        <div className="contentCardLeft">
          <div className="mapContent">
            <img src={Coffee} alt="coffee" />
            <ul>
              <li className="profileCardTitle">Capuchino</li>
              <li className="profileCardDate">
                <strong>Saturday</strong>,20 Oktober 2022
              </li>
              <li className="profileCardToping">
                <strong>Toping</strong> : Bobba
              </li>
              <li className="profileCardPrice">Price: Rp.20.000</li>
            </ul>
          </div>
          <div className="mapContent">
            <img src={Coffee} alt="coffee" />
            <ul>
              <li className="profileCardTitle">Ice Coffe Palm Sugar</li>
              <li className="profileCardDate">
                <strong>Saturday</strong>,20 Oktober 2022
              </li>
              <li className="profileCardToping">
                <strong>Toping</strong> : Bobba,Jelly,Coklat
              </li>
              <li className="profileCardPrice">Price: Rp.20.000</li>
            </ul>
          </div>
        </div>
        <div className="contentCardRight">
          <img src={Logo} alt="logo" />
          <QRCode value="test" bgColor="transparent" size={80} />
          <span>
            <p>On The Way</p>
          </span>
          <p className="profileSubTotal">Sub Total : Rp.69.000</p>
        </div>
      </div>
    </Modal>
  );
}
