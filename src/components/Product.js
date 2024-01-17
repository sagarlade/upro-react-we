import React from "react";
import "./Main.css";

const Product = () => {
  return (
    <>
      <div className="pr-ec">
        <h1 className="eco">Ecosystem</h1>
        <div className="product-h container">
          <div class="row">
            <div class="col-sm-4 mb-3 mb-sm-0">
              <div class="pr">
                <div class="pr-body">
                  <h2 class="pr-title">Probinar</h2>
                  <p class="pr-text">
                    Proud pioneers in blockchain education, Probinar delivers
                    cutting-edge courses that transform individuals into experts
                    in blockchain, cryptocurrencies, and decentralized
                    applications.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="pr">
                <div class="pr-body">
                  <h2 class="pr-title">Stake UPRO</h2>
                  <p class="pr-text">
                    Stake UPRO is your key to establishing a solid financial
                    foundation. Whether you're a staking novice or a seasoned
                    pro, we have custom plans just for you.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="pr">
                <div class="pr-body">
                  <h2 class="pr-title">UPRO Bazaar</h2>
                  <p class="pr-text">
                    Your Key to a Shopping Wonderland: Uprobazzar.com is not
                    just a platform; it's your passport to a world of shopping
                    delights. Experience the ease of shopping with UPRO today!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
