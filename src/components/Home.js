import React from "react";
import "./Main.css";
import { Container, Row, Col } from "react-bootstrap";
import RightSideImg from "../image/rightside.png";
import Client from "./Client";
import About from "./About";
import WhyUs from "./WhyUs";
import Service from "./Service";
import Product from "./Product";
import PaymentGateway from "./Contact";
const Home = () => {
  return (
    <>
      <div className="home-se">
        <Container className="headers">
          <Row>
            <Col className="col-lg-6 col-sm-6">
              <div className="leftside">
                <h1 className="title-he">Pinnacle of Crypto Communities</h1>
                <p className="info">
                  Embark on a Financial Revolution with Ultrapro Blockchain.
                  Unleash the power of financial innovation and step into a
                  decentralized realm of boundless possibilities. Join the ranks
                  of millions worldwide who rely on Ultrapro Blockchain for its
                  unparalleled technology, expansive global footprint, and
                  unwavering commitment to pushing the boundaries of innovation.
                </p>
                <div className="btn-hm">
                  <button type="button" className="btn-contact mx-2">
                    Contact Us
                  </button>
                  <button type="button" className="btn-learn mx-2">
                    Learn More
                  </button>
                </div>
              </div>
            </Col>
            <Col className="col-lg-6 col-sm-6">
              <div className="rightside">
                <img src={RightSideImg} alt="head img" className="" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="CountryStats">
        <Client />
      </div>

    </>
  );
};

export default Home;
