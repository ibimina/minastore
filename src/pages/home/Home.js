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
          <div className="dummy-con">
            <p className="dummy-text">
              minastore e-commerce site checkout process is a dummy checkout
              process, it doesn't take real credit card information, personal
              information and it doesn't process any payment.
            </p>
          </div>
        </div>
        <div className="content">
          <Section q="rating_greater_than=4" title="Top ranks" />
          <Section q="price_less_than=4" title="Best Deals" />
          <About />
        </div>
      </div>
    </>
  );
}
