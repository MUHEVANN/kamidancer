import React from "react";
import { BiLeaf, BiTimeFive } from "react-icons/bi";
const Adventage = () => {
  return (
    <div className="container  my-5" id="adventage">
      <div className="row adventage__container">
        <div className="col-lg-5 col-12 ">
          <h2 className=" blog-title" style={{ textAlign: "start" }}>
            Kamidancer
          </h2>
          <p className="adventage__desc">
            singkatan dari kata Kakao, UMI (Universitas Muslim Indonesia) dan
            denture cleanser yang artinya pembersih gigi tiruan. Nama Kamidancer
            terinspirasi dari kata dancer yang artinya “menari”, sesuai dengan
            kegunaan produk kami, “menari membersihkan seluruh plak, bakteri,
            dan jamur pada gigi tiruan Anda”.
          </p>
        </div>
        <div className="col-lg-6">
          <div className="row tes">
            <div className="col-lg-6 col-12 col-sm-6 ">
              <div className="leaf__container">
                <div>
                  <BiLeaf className="leaf daun" />
                </div>
                <p className="leaf__desc">
                  Produk pembersih gigi tiruan yang tidak menggunakan bahan
                  dasar kimiawi (khlorhexidin)
                </p>
              </div>
            </div>
            <div className="col-lg-6  col-12 col-sm-6 ">
              <div className="leaf__container">
                <BiTimeFive className="leaf jam" />
                <p className="leaf__desc">
                  Kemampuan membersihkan (granulasi) mencapai 7 menit disbanding
                  lainnya (3 menit)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Adventage;
