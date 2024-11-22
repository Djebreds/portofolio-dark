import React from 'react';
import { useEffect, useState } from 'react';

const useTypingEffect = (
  text: string,
  duration: number,
  isTypeByLetter = false,
) => {
  const [currentPosition, setCurrentPosition] = useState(0);
  const items = isTypeByLetter ? text.split('') : text.split(' ');

  useEffect(() => {
    setCurrentPosition(0);
  }, [text]);

  useEffect(() => {
    if (currentPosition >= items.length) return;

    const intervalId = setInterval(() => {
      setCurrentPosition((prevPosition) => prevPosition + 1);
    }, duration);

    return () => {
      clearInterval(intervalId);
    };
  }, [currentPosition, items, duration]);

  return items.slice(0, currentPosition).join(isTypeByLetter ? '' : ' ');
};

const texts = [
  "Hello! I'm Refi, a passionate Backend Developer.",
  'Turning complex challenges into scalable solutions.',
  'Bringing ideas to life with code.',
  'Empowering businesses through backend excellence.',
];

const TIME_TO_FADE = 300;
const TIME_INTERVAL = 3000;
const TIME_PER_LETTER = 100;

export const TextTypingEffectWithTextsFadeOut = () => {
  const [textIndex, setTextIndex] = React.useState(0);
  const [fadeText, setFadeText] = React.useState(true);
  const [fadeCircle, setFadeCircle] = React.useState(true);
  const textToShow = useTypingEffect(texts[textIndex], TIME_PER_LETTER, false);

  const timeToTypeText = texts[textIndex].split(' ').length * TIME_PER_LETTER;

  React.useEffect(() => {
    const circleTimeout = setTimeout(() => {
      setFadeCircle(false);
    }, timeToTypeText + 1000);

    const textTimeout = setTimeout(() => {
      setFadeText(false);

      setTimeout(() => {
        setTextIndex((prevIndex) =>
          prevIndex >= texts.length - 1 ? 0 : prevIndex + 1,
        );
        setFadeCircle(true);
        setFadeText(true);
      }, TIME_TO_FADE);
    }, TIME_INTERVAL);

    return () => {
      clearTimeout(circleTimeout);
      clearTimeout(textTimeout);
    };
  }, [textIndex, timeToTypeText]);

  return (
    <>
      <span
        className={`inline-flex items-center text-black duration-300 dark:text-white ${
          fadeText ? 'opacity-1 translate-y-0' : 'translate-y-2 opacity-0'
        }`}
        key={textIndex}
      >
        {textToShow}{' '}
        <div
          className={`ml-2 h-3 w-3 items-center rounded-full bg-black duration-300 dark:bg-white ${
            fadeCircle ? '' : 'h-0 w-0 opacity-0'
          }`}
        />
      </span>
    </>
  );
};
