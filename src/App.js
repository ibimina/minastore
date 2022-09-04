import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
// import About from './pages/About';
import Description from "./pages/description/Description";
import Home from "./pages/home/Home";
import Blush from "./pages/products/Blush";
import Bronzer from "./pages/products/Bronzer";
import EyeLiner from "./pages/products/EyeLiner";
import EyeShadow from "./pages/products/EyeShadow";
import EyeBrow from "./pages/products/EyeBrow";
import Mascara from "./pages/products/Mascara";
import Foundation from "./pages/products/Foundation";
import LipStick from "./pages/products/LipStick";
import LipLiner from "./pages/products/LipLiner";
import NailPolish from "./pages/products/NailPolish";
import Cart from "./pages/carts/Cart";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/carts" element={<Cart />} />
          {/* <Route path="/about" element={<About />} /> */}
          <Route path="/products/blush" element={<Blush />} />
          <Route path="/products/bronzer" element={<Bronzer />} />
          <Route path="/products/eyeshadow" element={<EyeShadow />} />
          <Route path="/products/eyeliner" element={<EyeLiner />} />
          <Route path="/products/masscara" element={<Mascara />} />
          <Route path="/products/eyebrow" element={<EyeBrow />} />
          <Route path="/products/foundation" element={<Foundation />} />
          <Route path="/products/lipliner" element={<LipLiner />} />
          <Route path="/products/lipstick" element={<LipStick />} />
          <Route path="/products/nailpolish" element={<NailPolish />} />
          <Route path="/products/:id" element={<Description />} />

          <Route path="*" element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
