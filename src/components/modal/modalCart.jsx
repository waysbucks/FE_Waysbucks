import React from "react";
import { Modal } from "react-bootstrap";

export default function ModalCart({ show, handleClose }) {
  return (
    <Modal show={show} onHide={handleClose}>
      modalCart
    </Modal>
  );
}
