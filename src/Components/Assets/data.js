import p1_img from "./voltas-window-ac.jpg";
import p2_img from "./voltas-split-ac.jpg";
import p3_img from "./Oven.jpg";
import p4_img from "./blender.jpg";
import p5_img from "./gas.jpg"
import p6_img from "./Philips_airfryer.jpg"
import p7_img from "./godrej-dish-washer.jpg"
import p8_img from "./lg-washing-machine.jpg"

let data_product = [
  {
    id: 1,
    type: "airconditioner",
    name: "Voltas 1.5Tn 5 star Window AC",
    image: p1_img,
    new_price: 249.99,
    old_price: 310.0,
  },
  {
    id: 2,
    type: "airconditioner",
    name: "Voltas 2Tn 5 star Split AC",
    image: p2_img,
    new_price: 499.0,
    old_price: 549.0,
  },
  {
    id: 3,
    type: "airconditioner",
    name: "Voltas 1.5Tn 5 star Window AC",
    image: p1_img,
    new_price: 249.99,
    old_price: 310.0,
  },
  {
    id: 4,
    type: "airconditioner",
    name: "Voltas 2Tn 5 star Split AC",
    image: p2_img,
    new_price: 499.0,
    old_price: 549.0,
  },
  {
    id: 5,
    type: "airconditioner",
    name: "Voltas 1.5Tn 5 star Window AC",
    image: p1_img,
    new_price: 249.0,
    old_price: 310.0,
  },
  {
    id: 6,
    type: "airconditioner",
    name: "Voltas 2Tn 5 star Split AC",
    image: p2_img,
    new_price: 499.0,
    old_price: 549.0,
  },
  {
    id: 7,
    type: "cooking",
    name: "Godrej Eon Dishwasher with Steam Wash Technology",
    image: p3_img,
    new_price: 499.0,
    old_price: 589.0,
  },
  {
    id: 8,
    type: "cooking",
    name: "LG 7 Kg 5 Star Inverter Touch Panel Fully-Automatic Front Load Washing Machine verter Touch Panel Fully-Automatic Front Load Washing Machine",
    image: p4_img,
    new_price: 649.0,
    old_price: 949.0,
  },
  {
    id: 9,
    type: "cooking",
    name: "Godrej Eon Dishwasher with Steam Wash Technology",
    image: p5_img,
    new_price: 499.0,
    old_price: 589.0,
  },
  {
    id: 10,
    type: "cooking",
    name: "LG 7 Kg 5 Star Inverter Touch Panel Fully-Automatic Front Load Washing Machine verter Touch Panel Fully-Automatic Front Load Washing Machine",
    image: p6_img,
    new_price: 649.0,
    old_price: 949.0,
  },
  {
    id: 11,
    type: "refrigerators",
    name: "Voltas 1.5Tn 5 star Window AC",
    image: p1_img,
    new_price: 249.0,
    old_price: 310.0,
  },
  {
    id: 12,
    type: "refrigerators",
    name: "Voltas 2Tn 5 star Split AC",
    image: p2_img,
    new_price: 499.0,
    old_price: 549.0,
  },
  {
    id: 13,
    type: "refrigerators",
    name: "Godrej Eon Dishwasher with Steam Wash Technology",
    image: p3_img,
    new_price: 499.0,
    old_price: 589.0,
  },
  {
    id: 14,
    type: "refrigerators",
    name: "LG 7 Kg 5 Star Inverter Touch Panel Fully-Automatic Front Load Washing Machine verter Touch Panel Fully-Automatic Front Load Washing Machine",
    image: p4_img,
    new_price: 649.0,
    old_price: 949.0,
  },
  {
    id: 15,
    type: "dishwashers",
    name: "Godrej Eon Dishwasher with Steam Wash Technology",
    image: p5_img,
    new_price: 499.0,
    old_price: 589.0,
  },
  {
    id: 16,
    type: "dishwashers",
    name: "LG 7 Kg 5 Star Inverter Touch Panel Fully-Automatic Front Load Washing Machine verter Touch Panel Fully-Automatic Front Load Washing Machine",
    image: p6_img,
    new_price: 649.0,
    old_price: 949.0,
  },
  {
    id: 17,
    type: "dishwashers",
    name: "Voltas 1.5Tn 5 star Window AC",
    image: p7_img,
    new_price: 249.0,
    old_price: 310.0,
  },
  {
    id: 18,
    type: "dishwashers",
    name: "Voltas 2Tn 5 star Split AC",
    image: p8_img,
    new_price: 499.0,
    old_price: 549.0,
  },
  {
    id: 19,
    type: "laundry",
    name: "Godrej Eon Dishwasher with Steam Wash Technology",
    image: p8_img,
    new_price: 499.0,
    old_price: 589.0,
  },
  {
    id: 20,
    type: "laundry",
    name: "LG 7 Kg 5 Star Inverter Touch Panel Fully-Automatic Front Load Washing Machine verter Touch Panel Fully-Automatic Front Load Washing Machine",
    image: p4_img,
    new_price: 649.0,
    old_price: 949.0,
  },
  {
    id: 21,
    type: "laundry",
    name: "Godrej Eon Dishwasher with Steam Wash Technology",
    image: p7_img,
    new_price: 499.0,
    old_price: 589.0,
  },
  {
    id: 22,
    type: "laundry",
    name: "LG 7 Kg 5 Star Inverter Touch Panel Fully-Automatic Front Load Washing Machine verter Touch Panel Fully-Automatic Front Load Washing Machine",
    image: p6_img,
    new_price: 649.0,
    old_price: 949.0,
  },
  {
    id: 23,
    type: "packages",
    name: "Voltas 1.5Tn 5 star Window AC",
    image: p7_img,
    new_price: 249.0,
    old_price: 310.0,
  },
  {
    id: 24,
    type: "packages",
    name: "Voltas 2Tn 5 star Split AC",
    image: p8_img,
    new_price: 499.0,
    old_price: 549.0,
  },
  {
    id: 25,
    type: "packages",
    name: "Godrej Eon Dishwasher with Steam Wash Technology",
    image: p8_img,
    new_price: 499.0,
    old_price: 589.0,
  },
  {
    id: 26,
    type: "packages",
    name: "LG 7 Kg 5 Star Inverter Touch Panel Fully-Automatic Front Load Washing Machine verter Touch Panel Fully-Automatic Front Load Washing Machine",
    image: p4_img,
    new_price: 649.0,
    old_price: 949.0,
  },
];

export default data_product;
