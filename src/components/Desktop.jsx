import React, { useState, useEffect } from "react";
import { TimelineLite } from "gsap/all";
import logo from "../svg/wiket-logo.svg";
import pin_one from "../svg/pin-01.svg";
import pin_two from "../svg/pin-02.svg";
import hero from "../jpg/header-img-florist.jpg";
import three from "../jpg/header-img-barista.jpg";
import two from "../jpg/header-img-gardener.jpg";
import one from "../jpg/header-img-pottery.jpg";
import laptop from "../svg/header-line-desktop.svg";

const Index = () => {
  const [tl] = useState(new TimelineLite());

  let targetOne = null;
  let targetTwo = null;
  let targetThree = null;
  let targetFour = null;
  let targetFive = null;
  let targetSix = null;
  let targetSeven = null;
  let targetEight = null;
  let targetNine = null;
  let targetTen = null;

  useEffect(() => {
    tl.from(targetOne, 1.5, { opacity: 0, y: "50" })
      .from(targetTwo, 1.5, { opacity: 0, y: "50" })
      .from(targetThree, 1.5, { opacity: 0, y: "50" })
      .from(targetFour, 1.5, { opacity: 0, y: "50" })
      .from(targetFive, 1.5, { opacity: 0, y: "50" })
      .to(targetSix, 0, { opacity: 1 })
      .to(targetSeven, 0, { opacity: 1 })
      .to(targetEight, 0, { opacity: 1 })
      .to(targetNine, 0, { opacity: 1 })
      .to(targetTen, 0, { opacity: 1 })
  }, []); 

  return (
    <>
      <nav className="desktop__nav" ref={(e) => (targetEight = e)}>
        <img src={logo} alt="" />
        <ul>
          <li>Benefits</li>
          <li>Your profile</li>
          <li>Connections</li>
          <li>Plans & Pricing</li>
          <li>
            <button>Get Started</button>
          </li>
        </ul>
      </nav>
      <main>
        <section>
          <div className="main__images">
            <div className="hero__main">
              <div>
                <div className="pin__right" ref={(e) => (targetSix = e)}>
                  <img src={pin_one} alt="" />
                </div>
                <div className="pin__left" ref={(e) => (targetSeven = e)}>
                  <img src={pin_two} alt="" />
                </div>
                <div
                  className="float floatdiv__one"
                  ref={(e) => (targetTwo = e)}
                >
                  <div>
                    <img src={one} alt="barista" />
                  </div>
                  <h4>Potject</h4>
                  <p>Pottery in Bangkok</p>
                </div>
                <div
                  className="float floatdiv__two"
                  ref={(e) => (targetThree = e)}
                >
                  <div>
                    <img src={two} alt="gardener" />
                  </div>
                  <h4>GreenThumb</h4>
                  <p>Gardener in CheChe</p>
                </div>
                <div
                  className="float floatdiv__three"
                  ref={(e) => (targetFour = e)}
                >
                  <div>
                    <img src={three} alt="pottery" />
                  </div>
                  <h4>Green Cafe</h4>
                  <p>Cafe in Bangkok</p>
                </div>
                <div className="hero__image" ref={(e) => (targetOne = e)}>
                  <img src={hero} alt="florist" />
                  <h4>Hanging Garden</h4>
                  <p>Florist in Bangkok</p>
                </div>
              </div>
            </div>
          </div>
          <div className="hero__text">
            <div className="wiket__float" ref={(e) => (targetNine = e)}>
              <div>
                <img src={laptop} alt="" />
              </div>
            </div>
            <div className="wiket__text" ref={(e) => (targetTen = e)}>
              <p>
                <span className="font__bold">
                  Wiket is the first business to business network{" "}
                </span>
                which lets you connect to mind like people.
              </p>
            </div>
            <div className="hero__heading" ref={(e) => (targetFive = e)}>
              <p>Explore new opportunities.</p>
              <h1>
                <span className="hero__orange">Grow</span> your business.
              </h1>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Index;
