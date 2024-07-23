import React, { useState } from "react";
import "./AddProduct.css";
import upload_area from '../../assets/upload_image_icon.png'

const AddProduct = () => {

    const [image, setImage] = useState(false);
    const imageHandeler = (e) =>{
        setImage(e.target.files[0]);
    }

  return (
    <div className="add-product">
      <div className="addproduct-itemfield">
        <p>Product Title</p>
        <input type="text" name="name" placeholder="Type Here" />
      </div>
      <div className="addproduct-price">
        <div className="addproduct-itemfield">
          <p>Price</p>
          <input type="text" name="old_price" placeholder="Type Here" />
        </div>
        <div className="addproduct-itemfield">
          <p>Offer Price</p>
          <input type="text" name="new_price" placeholder="Type Here" />
        </div>
      </div>
      <div className="addproduct-itemfield">
        <p>Product Category</p>
        <select name="category" className="add-product-selector" id="">
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
            <img src={image?URL.createObjectURL(image):upload_area} className="addproduct-thumnail-img" alt="" />
        </label>
        <input onChange={imageHandeler} type="file" accept="image/*" name="image" id="file-input" hidden/>
      </div>
      <button className="addproduct-btn">ADD</button>
    </div>
  );
};

export default AddProduct;
