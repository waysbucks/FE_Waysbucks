import cssModules from "../styles/home.module.css";
import landing_2 from "../assets/land.2.png";
import pitc from "../assets/Rectangle 1.png";
import { Card } from "react-bootstrap";

export default function LandingPage() {
  return (
    <div>
      <section>
        <div className={cssModules.landing_page}>
          <div className={cssModules.reactangle}>
            <div className={cssModules.text_inside}>
              <h3>WAYSBUCKS</h3>
              <span>
                <p>
                  Things are changing, but we're still here for you <br />
                </p>
                <br />
                <p>
                  We have temporarily closed our in-store cafes, but select{" "}
                  <br />
                  grocery and drive-thru location remaining open.
                  <br />
                  <strong>Waysbucks</strong> Driver is also available <br />
                  <br />
                  let's Orderr...
                </p>
              </span>
            </div>
            <div>
              <img className={cssModules.pitc} src={landing_2} alt="ok" />
            </div>
          </div>
        </div>
      </section>
      {/* <hr /> */}
      <section>
        <div className={cssModules.landofdown}>
          <span className={cssModules.textofdown}>
            <p>Let's Order</p>
          </span>
          <>
            <div className={cssModules.card}>
              <Card className={cssModules.card2} style={{ width: "18rem" }}>
                <Card.Img variant="top" src={pitc} />
                <Card.Body>
                  <Card.Text className={cssModules.text1}>
                    Ice Coffee Palm Sugar
                  </Card.Text>
                  <Card.Text className={cssModules.text2}>Rp27.000</Card.Text>
                </Card.Body>
              </Card>
            </div>
          </>
        </div>
      </section>
    </div>
  );
}
