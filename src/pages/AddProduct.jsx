import React from "react";
import { Container } from "react-bootstrap";

import Coffee from "../assets/coffee.jpg";
import paperClip from "../assets/paperClip.png";

export default function AddProduct() {
  return (
    <Container className="addProductContainer">
      <div className="addProductLeft">
        <form>
          <h1>Product</h1>
          <input type="text" placeholder="Name Product" />
          <input type="number" placeholder="Price" />
          <input type="file" id="addProductImage" hidden />
          <label htmlFor="addProductImage" className="addProductImage">
            Photo Product
            <img src={paperClip} alt="paperClip" />
          </label>
          <button>Add Product</button>
        </form>
      </div>
      <div className="addProductRight">
        <img src={Coffee} alt="preview" />
      </div>
    </Container>
  );
}
