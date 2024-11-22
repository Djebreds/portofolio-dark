export const TextReveal = ({ text }: { text: string }) => {
  return (
    <>
      {text.match(/./gu)!.map((char, index) => (
        <span
          className='animate-text-reveal inline-block [animation-fill-mode:backwards]'
          key={`${char}-${index}`}
          style={{ animationDelay: `${index * 0.05}s` }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </>
  );
};
