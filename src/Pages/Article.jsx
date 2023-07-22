import React from "react";
import { Link } from "react-router-dom";
import gigi from "../image/gigi.jpg";
const Article = () => {
  return (
    <div className="container conatiner-article ">
      <div className="mb-3">
        <form action="" className="form-search ">
          <input type="text" placeholder="search" />
        </form>
      </div>
      <div className="row">
        <div className="col-lg-9">
          <div className="row row-gap-3">
            <div className="col-md-6 ">
              <div className="container-blog ">
                <div className="container-image-blog">
                  <img src={gigi} alt="" />
                </div>
                <div className="container-text-blog">
                  <h1>Gigi putih bersih </h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Aut ea minus quisquam animi aperiam a,
                  </p>
                  <div className="container-link-blog">
                    <Link to="" className="link-blog">
                      baca selengkapnya
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="container-blog ">
                <div className="container-image-blog">
                  <img src={gigi} alt="" />
                </div>
                <div className="container-text-blog">
                  <h1>Gigi putih bersih </h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Aut ea minus quisquam animi aperiam a,
                  </p>
                  <div className="container-link-blog">
                    <Link to="" className="link-blog">
                      baca selengkapnya
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="container-blog ">
                <div className="container-image-blog">
                  <img src={gigi} alt="" />
                </div>
                <div className="container-text-blog">
                  <h1>Gigi putih bersih </h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Aut ea minus quisquam animi aperiam a,
                  </p>
                  <div className="container-link-blog">
                    <Link to="" className="link-blog">
                      baca selengkapnya
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="container-blog ">
                <div className="container-image-blog">
                  <img src={gigi} alt="" />
                </div>
                <div className="container-text-blog">
                  <h1>Gigi putih bersih </h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Aut ea minus quisquam animi aperiam a,
                  </p>
                  <div className="container-link-blog">
                    <Link to="" className="link-blog">
                      baca selengkapnya
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="container-blog ">
                <div className="container-image-blog">
                  <img src={gigi} alt="" />
                </div>
                <div className="container-text-blog">
                  <h1>Gigi putih bersih </h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Aut ea minus quisquam animi aperiam a,
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

        <div className="col-lg-3 popular">
          <h1>Popular Post</h1>
        </div>
      </div>
    </div>
  );
};

export default Article;
