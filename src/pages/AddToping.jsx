// dependencies
import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

// component
import Navbar from "../components/navbar/navbar";

// file
import paperClip from "../assets/paperClip.png";

export default function AddToping() {
  const [product, setProduct] = useState({});
  const [preview, setPreview] = useState(null);
  const [previewName, setPreviewName] = useState("");
  console.log(previewName);

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });

    console.log(e.target.files);
    if (e.target.type === "file") {
      let url = URL.createObjectURL(e.target.files[0]);
      setPreview(url);
      setPreviewName(e.target.files[0].name);
    }
  };

  let navigate = useNavigate();

  const handleSubmit = (e) => {
    e.prevent.default();
    navigate("/transaction");
  };
  return (
    <>
      <Navbar />
      <Container className="addProductContainer">
        <div className="addProductLeft">
          <form onSubmit={handleSubmit}>
            <h1>Toping</h1>
            <input
              type="text"
              placeholder="Name Toping"
              name="topingName"
              onChange={handleChange}
            />
            <input
              type="number"
              placeholder="Price"
              name="topingPrice"
              onChange={handleChange}
            />
            <input
              type="file"
              id="addProductImage"
              hidden
              name="topingImg"
              onChange={handleChange}
            />
            <label
              htmlFor="addProductImage"
              className={previewName === "" ? "addProductImage" : "previewName"}
            >
              {previewName === "" ? "Photo Toping" : previewName}
              <img src={paperClip} alt="paperClip" />
            </label>
            <button>Add Toping</button>
          </form>
        </div>
        {preview && (
          <div className="addProductRight">
            <img src={preview} alt="preview" />
          </div>
        )}
      </Container>
    </>
  );
}
