import React, { useState, useEffect } from "react";
import "./presentation.css";

const Presentation = () => {
  const [wordIndex, setWordIndex] = useState(0);
  const [letterIndex, setLetterIndex] = useState(0);
  const [text, setText] = useState("");
  const words = ["Web Developer", "Creative", "Designer"];

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (letterIndex === 0 && wordIndex < words.length) {
        setText("");
      }
      if (letterIndex < words[wordIndex].length) {
        setText((text) => text + words[wordIndex][letterIndex]);
        setLetterIndex((letterIndex) => letterIndex + 1);
      } else {
        setWordIndex((wordIndex) => (wordIndex + 1) % words.length);
        setLetterIndex(0);
      }
    }, 250);
    return () => clearInterval(intervalId);
  }, [wordIndex, letterIndex, words]);

  return (
    <div className="presentation-container">
      <p>
        Hello, it's me
        <br />
        Brun Nicolas
        <br />
        and I'm a <span id="target">{text}</span>
        <br />
        <span className="description">
          As a junior web developer, I am always on the lookout for new
          challenges to expand my knowledge and gain practical experience in web
          development.
        </span>
      </p>
    </div>
  );
};

export default Presentation;