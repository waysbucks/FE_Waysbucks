import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import Register from "./Register";

export default function Login() {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const [shows, setShows] = useState(false);

  const handleTest = () => {
    setShow(false);
    setShows(true);
  };
  return (
    <>
      <button className="btnNavbar login" onClick={handleShow}>
        Login
      </button>
      <Modal show={show} onHide={handleClose}>
        <form>
          <div className="authContainer">
            <h1 className="authTitle">Login</h1>
            <input type="text" className="inputAuth" placeholder="Email" />
            <input type="text" className="inputAuth" placeholder="Password" />
            <button className="btnAuth">Login</button>
            <p className="toRegist">
              Don't have an account ? Click{" "}
              <strong onClick={handleTest}>Here</strong>
            </p>
          </div>
        </form>
      </Modal>
    </>
  );
}
