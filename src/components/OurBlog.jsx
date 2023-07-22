import React from "react";
import gigi from "../image/gigi.jpg";
import { Link } from "react-router-dom";
const OurBlog = () => {
  return (
    <div className="container my-5 ">
      <div className="blog-text">
        <h2 className="blog-title">Artikel pilihan tentang kesehatan gigi</h2>
        <p className="blog-desc">
          Temukan artikel tentang kesehatan gigi dari kamidancer
        </p>
      </div>
      <div className="row  row-blog">
        {/* <div className="col-lg-4 col-sm-6">
          <div class="card" style={{ width: "100%" }}>
            <img
              src={gigi}
              class="card-img-top"
              style={{ height: "200px", objectFit: "cover" }}
              alt="..."
            />
            <div class="card-body">
              <h3 className="card-title">Gigi putih bersih bebas kuman</h3>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6">
          <div class="card" style={{ width: "100%" }}>
            <img
              src={gigi}
              class="card-img-top"
              style={{ height: "200px", objectFit: "cover" }}
              alt="..."
            />
            <div class="card-body">
              <h3 className="card-title">Gigi putih bersih bebas kuman</h3>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6">
          <div class="card">
            <img
              src={gigi}
              class="card-img-top"
              style={{ height: "200px", objectFit: "cover" }}
              alt="..."
            />
            <div class="card-body">
              <h3 className="card-title">Gigi putih bersih bebas kuman</h3>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div> */}

        <div className="col-lg-4 col-md-6 px-2">
          <div className="container-blog">
            <div className="container-image-blog">
              <img src={gigi} alt="" />
            </div>
            <div className="container-text-blog">
              <h1>Gigi putih bersih </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut ea
                minus quisquam animi aperiam a,
              </p>
              <div className="container-link-blog">
                <Link to="" className="link-blog">
                  baca selengkapnya
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 px-2">
          <div className="container-blog">
            <div className="container-image-blog">
              <img src={gigi} alt="" />
            </div>
            <div className="container-text-blog">
              <h1>Gigi putih bersih </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut ea
                minus quisquam animi aperiam a,
              </p>
              <div className="container-link-blog">
                <Link to="" className="link-blog">
                  baca selengkapnya
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="container-blog">
            <div className="container-image-blog">
              <img src={gigi} alt="" />
            </div>
            <div className="container-text-blog">
              <h1>Gigi putih bersih </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut ea
                minus quisquam animi aperiam a,
              </p>
              <div className="container-link-blog">
                <Link to="" className="link-blog">
                  baca selengkapnya
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurBlog;
