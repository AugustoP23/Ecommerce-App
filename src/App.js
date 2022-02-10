
import './App.css';
import cellphone1 from './images/cellphone1.jpg';
import section1_figures1 from './images/section1_figures1.png';
import section1_figures2 from './images/section1_figures2.png'
import section2_circle1 from './images/section2_circle1.png';
import s2_cellphone from './images/s2_cellphone.jpg';
import s2_circle2 from './images/s2_circle2.png';

function App() {
  return (
    <div className="App">
      <div className='header'>
      </div>

      <div className='s1Container'>
        <h2>How the app works</h2>
      <div className='section1'>  
        <div className='section1__imageContainer'>
          <img src={section1_figures2} className='s1_figures2' alt='figures2' ></img>
          <img src={cellphone1} className='cellphone1' alt='create account' ></img>
          <img src={section1_figures1} className='s1_figures1' alt='figures1' ></img>
        </div>
        <div className='section1__textContainer'>
          <h4 className='textContainer__title'>Create an account</h4>
          <h1 className='textContainer__subtitle'>Discover original products</h1>
          <p className='textContainer__text'>There are more than 950 categories updated daily based on trending websites reviews an users rating.</p>
        </div>
      </div>
      </div>

      <div className='s2__Container'>
      <div className='s2__circleContainer'>
          <img src={section2_circle1} alt='' className='s2__circle1'></img>
      </div>
      <div className='section2'>
        <div className='s2__textContainer'>
          <h1 className='s2__textTitle'>Experience <br/> products in AR</h1>
          <p className='s2__textContent'>Have you tried Augmented Reality? Stop looking at boring galleries and start experiences each item.</p>
        </div>
        <div className='s2__imagesContainer'>
          <img src={s2_circle2} alt='' className='s2__circle2'></img>
          <img src={s2_circle2} alt='' className='s2__circle3'></img>
          <img src={s2_circle2} alt='' className='s2__circle4'></img>
          <img src={s2_cellphone} alt='example' className='s2__cellphone'></img>
          
        </div>
      </div>
      </div>
      

      <div className='section3'>

      </div>
      <div className='section4'>

      </div>
      
      <div className='section5'>

      </div>
    </div>
  );
}

export default App;
