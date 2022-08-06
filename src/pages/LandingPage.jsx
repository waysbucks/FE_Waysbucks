import cssModules from "../styles/home.module.css";
import landing_2 from "../assets/land.2.png";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

//dummy
import dummyLandingPage from "../DataDummy/dummyLandingPage";

export default function LandingPage() {
  return (
    <div>
      <section>
        <div className={cssModules.landing_page}>
          <div className={cssModules.reactangle}>
            <span className={cssModules.text_inside}>
              <h3>WAYSBUCKS</h3>
              <span>
                <p className={cssModules.p1}>
                  Things are changing, but we're still here for you <br />
                </p>
                <br />
                <p>
                  We have temporarily closed our in-store cafes, but select{" "}
                  <br />
                  grocery and drive-thru location remaining open.
                  <br />
                  <strong className="cssModules.>">Waysbucks</strong> Driver is
                  also available <br />
                  <br />
                  let's Orderr...
                </p>
              </span>
            </span>
            <div>
              <img className={cssModules.pitc} src={landing_2} alt="ok" />
            </div>
          </div>
        </div>
      </section>
      {/* <hr /> */}
      <section>
        <span className={cssModules.textofdown}>
          <p>Let's Order</p>
        </span>
        <div className={cssModules.landofdown}>
          <>
            {dummyLandingPage?.map((item, index) => (
              <div className={cssModules.card3}>
                <Card className={cssModules.card2}>
                  <Link to="/detail-product">
                    <Card.Img variant="top" src={item.productImage} />
                  </Link>
                  <Card.Body>
                    <Card.Text className={cssModules.text1}>
                      {item.productName}
                    </Card.Text>
                    <Card.Text className={cssModules.text2}>
                      {item.price}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </>
        </div>
      </section>
    </div>
  );
}
