import logo from "../svg/wiket-logo.svg";
import hamburger from "../svg/menu-icon.svg";
import pin_one from "../svg/pin-01.svg";
import pin_two from "../svg/pin-02.svg";
import hero from "../jpg/header-img-florist.jpg";
import one from "../jpg/header-img-barista.jpg";
import two from "../jpg/header-img-gardener.jpg";
import three from "../jpg/header-img-pottery.jpg";
import laptop from "../svg/header-line-desktop.svg";
import phone from "../svg/header-line-phone-portrait.svg";

const Index = () => {
  return (
    <>
      <nav>
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
          <div className="main__images">
            <div className="hero__main">
              <div>
                <div className="pin__right">
                  <img src={pin_one} alt="" />
                </div>
                <div className="pin__left">
                  <img src={pin_two} alt="" />
                </div>
                <div className="float floatdiv__one">
                  <div>
                    <img src={one} alt="barista" />
                  </div>
                  <h4>Potject</h4>
                  <p>Pottery in Bangkok</p>
                </div>
                <div className="float floatdiv__two">
                  <div>
                    <img src={two} alt="gardener" />
                  </div>
                  <h4>GreenThumb</h4>
                  <p>Gardener in CheChe</p>
                </div>
                <div className="float floatdiv__three">
                  <div>
                    <img src={three} alt="pottery" />
                  </div>
                  <h4>Green Cafe</h4>
                  <p>Cafe in Bangkok</p>
                </div>
                <img src={hero} alt="florist" />
              </div>
              <h4>Hanging Garden</h4>
              <p>Florist in Bangkok</p>
            </div>
          </div>
          <div className="hero__text">
            <div className="wiket__float">
              <div>
                <img src={laptop} alt="" />
              </div>
            </div>
            <div className="wiket__text">
              <p>
                <span className="font__bold">
                  Wiket is the first business to business network{" "}
                </span>
                which lets you connect to mind like people.
              </p>
            </div>
            <div className="hero__heading">
              <p>Explore new opportunities.</p>
              <h1>
                <span className="hero__orange">Grow</span> your business.
              </h1>
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

export default Index;
