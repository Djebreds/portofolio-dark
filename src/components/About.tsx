'use client';

import { useNavigationProvider } from '@/providers/navigation.provider';
import { motion, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { TextTypingEffectWithDelay } from './TypingEffectDelay';
import Badge from './Badge';
import DefaultButton from './DefaultButton';
import { HiBriefcase } from 'react-icons/hi';
import Link from 'next/link';
import { Fade } from './Fade';

export default function About({
  section,
}: {
  section: { title: string; slug: string };
}) {
  const ref = useRef(null);
  const { setActiveLink } = useNavigationProvider();

  const isInView = useInView(ref, {
    margin: '-50% 0px -50% 0px',
  });

  useEffect(() => {
    if (isInView) {
      setActiveLink(section.slug);
    }
  }, [isInView, section.slug, setActiveLink]);

  const heading =
    'Crafting robust system and ensuring seamless data flow as a backend specialist.';

  const parts = heading.split(/(robust system|seamless data flow)/);

  return (
    <motion.section id='home' ref={ref} className='relative h-fit py-10'>
      <div className='mx-3 my-20 flex items-center justify-center text-center'>
        <div className='max-w-[53rem]'>
          <Fade direction='up'>
            <Badge text='appearance != reality.' />
          </Fade>

          <h1 className='my-10 text-4xl font-bold sm:text-6xl'>
            {parts.map((part, i) => (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.5,
                  delay: i / 3,
                }}
                key={i}
                className={
                  part === 'robust system' || part === 'seamless data flow'
                    ? 'bg-gradient-to-b from-secondary-100 to-secondary-600 bg-clip-text text-transparent'
                    : ''
                }
              >
                {part}{' '}
              </motion.span>
            ))}
          </h1>
          <div className='h-36 sm:h-14'>
            <h3 className='text-3xl font-semibold sm:text-3xl'>
              <TextTypingEffectWithDelay />
            </h3>
          </div>
          <Fade direction='up' className='my-5 space-y-5'>
            <h6>
              {`Specializing in backend development, I bring nearly three years of experience crafting efficient solutions with Ruby on Rails and NestJS, along with frontend skills in React.js and Next.js.`}
            </h6>
            <h6>
              {`Graduated with a major in Computer Software Engineering from
        Vocational High School, I bring a strong foundation in software
        engineering principles and hands-on experience in backend and frontend
        development.`}
            </h6>
          </Fade>

          <Fade direction='up' className='my-10'>
            <Link href={'#project'}>
              <DefaultButton
                text='Show my expertise'
                icon={
                  <HiBriefcase className='h-5 w-5 text-secondary-100 opacity-70 transition duration-150 group-hover:translate-x-1' />
                }
              />
            </Link>
          </Fade>
        </div>
      </div>
    </motion.section>
  );
}
