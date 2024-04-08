import React from 'react';
import './intro.css';
import beach from './assets/beach.jpg';
import {ReactTyped} from "react-typed"
//import TypewriterText from './typewriter';



function Intro(){
    return (
        <div className="centered-container">
                <div className="overlay">
                    <ReactTyped
                      strings={["My name is Andrew Jung"]}
                      typeSpeed={150}
                      backSpeed={20}
                      
                    />
                </div>
         </div>
    );
}




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
export default Intro;