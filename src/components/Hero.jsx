import React, { useState, useEffect } from "react";
import heroBg from "../assets/hero-main.png";
import styles from "./Hero.module.css";

const codeSnippet = `
function greet() {
  console.log("Hello World, I'm Milagros");
}
greet();
`;

export default function Hero() {
  const fullText = "Hello World, I'm Milagros";
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText(fullText.slice(0, index + 1));
      index++;
      if (index === fullText.length) clearInterval(interval);
    }, 150);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.heroContainer}>
      <img src={heroBg} alt="Background" className={styles.backgroundImage} />
      <div className={styles.overlay} />
      <h1 className={styles.heroText}>
        {displayedText}
        <span className={styles.cursor}>|</span>
      </h1>
    </div>
  );
}
