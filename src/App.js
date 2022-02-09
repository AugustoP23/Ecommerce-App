import logo from "./logo.svg";
import "./App.css";
import Logo from "./images/Logo.jpeg";
import elipse from "./images/elipse.jpeg";
import elipse2 from "./images/elipse2.jpeg";
import sally1 from "./images/Sally1.png";
import circle1 from "./images/circle1.jpeg";
import circle2 from "./images/circle2.jpeg";

function App() {
  return (
    <div className="App">
      <div className="Header">
        <div>
          <img src={elipse2} className="elipse2"></img>
        </div>

        <div>
          <img src={Logo} className="Logo"></img>
        </div>
        <div>
          <section className="menu">
            <div className="menu__tags">
              <span className="tag">Home</span>
              <span className="tag">Team</span>
              <span className="tag">Faq</span>
              <span className="tag">Contact</span>
            </div>
          </section>
        </div>

        <div className="Header_info">
          <h1 className="Titulo">Shopping App for Gadgets and Gifts</h1>
          <p className="Header_texto">
            Get 10% off your first order when you spend over £40 on any product!
          </p>
        </div>
        <div>
          <img src={elipse} className="elipse"></img>
        </div>
        <div>
          <img src={sally1} className="sally1"></img>
        </div>
        <div>
          <button className="Download">Download App</button>
        </div>
        <div>
          <button className="Download2">Download App</button>
        </div>
        <div>
          <img src={circle1} className="circle1"></img>
        </div>
        <div>
          <img src={circle1} className="circle1_small"></img>
        </div>
        <div>
          <img src={circle2} className="circle2"></img>
        </div>
      </div>

      <div className="section1"></div>
      <div className="section2"></div>
      <div className="section3"></div>
      <div className="section4"></div>

      <div className="section5"></div>
    </div>
  );
}

export default App;
