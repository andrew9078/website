import React, {useEffect} from 'react';
//import SimpleComponent from './SimpleComponent'; 
import Header from './Header';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS file
import './background.css';
import Intro  from './Intro';



const AboutSection = () => {
  return (
    <div className="font-container">
      <div className="about-container">
        <section id="about" style={{ paddingTop: '100px'}}>
            <h2>About</h2>
            <p>This is the About section of the website</p>
         </section>
        </div>
      </div>
  );
};

const BackgroundSection = () => {

  return (
    <div className="font-container">
      <div className="background-container">
      <section id="background">
        <h2>Background</h2>
        <p>This is the background section</p>
      </section>
      </div>
    </div>
  );
};


const ContactSection = () => {
  return (
    <div className="font-container">
      <div className="contact-container">
      <section id="contact">
        <h2>Contact</h2>
        <form>
          <label htmlFor="email">Email: </label>
          <input type="email" id="email" name="email" />
          <button type="submit">Submit</button>
        </form>
        </section>
       </div>
      </div>
  );
};

function App() {
  useEffect(() => {
    document.getElementById('about').scrollIntoView({ behavior: 'smooth'});
  }, []);

  return (
    <div className="page-container">
      <Header />
      <div className="divider"></div>
      <Intro />
      <div className="divider"></div>
      <AboutSection/>
      <div className="divider"></div>
      <BackgroundSection />
      <div className="divider"></div>
      <ContactSection />
    </div>
  );
};

export default App;
