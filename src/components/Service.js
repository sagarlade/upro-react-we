import React from "react";
import "./Main.css";
import { Link } from "react-router-dom";

const Service = () => {
  const svgStyle = {
    backgroundImage: `url("data:image/svg+xml,${encodeURIComponent(
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 705 292" fill="none">
        <g filter="url(#filter0_b_69_996)">
          <path d="M705 0.0283813V265.284L667.098 291.056H0V25.6848L38.1032 0.0283813H705Z" fill="white" fill-opacity="0.05"/>
          <path d="M704.5 0.528381V265.019L666.944 290.556H0.5V25.9509L38.2559 0.528381H704.5Z" stroke="url(#paint0_linear_69_996)" stroke-opacity="0.5"/>
          <path d="M704.5 0.528381V265.019L666.944 290.556H0.5V25.9509L38.2559 0.528381H704.5Z" stroke="url(#paint1_linear_69_996)" stroke-opacity="0.5"/>
        </g>
        <defs>
          <filter id="filter0_b_69_996" x="-25" y="-24.9716" width="900" height="641.028" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feGaussianBlur in="BackgroundImageFix" stdDeviation="12.5"/>
            <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_69_996"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_69_996" result="shape"/>
          </filter>
          <linearGradient id="paint0_linear_69_996" x1="-6.84001" y1="-35.105" x2="222.573" y2="74.4057" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="white" stop-opacity="0"/>
          </linearGradient>
          <linearGradient id="paint1_linear_69_996" x1="348.554" y1="360.056" x2="231.761" y2="318" gradientUnits="userSpaceOnUse">
            <stop offset="0.171875" stop-color="white"/>
            <stop offset="1" stop-color="white" stop-opacity="0"/>
          </linearGradient>
        </defs>
      </svg>`
    )}")`,
    backgroundSize: "cover",
    width: "100%",
    height: "30vh",
  };

  return (
    <>
      <div className="service">
        <div className="container">
          <div className="se-title">
            <h1 className="text-center my-5">Solution</h1>
          </div>
          <div className="row">
            <div className="col-sm-6 mb-3 mb-sm-0 col-lg-6">
              <div className="box box-1" style={svgStyle}>
                <div className="box-body">
                  <div className="box-info">
                    <h1 className="box-title">DEFI</h1>
                    <div className="outer-ru lds-dual-ring">
                      <div className="in-ru">1</div>
                    </div>
                  </div>
                  <h5 className="sub-title">
                    Eenaswap.finance:Revolutionizing DeFi
                  </h5>
                  <p className="box-text">
                    Unlock the future of decentralized finance with Eenaswap.
                    Discover innovative solutions for seamless, secure, and
                    rewarding decentralized financial experiences.
                  </p>
                  <Link to="#" className="btn se-le">
                    EXPLORE MORE{" "}
                    <i class="fa-solid fa-arrow-up-right-from-square"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-sm-6 mb-3 mb-sm-0 col-lg-6">
              <div className="box box-1" style={svgStyle}>
                <div className="box-body">
                  <div className="box-info">
                    <h1 className="box-title">P2P</h1>
                    <div className="outer-ru lds-dual-ring">
                      <div className="in-ru">2</div>
                    </div>
                  </div>
                  <h5 className="sub-title">Your Crypto Marketplace</h5>
                  <p className="box-text">
                    Buy and sell a variety of cryptos securely, faster, and
                    simpler at EenaP2P.trade. Experience uninterrupted
                    transactions like never before.
                  </p>
                  <Link to="#" className="btn se-le">
                    EXPLORE MORE{" "}
                    <i class="fa-solid fa-arrow-up-right-from-square"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6 mb-3 mb-sm-0 col-lg-6">
              <div className="box box-2" style={svgStyle}>
                <div className="box-body">
                  <div className="box-info">
                    <h1 className="box-title">CANOPUS GTX WALLET</h1>
                    <div className="outer-ru lds-dual-ring">
                      <div className="in-ru">3</div>
                    </div>
                  </div>
                  <h5 className="sub-title">
                    Securely Store Your Digital Assets
                  </h5>
                  <p className="box-text">
                    Canopus GTX Wallet is your unique solution for safeguarding
                    digital assets like bitcoins. Unlike traditional wallets, it
                    stores only the private keys to your cryptocurrency.
                  </p>
                  <Link to="#" className="btn se-le">
                    EXPLORE MORE{" "}
                    <i class="fa-solid fa-arrow-up-right-from-square"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-sm-6 mb-3 mb-sm-0 col-lg-6">
              <div className="box box-2" style={svgStyle}>
                <div className="box-body">
                  <div className="box-info">
                    <h1 className="box-title">ULTRAPRO BRIDGE</h1>
                    <div className="outer-ru lds-dual-ring">
                      <div className="in-ru">4</div>
                    </div>
                  </div>
                  <h5 className="sub-title">
                    Securely Store Your Digital Assets
                  </h5>
                  <p className="box-text">
                    A cross-chain bridge, is like a highway connecting different
                    blockchain islands. It allows you to transfer your digital
                    assets (cryptocurrency, tokens, etc.)
                  </p>
                  <Link to="#" className="btn se-le">
                    COMMING SOON{" "}
                    <i class="fa-solid fa-arrow-up-right-from-square"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6 mb-3 mb-sm-0 col-lg-6">
              <div className="box box-3" style={svgStyle}>
                <div className="box-body">
                  <div className="box-info">
                    <h1 className="box-title">EXCHANGE</h1>
                    <div className="outer-ru lds-dual-ring">
                      <div className="in-ru">5</div>
                    </div>
                  </div>
                  <h5 className="sub-title">Ultrapro DEX Launching Soon</h5>
                  <p className="box-text">
                    Exciting news! Ultrapro Blockchain is gearing up to unveil a
                    cutting-edge Decentralized Exchange (DEX). Stay tuned for a
                    revolutionary leap into decentralized trading.
                  </p>
                  <Link to="#" className="btn se-le">
                    COMMING SOON{" "}
                    <i class="fa-solid fa-arrow-up-right-from-square"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-sm-6 mb-3 mb-sm-0 col-lg-6">
              <div className="box box-3" style={svgStyle}>
                <div className="box-body">
                  <div className="box-info">
                    <h1 className="box-title">NFT MARKETPLACE</h1>
                    <div className="outer-ru lds-dual-ring">
                      <div className="in-ru">6</div>
                    </div>
                  </div>
                  <h5 className="sub-title">
                    UPRO NFT: Explore Limitless Creativity
                  </h5>
                  <p className="box-text">
                    Dive into the world of UPRO NFT at upronft.com. Discover
                    unique digital assets, express your creativity, and be part
                    of a vibrant NFT community.
                  </p>
                  <Link to="#" className="btn se-le">
                    COMMING SOON{" "}
                    <i class="fa-solid fa-arrow-up-right-from-square"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
