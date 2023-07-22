import React from "react";
import Slider from "react-slick";
import ketua from "../image/ketua.png";
import pendamping from "../image/pendamping.png";
import anggota1 from "../image/anggota1.png";
import anggota2 from "../image/anggota2.png";
import anggota3 from "../image/anggota3.png";
import anggota4 from "../image/anggota4.png";

const Anggota = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="anggota">
      <div className="container ">
        <h2 className="blog-title ">Our Team</h2>
        <Slider {...settings}>
          <div className="p-2">
            <img src={ketua} alt="" className="image-slider" />
          </div>
          <div className="p-2">
            <img src={pendamping} alt="" className="image-slider" />
          </div>
          <div className="p-2">
            <img src={anggota1} alt="" className="image-slider" />
          </div>
          <div className="p-2">
            <img src={anggota2} alt="" className="image-slider" />
          </div>
          <div className="p-2">
            <img src={anggota3} alt="" className="image-slider" />
          </div>
          <div className="p-2">
            <img src={anggota4} alt="" className="image-slider" />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Anggota;
