//style
import "./home.css";

import About from "../About";
import Section from "../../components/Section";

export default function Home() {

  return (
    <>
      <div className="home-container">
        <div className="hero">
          <h1 className="hero-text">beauty shop</h1>
        </div>
        <div className="content">
          <Section q="rating_greater_than=4" title="Top ranks"/>
          <Section q="price_less_than=5" title="Best Deals"/>
          <About />
        </div>
      </div>
    </>
  );
}
