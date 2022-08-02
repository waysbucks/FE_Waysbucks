import React, { useState } from "react";
import { Modal } from "react-bootstrap";

export default function Register() {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <>
      <button className="btnNavbar register" onClick={handleShow}>
        Register
      </button>
      <Modal show={show} onHide={handleClose}>
        <form>
          <div className="authContainer">
            <h1 className="authTitle">Register</h1>
            <input type="text" className="inputAuth" placeholder="Email" />
            <input type="text" className="inputAuth" placeholder="Password" />
            <input type="text" className="inputAuth" placeholder="Full Name" />
            <button className="btnAuth">Register</button>
            <p className="toRegist">
              Already have an account ? Click <strong>Here</strong>
            </p>
          </div>
        </form>
      </Modal>
    </>
  );
}
