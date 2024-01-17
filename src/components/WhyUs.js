import React from "react";
import Img from "../image/card-img.png";
function Card(props) {
  return (
    <>
      <div className="card">
        <img src={props.img} alt={props.title} className="card__img" />
        <div className="card__body">
          <h2 className="card__title">{props.title}</h2>
          <p className="card__description">{props.description}</p>
        </div>
      </div>
    </>
  );
}

function WhyUs() {
  return (
    <div className="wrapper">
      <Card
        className="box-1"
        img={Img}
        title="Vision"
        description="Powering a Prosperous Global Economy.
        Ultrapro envisions becoming the global currency, fueling a thriving global economy."
      />

      <Card
        className="card-2"
        img={Img}
        title="Mission"
        description="Driving Global Utility through Digital Innovation.
        Ultrapro is on a mission to be the global digital currency, fostering utility across the globe."
      />
      <Card
        className="card-3"
        img={Img}
        title="Values"
        description="Sustainability. Involvement. Transparency.
Our core values define us—committed to sustainability, active involvement, and unwavering transparency."
      />
      <Card
        className="card-4"
        img={Img}
        title="Security"
        description="Fortified Protection for Your Peace of Mind.
Ultrapro ensures unrivaled security with cutting-edge data encryption, secure access management, and state-of-the-art storage."
      />
    </div>
  );
}

export default WhyUs;
