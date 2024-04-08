import React, {useState, useEffect} from 'react';
import ReactTyped from "react-typed";

const TypeWriter = () => {
    return (
        <div>
            <h1>
                Welcome to {" "}
                <ReactTyped strings={["My name is Andrew Jung"]} typeSpeed = {100} />
            </h1>
        </div>
    );
};

export default TypeWriter;
/*function Typewriter({text}) {
    const [displayedText, setDisplayedText] = useState('');
  
    useEffect(() => {
      let currentIndex = 0;
      const interval = setInterval(() => {
        if(currentIndex < text.length){
          setDisplayedText((prevText) => prevText + text[currentIndex]);
          currentIndex++;
        }
        else{
          clearInterval(interval);
        }
      }, 170);
  
    return () => clearInterval(interval);
    }, [text]);
  
      return <div className="TypeWriterText">{displayedText}</div>
  }//TypeWriter

  export default Typewriter;

  */