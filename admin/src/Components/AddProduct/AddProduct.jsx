import React, { useState } from "react";
import "./AddProduct.css";
import upload_area from "../../assets/upload_image_icon.png";

const AddProduct = () => {
  const [image, setImage] = useState(false);
  const [productDetails, setProductDetails] = useState({
    name: "",
    image: "",
    category: "airconditioner",
    new_price: "",
    old_price: "",
  });

  const imageHandler = (e) => {
    setImage(e.target.files[0]);
  };

  const changeHandler = (e) => {
    setProductDetails({ ...productDetails, [e.target.name]: e.target.value });
  };

  const addProduct = async () => {
    console.log(productDetails);
    let imguploadResponse;
    let product = productDetails;
    let formData = new FormData();
    formData.append("product", image);

    try {
       imguploadResponse = await fetch("http://localhost:4000/upload", {
        method: "POST",
        headers: {
          accept: "application/json",
        },
        body: formData,
      });

      if (!imguploadResponse.ok) {
        throw new Error("Network response was not ok for img upload");
      }

      var imguploadResponseData = await imguploadResponse.json();

      if (imguploadResponseData.success) {
        product.image = imguploadResponseData.image_url;
        console.log("Image uploaded successfully:", product);

        const addProductResponse = await fetch("http://localhost:4000/addproduct", {
          method: "POST",
          headers: {
            accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(product),
        });

        if (!addProductResponse.ok) {
          throw new Error("Network response was not ok for addProduct");
        }

        var addProductResponseData = await addProductResponse.json();

        addProductResponseData.success ? alert("Product Added") : alert("Failed");
      } else {
        console.error("Failed to upload image:", responseData.message);
      }
    } catch (error) {
      console.error("Error while uploading image:", error);
    }
  };

  return (
    <div className="add-product">
      <div className="addproduct-itemfield">
        <p>Product Title</p>
        <input
          value={productDetails.name}
          onChange={changeHandler}
          type="text"
          name="name"
          placeholder="Type Here"
        />
      </div>
      <div className="addproduct-price">
        <div className="addproduct-itemfield">
          <p>Price</p>
          <input
            value={productDetails.old_price}
            onChange={changeHandler}
            type="text"
            name="old_price"
            placeholder="Type Here"
          />
        </div>
        <div className="addproduct-itemfield">
          <p>Offer Price</p>
          <input
            value={productDetails.new_price}
            onChange={changeHandler}
            type="text"
            name="new_price"
            placeholder="Type Here"
          />
        </div>
      </div>
      <div className="addproduct-itemfield">
        <p>Product Category</p>
        <select
          value={productDetails.category}
          onChange={changeHandler}
          name="category"
          className="add-product-selector"
        >
          <option value="airconditioner">Air Conditioner</option>
          <option value="cooking">Cooking</option>
          <option value="refrigerators">Refrigerators</option>
          <option value="dishwashers">Dishwashers</option>
          <option value="laundry">Laundry</option>
          <option value="packages">Packages</option>
        </select>
      </div>
      <div className="addproduct-itemfield">
        <label htmlFor="file-input">
          <img
            src={image ? URL.createObjectURL(image) : upload_area}
            className="addproduct-thumnail-img"
            alt=""
          />
        </label>
        <input
          onChange={imageHandler}
          type="file"
          accept="image/*"
          name="image"
          id="file-input"
          hidden
        />
      </div>
      <button onClick={addProduct} className="addproduct-btn">
        ADD
      </button>
    </div>
  );
};

export default AddProduct;
