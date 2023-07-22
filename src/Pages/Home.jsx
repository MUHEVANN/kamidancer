import React, { useEffect, useState } from "react";
import Atas from "../components/Atas";
import Adventage from "../components/Adventage";
import Anggota from "../components/Anggota";
import OurBlog from "../components/OurBlog";
import line from "../image/line.png";
import { PiCaretUpBold } from "react-icons/pi";
import { Link } from "react-router-dom";

const Home = () => {
  const [isScroll, setIsScroll] = useState(false);
  useEffect(() => {
    const handlerScroll = () => {
      if (window.scrollY > 500) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };
    window.addEventListener("scroll", handlerScroll);
    return () => {
      window.removeEventListener("scroll", handlerScroll);
    };
  }, []);
  return (
    <div>
      <a href="#home" className={`to-top ${isScroll ? "d-block" : "d-none"}`}>
        <PiCaretUpBold className="icon-top" />
      </a>

      <Atas />
      <img src={line} alt="" className="line" />
      <Adventage />
      <Anggota />
      <OurBlog />
    </div>
  );
};

export default Home;
