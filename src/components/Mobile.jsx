import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import logo from "../svg/wiket-logo.svg";
import hamburger from "../svg/menu-icon.svg";
import hero from "../jpg/header-img-florist.jpg";
import three from "../jpg/header-img-barista.jpg";
import two from "../jpg/header-img-gardener.jpg";
import one from "../jpg/header-img-pottery.jpg";
import phone from "../svg/header-line-phone-portrait.svg";

gsap.registerPlugin(ScrollTrigger);

const Mobile = () => {

  useEffect(() => {
    gsap.from(".hero__header__mobile", {
      duration: 2,
      y: "100",
      opacity: 0,
      ease: "ease-out",
      scrollTrigger: {
        trigger: ".hero__heading",
        start: "top 90%",
        toggleActions: "play complete complete complete",
      },
    });
  }, []);

  useEffect(() => {
    gsap.from(".wiket__text__mobile", {
      duration: 4,
      y: "100",
      opacity: 0,
      ease: "ease-out",
      scrollTrigger: {
        trigger: ".hero__heading",
        start: "top 90%",
        toggleActions: "play complete complete complete",
      },
    });
  }, []);

  useEffect(() => {
    gsap.from(".mobile__top", {
      duration: 5,
      y: "100",
      opacity: 0,
      ease: "ease-out",
      scrollTrigger: {
        trigger: ".hero__heading",
        start: "top 90%",
        toggleActions: "play complete complete complete",
      },
    });
  }, []);
  useEffect(() => {
    gsap.from(".mobile__floatdiv__one", {
      duration: 2,
      y: "100",
      opacity: 0,
      ease: "ease-out",
      scrollTrigger: {
        trigger: ".mobile__floatdiv__one",
        start: "top 90%",
        toggleActions: "play complete complete complete",
      },
    });
  }, []);

  useEffect(() => {
    gsap.from(".mobile__floatdiv__two", {
      duration: 2,
      y: "100",
      opacity: 0,
      ease: "ease-out",
      scrollTrigger: {
        trigger: ".mobile__floatdiv__two",
        start: "top 90%",
        toggleActions: "play complete complete complete",
      },
    });
  }, []);

  useEffect(() => {
    gsap.from(".mobile__floatdiv__three", {
      duration: 2,
      y: "100",
      opacity: 0,
      ease: "ease-out",
      scrollTrigger: {
        trigger: ".mobile__floatdiv__three",
        start: "top 90%",
        toggleActions: "play complete complete complete",
      },
    });
  }, []);

  return (
    <>
      <nav className="mobile__nav">
        <img src={logo} alt="" />
        <div>
          <button>Get Started</button>
          <img className="nav__hamburger" src={hamburger} alt="" />
        </div>
      </nav>
      <main>
        <section>
          <div className="mobile__images">
            <div className="mobile__top">
              <h4>Hanging Garden</h4>
              <p>Florist in Bangkok</p>
              <div>
                <img src={hero} alt="florist" />
              </div>
            </div>
            <div className="mobile__bottom">
              <div className="mobile__backimage">
                <img src={phone} alt="" />
              </div>
              <div className="mobile__float mobile__floatdiv__one">
                <div>
                  <img src={one} alt="barista" />
                </div>
                <h4>Potject</h4>
                <p>Pottery in Bangkok</p>
              </div>
              <div className="mobile__float mobile__floatdiv__two">
                <div>
                  <img src={two} alt="gardener" />
                </div>
                <h4>GreenThumb</h4>
                <p>Gardener in CheChe</p>
              </div>
              <div className="mobile__float mobile__floatdiv__three">
                <div>
                  <img src={three} alt="pottery" />
                </div>
                <h4>Green Cafe</h4>
                <p>Cafe in Bangkok</p>
              </div>
            </div>
          </div>
          <div className="hero__text">
            <div className="hero__heading">
              <div className="hero__header__mobile">
                <p>Explore new opportunities.</p>
                <h1>
                  <span className="hero__orange">Grow</span> your business.
                </h1>
              </div>
              <div className="wiket__text__mobile">
                <p>
                  <span className="font__bold">
                    Wiket is the first business to business network{" "}
                  </span>
                  which lets you connect to mind like people.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Mobile;
