import React, { useState, useEffect } from 'react';

const TypingText = ({ text }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text.charAt(index));
        setIndex((prev) => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [index, text]);

  return <span>{displayedText}</span>;
};

export default TypingText;
