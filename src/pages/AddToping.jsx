import React from "react";
import { Container } from "react-bootstrap";

import Coffee from "../assets/coffee.jpg";
import paperClip from "../assets/paperClip.png";

export default function AddToping() {
  return (
    <Container className="addProductContainer">
      <div className="addProductLeft">
        <h1>Toping</h1>
        <input type="text" placeholder="Name Toping" />
        <input type="number" placeholder="Price" />
        <input type="file" id="addProductImage" hidden />
        <label htmlFor="addProductImage" className="addProductImage">
          Photo Toping
          <img src={paperClip} alt="paperClip" />
        </label>
        <button>Add Toping</button>
      </div>
      <div className="addProductRight">
        <img src={Coffee} alt="preview" />
      </div>
    </Container>
  );
}
