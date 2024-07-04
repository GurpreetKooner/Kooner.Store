import React, { useContext, useState } from "react";
import "./Navbar.css";
import searchIcon from "../Assets/magnifying-glass.svg";
import infoIcon from "../Assets/info_icon.svg";
import profileIcon from "../Assets/profile_icon.svg";
import cartIcon from "../Assets/cart_icon.svg";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";

export const Navbar = () => {
  const [menu, setMenu] = useState("Top Deals");
  const { getTotalCartItems } = useContext(ShopContext);

  return (
    <div className="navbar">
      <div className="navdiv">
        <a className="logo" href="#">
          Kooner.store
        </a>
        <div className="searchBarDiv">
          <input
            type="search"
            className="searchBar"
            id="search"
            placeholder="Search your products here"
          />
          <img src={searchIcon} />
        </div>
        <ul className="navOption-parent">
          <li className="navOption">
            <Link to="/info">
              <img className="navImage" src={infoIcon} />
            </Link>
          </li>
          <li className="navOption">
            <Link to="/login">
              <img className="navImage" src={profileIcon} />
            </Link>
          </li>
          <li className="navOption">
            <Link to="/cart">
              {/* <img className="navImage" src={cartIcon} /> */}
              <div className="navImage">
                <img className="navImage" src={cartIcon} />
                <div className="nav-cart-count">{getTotalCartItems()}</div>
              </div>
            </Link>
          </li>
        </ul>
      </div>
      <div className="itemType-parent">
        <ul>
          <li
            className="itemType"
            onClick={() => {
              setMenu("Top Deals");
            }}
          >
            <Link
              className={
                menu === "Top Deals" ? "item-type-selected" : "itemTypeText"
              }
              to="/"
            >
              Top Deals
            </Link>
          </li>
          <li
            className="itemType"
            onClick={() => {
              setMenu("Air Conditioner");
            }}
          >
            <Link
              className={
                menu === "Air Conditioner"
                  ? "item-type-selected"
                  : "itemTypeText"
              }
              to="/airconditioner"
            >
              Air Conditioner
            </Link>
          </li>
          <li
            className="itemType"
            onClick={() => {
              setMenu("Cooking");
            }}
          >
            <Link
              className={
                menu === "Cooking" ? "item-type-selected" : "itemTypeText"
              }
              to="/cooking"
            >
              Cooking
            </Link>
          </li>
          <li
            className="itemType"
            onClick={() => {
              setMenu("Refrigerators");
            }}
          >
            <Link
              className={
                menu === "Refrigerators" ? "item-type-selected" : "itemTypeText"
              }
              to="/refrigerators"
            >
              Refrigerators
            </Link>
          </li>
          <li
            className="itemType"
            onClick={() => {
              setMenu("Dishwashers");
            }}
          >
            <Link
              className={
                menu === "Dishwashers" ? "item-type-selected" : "itemTypeText"
              }
              to="/dishwashers"
            >
              Dishwashers
            </Link>
          </li>
          <li
            className="itemType"
            onClick={() => {
              setMenu("Laundry");
            }}
          >
            <Link
              className={
                menu === "Laundry" ? "item-type-selected" : "itemTypeText"
              }
              to="/laundry"
            >
              Laundry
            </Link>
          </li>
          {/* <li className="itemType" onClick={()=>{setMenu("Packages")}}>
            <Link className={menu==="Packages"?"item-type-selected":"itemTypeText"} to="/packages">
              Packages
            </Link>
          </li> */}
          <li
            className="itemType itemType-last"
            onClick={() => {
              setMenu("Shop by brand");
            }}
          >
            <Link
              className={
                menu === "Shop by brand" ? "item-type-selected" : "itemTypeText"
              }
              to="/brands"
            >
              Shop by brand
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
