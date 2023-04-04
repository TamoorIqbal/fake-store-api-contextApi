import React, { useContext, useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalState";
import "./Products.css";

const ProductDetails = () => {
  const { productData, deleteProduct, editProduct } = useContext(GlobalContext);
  const { id } = useParams();
  const navigate = useNavigate();
  const { search } = useLocation(); // get the value of the 'discount' query parameter

  // extract the 'discount' value from the search string
  const discount = new URLSearchParams(search).get("discount");

  const filteredProducts = productData?.find((product) => product.id == id);
  const [updateShow, setupdateShow] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    description: "",
    category: "",
    image: "",
  });

  // const handleInputChange = (event) => {
  //   const { name, value } = event.target;
  //   setFormData({ ...formData, [name]: value });
  // };

  const handleInputChange = (event) => {
    const { name, files } = event.target;

    if (files && files[0]) {
      const reader = new FileReader();

      reader.onload = (e) => {
        setFormData({ ...formData, [name]: e.target.result });
      };

      reader.readAsDataURL(files[0]);
    } else {
      setFormData({ ...formData, [name]: event.target.value });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setupdateShow(false);
    editProduct(formData);
    console.log("formData", formData);
  };
  const updatehandler = (product) => {
    setupdateShow(true);
    setFormData({
      id: product.id,
      image: product.image,
      title: product.title,
      price: product.price,
      description: product.description,
      category: product.category,
    });
  };
  const removehandler = (id) => {
    deleteProduct(id);
    navigate(`/`);
  };
  return (
    <>
      <div className="container text-center">
        <h1>Product Details</h1>
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
      {/* <div className="wcf-right"> */}
      <button
        className="btn"
        style={{ marginLeft: "5%" }}
        onClick={(e) => {
          e.preventDefault();
          navigate(`/`);
        }}
      >
        Back
      </button>
      {/* </div> */}
      {filteredProducts ? (
        <div className="shell">
          <div className="container">
            <div className="row1">
              <div className="col-md-6">
                <div className="wsk-cp-product">
                  <div className="wsk-cp-img">
                    <div className="product-label">
                      <span className="sticker top-right">
                        <span className="labelsale">-{discount}%</span>
                      </span>
                    </div>
                    <img
                      src={filteredProducts.image}
                      alt="Product"
                      className="img-responsive"
                    />
                  </div>
                  <div className="wsk-cp-text">
                    <div className="category">
                      <span>{filteredProducts.category}</span>
                    </div>
                    <div className="title-product">
                      <h3>{filteredProducts.title}</h3>
                    </div>
                    <div className="description-prod">
                      <p>
                        Description Product tell me how to change playlist
                        height
                        {filteredProducts.description}
                      </p>
                    </div>
                    <div className="card-footer">
                      <div className="wcf-left">
                        <span className="price">
                          Rs{" "}
                          {(
                            filteredProducts.price *
                            (1 - discount / 100)
                          ).toFixed(2)}
                        </span>
                      </div>

                      <div className="wcf-left">
                        <span
                          style={{
                            marginLeft: "20px",
                            color: "#888888",
                            textDecoration: "line-through",
                          }}
                          className="price"
                        >
                          Rs {filteredProducts.price}
                        </span>
                      </div>

                      <div className="wcf-right">
                        <button
                          className="btn"
                          style={{ margin: "0 5px" }}
                          onClick={() => updatehandler(filteredProducts)}
                        >
                          Update
                        </button>
                        <button
                          className="btn"
                          style={{ margin: "0 5px" }}
                          onClick={() => removehandler(filteredProducts.id)}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {updateShow ? (
                <div className="col-md-6">
                  <div className="wsk-cp-product">
                    <form onSubmit={handleSubmit}>
                      <div className="form-group">
                        <label htmlFor="title">Title</label>
                        <input
                          type="text"
                          name="title"
                          placeholder="Enter Title"
                          value={formData.title}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="price">Price</label>
                        <input
                          type="text"
                          name="price"
                          placeholder="Enter Price"
                          value={formData.price}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="description">Description</label>
                        <textarea
                          name="description"
                          placeholder="Enter description"
                          value={formData.description}
                          onChange={handleInputChange}
                          required
                        ></textarea>
                      </div>
                      <div className="form-group">
                        <label htmlFor="category">Category</label>
                        <input
                          type="text"
                          name="category"
                          placeholder="Enter Category"
                          value={formData.category}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="image">Image</label>
                        {/* <input
                      type="text"
                      name="image"
                      placeholder="Enter Image URL"
                      value={formData.image}
                      onChange={handleInputChange}
                      required
                    /> */}

                        <input
                          type="file"
                          name="image"
                          id="image"
                          accept="image/*"
                          onChange={handleInputChange}
                        />
                        {formData.image && (
                          <img
                            src={formData.image}
                            alt="Image preview"
                            className="img-responsive"
                          />
                        )}
                      </div>

                      <button type="submit">Update</button>
                    </form>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      ) : (
        <h1>Loading</h1>
      )}
    </>
  );
};

export default ProductDetails;
