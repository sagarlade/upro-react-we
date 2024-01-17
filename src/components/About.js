import React from "react";
import "./Main.css";
import { Container, Row, Col } from "react-bootstrap";
import AboutImg from "../image/ABout-im.png";
import Background from '../image/about.png';
const About = () => {
  return (
    <>
      <div className="about-se">
        <img src={Background} alt="img" className="back-img"/>
        <Container className="about-he">
          <Row>
            <Col className="col-lg-5 col-sm-6">
              <div className="about-rightside">
                <img src={AboutImg} alt="About img" className="" />
              </div>
            </Col>
            <Col className="col-lg-6 col-sm-6">
              <div className="about-leftside">
                <h1 className="title-about">
                  Your Gateway to Unrestricted Financial Freedom
                </h1>
                <p className="ab-info">
                  At Ultrapro, our belief is simple yet profound: everyone
                  deserves the freedom to earn, hold, spend, share, and give
                  their money—regardless of their background or origin. We're
                  not just a cryptocurrency platform; we're the epitome of
                  trust, providing you with a seamless journey towards
                  unrestricted financial empowerment.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default About;
