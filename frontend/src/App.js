import "./App.css";
import { Navbar } from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TopDeals } from "./Pages/TopDeals";
import { ShopCategory } from "./Pages/ShopCategory";
import { Product } from "./Pages/Product";
import { Cart } from "./Pages/Cart";
import { LoginSignUp } from "./Pages/LoginSignUp";
import { Footer } from "./Components/Footer/Footer";
import airconditioner_banner from "./Components/Assets/Banners/airconditioner_banner.png";
import cooking_banner from "./Components/Assets/Banners/cooking_banner.png";
import dishwasher_banner from "./Components/Assets/Banners/dishwasher_banner.png";
import laundry_banner from "./Components/Assets/Banners/laundry_banner.png";
import refrigerator_banner from "./Components/Assets/Banners/refrigerator_banner.png";

function App() {
  return (
    <div className="App">
      <div>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<TopDeals />} />
            <Route
              path="/airconditioner"
              element={
                <ShopCategory
                  banner={airconditioner_banner}
                  category="airconditioner"
                />
              }
            />
            <Route
              path="/cooking"
              element={
                <ShopCategory banner={cooking_banner} category="cooking" />
              }
            />
            <Route
              path="/refrigerators"
              element={
                <ShopCategory
                  banner={refrigerator_banner}
                  category="refrigerators"
                />
              }
            />
            <Route
              path="/dishwashers"
              element={
                <ShopCategory
                  banner={dishwasher_banner}
                  category="dishwashers"
                />
              }
            />
            <Route
              path="/laundry"
              element={
                <ShopCategory banner={laundry_banner} category="laundry" />
              }
            />
            {/* <Route
              path="/packages"
              element={<ShopCategory banner={} category="packages" />}
            /> */}
            <Route
              path="/brands"
              element={<ShopCategory category="brands" />}
            />
            <Route path="/product" element={<Product />}>
              <Route path=":productId" element={<Product />} />
            </Route>
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<LoginSignUp />} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </div>
    </div>
  );
}

export default App;
