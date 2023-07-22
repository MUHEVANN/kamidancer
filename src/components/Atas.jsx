import React from "react";
import kamidancer from "../image/kamidancer2.png";
const Atas = () => {
  return (
    <div className="container" id="home">
      <div className="row home">
        <div className="col-lg-6 col-12 d-flex text__home">
          <div>
            <h1 className="title__home">
              <span style={{ color: "#f8a528" }}>KAMIDANCER</span>
              <br /> TRUST AND BELIEVE WITH US
            </h1>
            <p className="desc__home">
              Menghasilkan produk pembersih gigi tiruan yang lebih aman dan
              terjangkau
            </p>
          </div>
          <div>
            <button className=" btn__tes ">FOLLOW US FOR MORE</button>
          </div>
        </div>
        <div className="col-lg-6 col-12 img__container">
          <img src={kamidancer} alt="" className="img__home" />
        </div>
      </div>
    </div>
  );
};

export default Atas;
