import React from "react";
import "./Deals.css";
import data_product from "../Assets/data";
import { Item } from "../Item/Item";

export const Deals = () => {
  return (
    <div className="deals">
      <h1>Deals of the Day</h1>
      <hr />
      <div>
        <h2>Air Conditioners</h2>
        <div className="deal-item">
          {data_product.map((item, i) => {
            if (item.type === "airconditioner") {
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
            return null; // Ensure a value is returned
          })}
        </div>
      </div>

      <div>
        <h2>Cooking</h2>
        <div className="deal-item">
          {data_product.map((item, i) => {
            if (item.type === "cooking") {
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
            return null; // Ensure a value is returned
          })}
        </div>
      </div>
      <div>
        <h2>Refrigerators</h2>
        <div className="deal-item">
          {data_product.map((item, i) => {
            if (item.type === "refrigerators") {
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
            return null; // Ensure a value is returned
          })}
        </div>
      </div>
      <div>
        <h2>Dishwashers</h2>
        <div className="deal-item">
          {data_product.map((item, i) => {
            if (item.type === "dishwashers") {
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
            return null; // Ensure a value is returned
          })}
        </div>
      </div>
      <div>
        <h2>Laundry</h2>
        <div className="deal-item">
          {data_product.map((item, i) => {
            if (item.type === "laundry") {
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
            return null; // Ensure a value is returned
          })}
        </div>
      </div>
      <div>
        <h2>Packages</h2>
        <div className="deal-item">
          {data_product.map((item, i) => {
            if (item.type === "packages") {
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
            return null; // Ensure a value is returned
          })}
        </div>
      </div>
    </div>
  );
};
