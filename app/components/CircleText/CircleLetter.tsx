'use client'
import React, { useEffect, useState } from 'react';
import styles from './CirceLetter.module.css'

type Type ={
  char: string; rotation: number;
}


const RotatingCircleText = () => {
  const [letters, setLetters] = useState<Type[]>([]);
  const text = "UiUxThinker & Front End Programmer.";

  useEffect(() => {
    const letterArray = text?.split('').map((char:string, index:number) => ({
      char,
      rotation: (index * 360) / text.length
    }));
    setLetters(letterArray);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.circleWrapper}>
        {/* Rotating Circle */}
        <div className={styles.circle}>
          {/* Circle Dot */}
          {/* <div className={styles.circleDot} /> */}
        </div>
        
        {/* Rotating Text */}
        <div className={styles.textCircle}>
          {letters.map((letter, index) => (
            <div
              key={index}
              className={styles.letter}
              style={{
                transformOrigin: '0 100px',
                transform: `rotate(${letter.rotation}deg)`
              }}
            >
              {letter.char}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RotatingCircleText;