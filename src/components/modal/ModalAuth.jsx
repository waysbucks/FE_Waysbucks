import React, { useState } from "react";
import { Modal } from "react-bootstrap";

export default function ModalAuth() {
  // modal-check
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const [shows, setShows] = useState(false);
  const handleShows = () => setShows(true);
  const handleCloses = () => setShows(false);

  const handleSwitchRegister = () => {
    setShow(false);
    setShows(true);
  };

  const handleSwitchLogin = () => {
    setShows(false);
    setShow(true);
  };
  // /modal-check

  // functional
  const [login, setLogin] = useState({});

  const handleChange = (e) => {
    setLogin({
      ...login,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    try {
      e.prevent.default();
    } catch (error) {
      console.log("error");
    }
  };
  //  /fuctuional
  return (
    <>
      <>
        <button className="btnNavbar login" onClick={handleShow}>
          Login
        </button>
        <Modal show={show} onHide={handleClose}>
          <form onSubmit={(e) => handleSubmit}>
            <div className="authContainer">
              <h1 className="authTitle">Login</h1>
              <input
                type="email"
                className="inputAuth p-2"
                placeholder="Email"
                name="email"
                onChange={handleChange}
              />
              <input
                type="password"
                className="inputAuth p-2"
                placeholder="Password"
                name="password"
                onChange={handleChange}
              />
              <button className="btnAuth">Login</button>
              <p className="toRegist">
                Don't have an account ? Click{" "}
                <strong onClick={handleSwitchRegister}>Here</strong>
              </p>
            </div>
          </form>
        </Modal>
      </>

      <>
        <button className="btnNavbar register" onClick={handleShows}>
          Register
        </button>
        <Modal show={shows} onHide={handleCloses} id="modalRegister">
          <form>
            <div className="authContainer">
              <h1 className="authTitle">Register</h1>
              <input
                type="text"
                className="inputAuth p-2"
                placeholder="Email"
              />
              <input
                type="text"
                className="inputAuth p-2"
                placeholder="Password"
              />
              <input
                type="text"
                className="inputAuth p-2"
                placeholder="Full Name"
              />
              <button className="btnAuth">Register</button>
              <p className="toRegist">
                Already have an account ? Click{" "}
                <strong onClick={handleSwitchLogin}>Here</strong>
              </p>
            </div>
          </form>
        </Modal>
      </>
    </>
  );
}
