const BadgeTextGradient = ({ text }: { text: string }) => {
  return (
    <span className='inline-flex cursor-pointer items-center justify-center rounded-full border border-gray-800 bg-gray-950 px-3 py-1 text-xs font-medium text-gray-300 backdrop-blur-3xl'>
      <span className='to-secondary-500 bg-gradient-to-t from-[#fff] bg-clip-text text-transparent'>
        {text}
      </span>
    </span>
  );
};

export default BadgeTextGradient;
