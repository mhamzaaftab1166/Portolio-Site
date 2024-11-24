import React, { useState, useEffect } from "react";

const TextChange = () => {
  const texts = [
    "Hi, I'm Muhammad Hamza Aftab!",
    "Passionate Full Stack Developer.",
    "MERN Stack Specialist.",
    "React.js and Next.js Expert.",
    "Building seamless digital solutions.",
    "Crafting intuitive user experiences.",
    "Turning ideas into impactful apps.",
    "Let's build something amazing!",
  ];

  const [currentText, setCurrentText] = useState("");
  const [endValue, setEndValue] = useState(0);
  const [isForward, setIsForward] = useState(true);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const currentTextLength = texts[index].length;

      // Update the displayed text
      setCurrentText(texts[index].substring(0, endValue));

      // Forward direction
      if (isForward) {
        if (endValue < currentTextLength) {
          setEndValue((prev) => prev + 1);
        } else {
          // Pause at the end of the text before reversing
          setTimeout(() => setIsForward(false), 500);
        }
      }

      // Backward direction
      if (!isForward) {
        if (endValue > 0) {
          setEndValue((prev) => prev - 1);
        } else {
          // Move to the next text and reset direction
          setIsForward(true);
          setIndex((prevIndex) => (prevIndex + 1) % texts.length); // Cycle to the next text
        }
      }
    }, 100); // Adjust timing for desired speed

    return () => clearInterval(intervalId);
  }, [endValue, isForward, index, texts]);

  return <div className="transition ease duration-300">{currentText}</div>;
};

export default TextChange;
