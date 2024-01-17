// import React from "react";
// import "./Main.css";
// import upro from "../image/upro.png"
// const PaymentGateway = () => {
//   return (
//     <>
//       <div className="contact">
//         <div className="cont-l">
//           <div className="c-text">
//             <h1>Payment Gateway</h1>
//             <p>
//               Accept UPRO for your products, redefining convenience. Merchant
//               Payment API launching soon for secure and lightning-fast
//               transactions!
//             </p>
//           </div>
//           <div className="svg">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="847"
//               height="256"
//               viewBox="0 0 847 256"
//               fill="none"
//             >
//               <defs>
//                 <clipPath id="clip-path">
//                   <rect width="847" height="256" fill="white" />
//                 </clipPath>
//               </defs>
//               <g clip-path="url(#clip-path)">
//                 <path
//                   d="M847 0V233.329L801.464 256H0V22.5684L45.7779 0H847Z"
//                   fill="white"
//                   fill-opacity="0.05"
//                 />
//                 <path
//                   d="M846.5 0.5V233.02L801.347 255.5H0.5V22.8794L45.8945 0.5H846.5Z"
//                   stroke="url(#paint0_linear_69_1141)"
//                   stroke-opacity="0.5"
//                 />
//                 <path
//                   d="M846.5 0.5V233.02L801.347 255.5H0.5V22.8794L45.8945 0.5H846.5Z"
//                   stroke="url(#paint1_linear_69_1141)"
//                   stroke-opacity="0.5"
//                 />
//               </g>
//               <defs>
//                 <linearGradient
//                   id="paint0_linear_69_1141"
//                   x1="-8.21771"
//                   y1="-30.9048"
//                   x2="229.263"
//                   y2="123.925"
//                   gradientUnits="userSpaceOnUse"
//                 >
//                   <stop stop-color="white" />
//                   <stop offset="1" stop-color="white" stop-opacity="0" />
//                 </linearGradient>
//                 <linearGradient
//                   id="paint1_linear_69_1141"
//                   x1="418.759"
//                   y1="316.694"
//                   x2="291.12"
//                   y2="253.921"
//                   gradientUnits="userSpaceOnUse"
//                 >
//                   <stop offset="0.171875" stop-color="white" />
//                   <stop offset="1" stop-color="white" stop-opacity="0" />
//                 </linearGradient>
//               </defs>
//             </svg>
//           </div>
//         </div>
//         <div className="cont-r">
//           <img src={upro} alt="payment"/>
//         </div>
//       </div>
//     </>
//   );
// };

// export default PaymentGateway;
import React from "react";
import "./Main.css";
import upro from "../image/upro.png";

const PaymentGateway = () => {
  return (
    <>
      <div className="contact">
        <div className="cont-l">
          <div className="c-text">
            <h1>Payment Gateway</h1>
            <p>
              Accept UPRO for your products, redefining convenience. Merchant
              Payment API launching soon for secure and lightning-fast
              transactions!
            </p>
          </div>
          <div className="svg">
          <svg
              xmlns="http://www.w3.org/2000/svg"
              width="847"
              height="256"
              viewBox="0 0 847 256"
              fill="none"
            >
              <defs>
                <clipPath id="clip-path">
                  <rect width="847" height="256" fill="white" />
                </clipPath>
              </defs>
              <g clip-path="url(#clip-path)">
                <path
                  d="M847 0V233.329L801.464 256H0V22.5684L45.7779 0H847Z"
                  fill="white"
                  fill-opacity="0.05"
                />
                <path
                  d="M846.5 0.5V233.02L801.347 255.5H0.5V22.8794L45.8945 0.5H846.5Z"
                  stroke="url(#paint0_linear_69_1141)"
                  stroke-opacity="0.5"
                />
                <path
                  d="M846.5 0.5V233.02L801.347 255.5H0.5V22.8794L45.8945 0.5H846.5Z"
                  stroke="url(#paint1_linear_69_1141)"
                  stroke-opacity="0.5"
                />
              </g>
              <defs>
                <linearGradient
                  id="paint0_linear_69_1141"
                  x1="-8.21771"
                  y1="-30.9048"
                  x2="229.263"
                  y2="123.925"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="white" />
                  <stop offset="1" stop-color="white" stop-opacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_69_1141"
                  x1="418.759"
                  y1="316.694"
                  x2="291.12"
                  y2="253.921"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.171875" stop-color="white" />
                  <stop offset="1" stop-color="white" stop-opacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
        <div className="cont-r">
          <img src={upro} alt="payment" />
        </div>
      </div>
    </>
  );
};

export default PaymentGateway;
