import React, { useContext } from "react";
import "./CSS/ShopCategory.css";
import { ShopContext } from "../Context/ShopContext";
import dropdown_icon from "../Components/Assets/dropdown_icon.png";
import { Item } from "../Components/Item/Item";

export const ShopCategory = (props) => {
  const { all_products } = useContext(ShopContext);
  return (
    <div className="shop-category">
      <img className="shopcategory-banner" src={props.banner} alt="" />
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-12 out of 36 products</span>
        </p>
        <div className="shopcategory-sort">
          Sort by <img className="sortby-dropdown-icon" src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="shopcategory-products">
        {all_products.map((item,i)=>{
          if(props.category===item.type){
            return (
              <Item
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          }
        })}
      </div>
      <div className="shopcategory-loadmore">
        Explore More
      </div>
    </div>
  );
};
