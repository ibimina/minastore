//style
import "./home.css";

//home components
import TopSection from "./TopSection";
import BestDealSec from "./BestDealSec";


import About from "../About";

export default function Home() {
 

  return (
    <>
  
      <div className="home-container">
        <div className="hero">
          <h1 className="hero-text">beauty shop</h1>
        </div>
        <div className="content">
          <TopSection />
          <BestDealSec />
          <About />
        </div>
      </div>
    </>
  );
}
