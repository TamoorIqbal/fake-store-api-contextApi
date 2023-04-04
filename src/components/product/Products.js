import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { GlobalContext } from "../../context/GlobalState";
import "./Products.css";
import Slider from "./Slider";
import Timer from "./Timer";
const Products = () => {
  const navigate = useNavigate();

  const { productData } = useContext(GlobalContext);
  const clickHandler = (product) => {
    navigate(`/productDetails/${product.id}?discount=${product.discount}`);
  };

  return (
    <>
      <div className="container text-center">
        <h1>Fake Store Api</h1>
        <Slider />
        <Timer />

        {/* <span>
          Create With <i className="zmdi zmdi-favorite red" ></i> By:{" "}
          <strong>Deni Kurniawan</strong> From:{" "}
          <i>
            <a href="http://blog.wingerdstok.com" className="wsk-btn">
              Wingerdstok
            </a>
          </i>
        </span> */}
      </div>

      <div className="shell">
        <div className="container">
          <div className="row">
            {productData &&
              productData.map((product, index) => {
                return (
                  <div key={index} className="col-md-3">
                    <p className="timer">{/* <Timer /> */}</p>
                    <div
                      className="wsk-cp-product"
                      onClick={() => clickHandler(product)}
                    >
                      <div className="wsk-cp-img">
                        <div className="product-label">
                          <span className="sticker top-right">
                            <span className="labelsale">
                              -{product.discount}%
                            </span>
                          </span>
                        </div>
                        <img
                          src={product.image}
                          alt="Product"
                          className="img-responsive"
                        />
                      </div>
                      <div className="wsk-cp-text">
                        <div className="category">
                          <span>{product.category}</span>
                        </div>
                        <div className="title-product">
                          <h3>{product.title}</h3>
                        </div>
                        <div className="description-prod">
                          <p>{product.description}</p>
                        </div>
                        <div className="card-footer">
                          <div className="wcf-left">
                            <span className="price">
                              Rs{" "}
                              {(
                                product.price *
                                (1 - product.discount / 100)
                              ).toFixed(2)}
                            </span>
                          </div>
                          <div className="wcf-right">
                            <span
                              style={{
                                color: "#888888",
                                textDecoration: "line-through",
                              }}
                              className="price"
                            >
                              Rs {product.price}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>

          {/* {productData &&
            productData.map((product) => {
              return (
                <div className="row">
                  <div className="col-md-6">
                    <div className="wsk-cp-product">
                      <div className="wsk-cp-img">
                        <img
                          src={product.image}
                          alt="Product"
                          className="img-responsive"
                        />
                      </div>
                      <div className="wsk-cp-text">
                        <div className="category">
                          <span>Ethnic</span>
                        </div>
                        <div className="title-product">
                          <h3>My face not my heart</h3>
                        </div>
                        <div className="description-prod">
                          <p>
                            Description Product tell me how to change playlist
                            height size like 600px in html5 player. player good
                            work now check this link
                          </p>
                        </div>
                        <div className="card-footer">
                          <div className="wcf-left">
                            <span className="price">Rp500.000</span>
                          </div>
                          <div className="wcf-right">
                            <a href="#" className="buy-btn">
                              <i className="zmdi zmdi-shopping-basket"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="wsk-cp-product">
                      <div className="wsk-cp-img">
                        <img
                          src={product.image}
                          alt="Product"
                          className="img-responsive"
                        />
                      </div>
                      <div className="wsk-cp-text">
                        <div className="category">
                          <span>Introvert</span>
                        </div>
                        <div className="title-product">
                          <h3>My face not my heart</h3>
                        </div>
                        <div className="description-prod">
                          <p>
                            Description Product tell me how to change playlist
                            height size like 600px in html5 player. player good
                            work now check this link
                          </p>
                        </div>
                        <div className="card-footer">
                          <div className="wcf-left">
                            <span className="price">Rp500.000</span>
                          </div>
                          <div className="wcf-right">
                            <a href="#" className="buy-btn">
                              <i className="zmdi zmdi-shopping-basket"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="wsk-cp-product">
                      <div className="wsk-cp-img">
                        <img
                          src={product.image}
                          alt="Product"
                          className="img-responsive"
                        />
                      </div>
                      <div className="wsk-cp-text">
                        <div className="category">
                          <span>Beauty</span>
                        </div>
                        <div className="title-product">
                          <h3>My face not my heart</h3>
                        </div>
                        <div className="description-prod">
                          <p>
                            Description Product tell me how to change playlist
                            height size like 600px in html5 player. player good
                            work now check this link
                          </p>
                        </div>
                        <div className="card-footer">
                          <div className="wcf-left">
                            <span className="price">Rp500.000</span>
                          </div>
                          <div className="wcf-right">
                            <a href="#" className="buy-btn">
                              <i className="zmdi zmdi-shopping-basket"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="wsk-cp-product">
                      <div className="wsk-cp-img">
                        <img
                          src={product.image}
                          alt="Product"
                          className="img-responsive"
                        />
                      </div>
                      <div className="wsk-cp-text">
                        <div className="category">
                          <span>Drama</span>
                        </div>
                        <div className="title-product">
                          <h3>My face not my heart cvf ggf gfg g</h3>
                        </div>
                        <div className="description-prod">
                          <p>
                            Description Product tell me how to change playlist
                            height size like 600px in html5 player. player good
                            work now check this link
                          </p>
                        </div>
                        <div className="card-footer">
                          <div className="wcf-left">
                            <span className="price">Rp500.000</span>
                          </div>
                          <div className="wcf-right">
                            <a href="#" className="buy-btn">
                              <i className="zmdi zmdi-shopping-basket"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}  */}
        </div>
      </div>
      <button
        className="add-product-button"
        onClick={() => navigate(`/addProduct`)}
      >
        +
      </button>
    </>
  );
};

export default Products;
