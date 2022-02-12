import "./App.css";
import cellphone1 from "./images/cellphone1.jpg";
import section1_figures1 from "./images/section1_figures1.png";
import section1_figures2 from "./images/section1_figures2.png";
import section2_circle1 from "./images/section2_circle1.png";
import s2_cellphone from "./images/s2_cellphone.jpg";
import s2_circle2 from "./images/s2_circle2.png";
import logoHeader from "./images/logoHeader.png";
import blueElipse from "./images/blueElipse.png";
import yellowElipse from "./images/yellowElipse.png";
import sallyHeader from "./images/sallyHeader.png";
import yellowCircle from "./images/yellowCircle.png";
import pinkCircle from "./images/pinkCircle.png";
import s3_figures1 from "./images/s3_figures1.png";
import s3_figures2 from "./images/s3_figures2.png";
import s4__phone from "./images/s4__phone.png";
import s4__phoneBackground from "./images/s4__phoneBackground.jpg"
import s3_phone from "./images/s3_phone.jpeg";
import s5_figures from "./images/s5_figures.png";
import s5_image from "./images/s5_image.png";

function App() {
  return (
    <div className="App">
      <div className="Header">
        <div>
          <img src={yellowElipse} className="yellowElipse"></img>
          <img src={logoHeader} className="logoHeader"></img>
        </div>
        <div>
          <section className="menu">
            <div className="menuTags">
              <span className="tag">Home</span>
              <span className="tag">Team</span>
              <span className="tag">Faq</span>
              <span className="tag">Contact</span>
            </div>
          </section>
        </div>

        <div>
          <img src={blueElipse} className="blueElipse"></img>
          <img src={sallyHeader} className="sallyHeader"></img>
          <button className="buttonHeader">Download App</button>
        </div>
        <div>
          <button className="buttonHeader2">Download App</button>
        </div>

        <div>
          <img src={yellowCircle} className="yellowCircle"></img>
          <img src={yellowCircle} className="yellowCircle2"></img>
          <img src={pinkCircle} className="pinkCircle"></img>
        </div>

        <div className="headerInfo">
          <h1 className="title">Shopping App for Gadgets and Gifts</h1>
          <p className="headerText">
            Get 10% off your first order when you spend over £40 on any product!
          </p>
        </div>
      </div>

      <div className="s1Container">
        <h2 className="s1__title">How the app works</h2>
        <div className="section1">
          <div className="section1__imageContainer">
            <img
              src={section1_figures2}
              className="s1_figures2"
              alt="figures2"
            ></img>
            <img
              src={cellphone1}
              className="cellphone1"
              alt="create account"
            ></img>
            <img
              src={section1_figures1}
              className="s1_figures1"
              alt="figures1"
            ></img>
          </div>
          <div className="section1__textContainer">
            <h4 className="textContainer__title">Create an account</h4>
            <h1 className="textContainer__subtitle">
              Discover original products
            </h1>
            <p className="textContainer__text">
              There are more than 950 categories updated daily based on trending
              websites reviews an users rating.
            </p>
          </div>
        </div>
      </div>

      <div className="s2__container">
        <div className="section2">
          <div className="s2__textContainer">
            <h1 className="s2__textTitle">
              Experience <br /> products in AR
            </h1>
            <p className="s2__textContent">
              Have you tried Augmented Reality? Stop looking at boring galleries
              and start experiences each item.
            </p>
          </div>
          <div className="s2__imagesContainer">
            <img src={section2_circle1} alt="" className="s2__circle1"></img>
            <img src={s2_circle2} alt="" className="s2__circle2"></img>
            <img src={s2_circle2} alt="" className="s2__circle3"></img>
            <img src={s2_circle2} alt="" className="s2__circle4"></img>
            <img
              src={s2_cellphone}
              alt="example"
              className="s2__cellphone"
            ></img>
          </div>
        </div>
      </div>

      <div className="s3_container">
        <div className="section3">
          <div className="s3_imagecontainer">
            <img src={s3_figures1} className="s3_figures1"></img>
            <img src={s3_phone} className="s3_phone"></img>
            <img src={s3_figures2} className="s3_figures2"></img>
          </div>
          <div className="section1__textContainer">
            <h4 className="textContainer__title">Original platform</h4>
            <h1 className="textContainer__subtitle">
              Hottest deals <br /> around the web
            </h1>
            <p className="textContainer__text">
              Find the perfect gift or everydat goods <br /> right at your
              fingertips
            </p>
          </div>
        </div>
      </div>

      <div className="s4__container">
        <div className="section4">
          <div className="s4__textContainer">
            <h1 className="s4__text">Save time & money with exclusive offers from top stores</h1>
            <button className="s4__downloadBtn">Download App</button>
          </div>
          <div className="s4__imageContainer">
          <img src={s4__phone} className="s4__phone"></img>
          <img src={s4__phoneBackground} className="s4__phoneBackground"></img>
          </div>
        </div>
      </div>

      <div className="s5_container">
        <div className="section5">
          <div className="section1__textContainer">
            <p className="textContainer__subtitle5">
              Hey! Follow us on <br /> social media so you <br /> don't miss any
              offer
            </p>
          </div>
          <div className="s5_imagecontainer">
            <img src={s3_figures1} className="s5_figures2"></img>
            <img src={s5_image} className="s5_image"></img>
            <img src={s5_figures} className="s5_figures"></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
