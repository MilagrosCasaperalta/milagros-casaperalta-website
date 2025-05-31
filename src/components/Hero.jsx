import React, { useState, useEffect } from 'react';
import heroBg from '../assets/hero-main.png';

const codeSnippet = `
function greet() {
  console.log("Hello World, I'm Milagros");
}
greet();
`;

export default function Hero() {
  const fullText = "Hello World, I'm Milagros";
  const [displayedText, setDisplayedText] = useState('');

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
    <div style={{ position: 'relative', width: '100%', height: '500px', fontFamily: "'JetBrains Mono', monospace", overflow: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#e0e0e0' }}>
      
      <img 
        src={heroBg} 
        alt="Background" 
        style={{ 
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          filter: 'blur(4px) brightness(0.6)', 
          zIndex: 0,
          userSelect: 'none',
          pointerEvents: 'none',
        }} 
      />

      <div style={{
        position: 'absolute',
        top:0,
        left:0,
        width:'100%',
        height:'100%',
        backgroundColor:'rgba(0, 0, 0, 0.16)',
        zIndex:1,
      }} /> 

      <h1 style={{
        position: 'relative',
        fontSize: '2.5rem',
        fontWeight: 'bold',
        zIndex: 3,
      }}>
        {displayedText}
        <span style={{
          display: 'inline-block',
          width: '1ch',
          animation: 'blink 1s steps(2, start) infinite',
          color: '#38bdf8',
        }}>
          |
        </span>
      </h1>
    </div>
  );
}
