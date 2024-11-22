import React, { useState, useEffect } from 'react';
import { TextTypingEffectWithTextsFadeOut } from './TypingText';

export const TextTypingEffectWithDelay = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  return <>{isVisible && <TextTypingEffectWithTextsFadeOut />}</>;
};
