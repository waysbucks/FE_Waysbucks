import { useParams } from "react-router-dom";
import Rupiah from "rupiah-format";
import productModules from "../styles/product.module.css";

// main image
import checkToping from "../assets/checkToping.svg";
// topping

// dummyData
import dummyLandingPage from "../DataDummy/dummyLandingPage";
import dataToping from "../DataDummy/dummyTopping";
import { useState } from "react";
import Navbar from "../components/navbar/navbar";

export default function DetailProductPage() {
  const params = useParams();
  const data = dummyLandingPage[parseInt(params.id - 1)];

  // check
  const [show, setShow] = useState(false);

  const handleCheck = () => {
    if (show === false) {
      setShow(true);
    } else {
      setShow(false);
    }
  };
  // /check

  // toping
  const [toping, setToping] = useState([]);
  console.log(toping);
  const handleChange = (e) => {
    let updateToping = [...toping];
    if (e.target.checked) {
      updateToping = [...toping, e.target.value];
    } else {
      updateToping.splice(toping.indexOf(e.target.value));
    }
    setToping(updateToping);
  };
  // /toping

  // submit
  const [counter, setCounter] = useState(0);
  console.log(counter);
  const handleSubmit = (e) => {
    e.preventDefault();
    setCounter(counter + 1);
  };

  // submit

  // tambah price
  let resultTotal = toping.reduce((a, b) => {
    console.log(b);
    return a + parseInt(b);
  }, 0);

  console.log(resultTotal);
  // tambah price

  return (
    <>
      <Navbar counter={counter} />
      <div>
        <section>
          <div className={productModules.wrap}>
            <div className={productModules.left}>
              <img src={data.productImage} alt="oke" />
            </div>
            <div className={productModules.right}>
              <span className={productModules.name}>
                <p className={productModules.titleProduct}>
                  {data.productName}
                </p>
                <p className={productModules.priceBrown}>
                  {Rupiah.convert(data.price)}
                </p>
                <div className={productModules.topings}>
                  {dataToping?.map((item, index) => (
                    <div className={productModules.toping} key={index}>
                      <label
                        htmlFor={item.id}
                        className={productModules.checkContainer}
                      >
                        <input
                          type="checkbox"
                          id={item.id}
                          onChange={handleChange}
                          value={item.price}
                          name="toping"
                          className={productModules.testCheck}
                        />
                        <span></span>
                        <img
                          src={checkToping}
                          alt="check"
                          className={productModules.checkmark}
                        />
                        <img
                          src={item.image}
                          alt="1"
                          onClick={handleCheck}
                          className={productModules.imageToping}
                        />
                      </label>
                      <p>{item.name}</p>
                    </div>
                  ))}
                </div>
              </span>
              <div className={productModules.price}>
                <p>Total</p>
                <p>{Rupiah.convert(data.price + resultTotal)}</p>
              </div>
              <div className={productModules.btn_grp}>
                <button className={productModules.btn} onClick={handleSubmit}>
                  {" "}
                  Add Cart
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
