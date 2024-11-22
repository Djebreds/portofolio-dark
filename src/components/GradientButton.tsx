const ButtonRotatingBackgroundGradient = ({ text }: { text: string }) => {
  return (
    <button className='relative inline-flex h-12 overflow-hidden rounded-full p-[1px] transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-50'>
      <span className='absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#C2E5FF_0%,#0077CC_50%,#003153_100%)]' />
      <span className='inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-gray-950 px-8 py-1 text-sm font-medium text-gray-50 backdrop-blur-3xl'>
        {text}
      </span>
    </button>
  );
};

export default ButtonRotatingBackgroundGradient;
