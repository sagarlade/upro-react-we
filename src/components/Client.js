import React from "react";
import "./Main.css";
import WhyUs from "./WhyUs";
import Service from "./Service";
import Product from "./Product";
import PaymentGateway from "./Contact";
import About from "./About";
const Client = () => {
  const statsData = [
    {
      title: "36+",
      description: "Countries",
    },
    {
      title: "20000+",
      description: "Transactions / Sec",
    },
    {
      title: "1M+",
      description: "Trade per Day",
    },
  ];

  return (
    <>
      <div className="country-stats">
        <div className="container">
          <div className="row">
            {statsData.map((data, index) => (
              <div className="col-md-4" key={index}>
                <div className="stat-item">
                  <h3 className="stat-title">{data.title}</h3>
                  <p className="stat-description">{data.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="about-se-1">
      <About/>
      </div>
      <div>
        <WhyUs />
      </div>
      <div>
        <Service />
      </div>
      <div>
        <Product />
        <PaymentGateway />
      </div>
    </>
  );
};

export default Client;
