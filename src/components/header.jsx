import React, { useState, useEffect } from "react";
import logo from "../images/logo/LE_SSERAFIM_logo.png";

const Header = () => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const sentences = ["Hello, we are ...", "This is ...", "Category is ..."];
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentSentence = sentences[index];

    if (isDeleting) {
      if (charIndex > 0) {
        setTimeout(() => setCharIndex(charIndex - 1), 50);
      } else {
        setIsDeleting(false);
        setIndex((prevIndex) => (prevIndex + 1) % sentences.length);
      }
    } else {
      if (charIndex < currentSentence.length) {
        setTimeout(() => setCharIndex(charIndex + 1), 100);
      } else {
        setTimeout(() => setIsDeleting(true), 1000);
      }
    }

    setText(currentSentence.substring(0, charIndex));
  }, [charIndex, isDeleting, index, sentences]);

  return (
    <header id="home" className="text-center text-white bg-dark py-5">
      <div className="container py-5">
        <h1 className="display-4" style={{ minHeight: "50px" }}>
          {text || "\u00A0"}
        </h1>
        <img src={logo} alt="LE SSERAFIM" className="img-fluid" style={{ width: "350px" }} />
      </div>
    </header>
  );
};

export default Header;
