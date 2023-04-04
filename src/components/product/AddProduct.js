import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { GlobalContext } from "../../context/GlobalState";
import "./Products.css";

const AddProduct = () => {
  const { addProduct } = useContext(GlobalContext);

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    id: uuidv4(),
    title: "",
    price: "",
    description: "",
    category: "",
    image: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (event) => {
    const imageFile = event.target.files[0];
    const imageUrl = URL.createObjectURL(imageFile);
    setFormData({ ...formData, image: imageUrl });
    console.log(formData);
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    addProduct(formData);
    console.log("formData", formData);
    navigate("/");
  };

  return (
    <>
      <div className="container text-center">
        <h1>Add Product</h1>
      </div>
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
      <div className="shell">
        <div className="container">
          <div className="row1">
            <div className="col-md-6 mx-auto">
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
                    <input
                      type="file"
                      name="image"
                      accept="image/*"
                      onChange={handleImageChange}
                      required
                    />
                  </div>

                  <button type="submit">Add</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddProduct;
