'use client';

import { useNavigationProvider } from '@/providers/navigation.provider';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { IoMail } from 'react-icons/io5';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { Fade } from './Fade';
import { MdOutlineFileDownload } from 'react-icons/md';
import { sendGAEvent } from '@next/third-parties/google';

export default function Contact({
  section,
}: {
  section: { title: string; slug: string };
}) {
  const ref = useRef(null);
  const { setActiveLink } = useNavigationProvider();

  const isInView = useInView(ref, {
    margin: '-50% 0px -50% 0px',
  });

  const handleLinkedInClick = () => {
    sendGAEvent({
      action: 'linkedin-button-clicked',
      category: 'Contact Section',
      label: 'Linkedin Button',
    });
  };

  const handleGithubClick = () => {
    sendGAEvent({
      action: 'github-button-clicked',
      category: 'Contact Section',
      label: 'Github Button',
    });
  };

  const handleEmailClick = () => {
    sendGAEvent({
      action: 'email-button-clicked',
      category: 'Contact Section',
      label: 'Email Button',
    });
  };

  const handleDownloadCvClick = () => {
    sendGAEvent({
      action: 'download-cv-button-clicked',
      category: 'Contact Section',
      label: 'Download CV Button',
    });
  };

  useEffect(() => {
    if (isInView) {
      setActiveLink(section.slug);
    }
  }, [isInView, section.slug, setActiveLink]);

  return (
    <motion.section id='contact' ref={ref} className='h-screen p-10'>
      <div className='relative flex h-[50rem] w-full items-center justify-center bg-neutral-950 bg-dot-primary-500'>
        <div className='pointer-events-none absolute inset-0 flex items-center justify-center bg-neutral-950 [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)]'></div>
        <div className='grid max-w-[55rem]'>
          <div className='py-[5rem]'>
            <Fade direction='right'>
              <h2 className='relative z-20 bg-gradient-to-b from-secondary-100 to-secondary-600 bg-clip-text text-4xl font-bold text-transparent sm:text-7xl'>
                Get in touch.
              </h2>
            </Fade>
            <Fade direction='right'>
              <p className='text-2xl'>
                {`Have any questions or want to collaborate? Feel free to reach out!
            I'm always open to new opportunities and discussions.`}
              </p>
            </Fade>
          </div>
          <div className='group grid gap-5'>
            <Fade direction='up'>
              <Link
                href={'https://linkedin.com/in/refifauzan'}
                target='_blank'
                className='grid'
                onClick={handleLinkedInClick}
              >
                <DefaultButton
                  text='Connect with me on Linkedin'
                  icon={
                    <FaLinkedinIn
                      size={30}
                      className='text-secondary-100 opacity-70 transition duration-150 group-hover:translate-x-1'
                    />
                  }
                />
              </Link>
            </Fade>
            <Fade direction='up'>
              <Link
                href={'mailto:refi.ahmad.fauzn@gmail.com'}
                className='grid'
                onClick={handleEmailClick}
              >
                <DefaultButton
                  text='Email me'
                  icon={
                    <IoMail
                      size={30}
                      className='text-secondary-100 opacity-70 transition duration-150 group-hover:translate-x-1'
                    />
                  }
                />
              </Link>
            </Fade>
            <Fade direction='up'>
              <Link
                href={'https://github.com/djebreds'}
                target='_blank'
                className='grid'
                onClick={handleGithubClick}
              >
                <DefaultButton
                  text='My Github'
                  icon={
                    <FaGithub
                      size={30}
                      className='text-secondary-100 opacity-70 transition duration-150 group-hover:translate-x-1'
                    />
                  }
                />
              </Link>
            </Fade>

            <Link
              href={'/assets/refi-ahmad-fauzan-cv.pdf'}
              download={true}
              onClick={handleDownloadCvClick}
              className='relative inline-flex h-[5rem] overflow-hidden rounded-full p-[1px] transition-all hover:scale-110 focus:scale-110 active:scale-105'
            >
              <span className='absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,theme(colors.secondary.200)_0%,theme(colors.primary.500)_10%,theme(colors.primary.600)_100%)]' />
              <span className='inline-flex h-full w-full cursor-pointer items-center justify-center gap-3 rounded-full bg-opacity-10 px-6 py-1 text-2xl font-medium text-white backdrop-blur-3xl'>
                <MdOutlineFileDownload
                  size={30}
                  className='transition duration-150 group-hover:translate-x-1'
                />
                Download My CV
              </span>
            </Link>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const DefaultButton = ({ text, icon }: { text: string; icon?: any }) => {
  const divRef = useRef<HTMLButtonElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!divRef.current || isFocused) return;

    const div = divRef.current;
    const rect = div.getBoundingClientRect();

    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(1);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <>
      <button
        ref={divRef}
        onMouseMove={handleMouseMove}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className='relative inline-flex h-[5rem] items-center justify-center overflow-hidden rounded-full border border-gray-800 bg-gray-950 bg-gradient-to-t from-[#fff] to-secondary-500 bg-clip-text px-6 font-medium text-transparent text-white shadow-2xl transition-all hover:scale-110 focus:scale-110 active:scale-105'
      >
        <div
          className='pointer-events-none absolute -inset-px opacity-0 transition duration-300'
          style={{
            opacity,
            background: `radial-gradient(300px circle at ${position.x}px ${position.y}px, rgba(194,229,255,.1), #0000000f)`,
          }}
        />
        <span className='flex items-center gap-5 bg-gradient-to-t from-white to-secondary-500 bg-clip-text text-2xl font-normal text-transparent'>
          {icon}
          {text}
        </span>
      </button>
    </>
  );
};
