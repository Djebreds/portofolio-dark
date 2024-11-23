'use client';

import { useNavigationProvider } from '@/providers/navigation.provider';
import { motion, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { Timeline } from './Timeline';
import Image from 'next/image';
import basicBoyolaliWeb1 from '@public/assets/projects/basic-boyolali-web-1.png';
import basicBoyolaliWeb2 from '@public/assets/projects/basic-boyolali-web-2.png';
import basicSchoolWeb1 from '@public/assets/projects/basic-school-web-1.png';
import basicSchoolWeb2 from '@public/assets/projects/basic-school-web-2.png';
import emveepBpkMobile1 from '@public/assets/projects/emveep-bpk-mobile-1.jpg';
import emveepBpkMobile2 from '@public/assets/projects/emveep-bpk-mobile-2.png';
import emveepBpkWebAdminSiswa from '@public/assets/projects/emveep-bpk-web-admin-siswa.png';
import emveepBpkWebCuriculum from '@public/assets/projects/emveep-bpk-web-curiculum.png';
import emveepBpkWebPsb from '@public/assets/projects/emveep-bpk-web-psb.png';
import emveepBpkWebSso from '@public/assets/projects/emveep-bpk-web-sso.png';
import emveepBpkWeb from '@public/assets/projects/emveep-bpk-web.png';
import emveepBrainyBunchMobile1 from '@public/assets/projects/emveep-brainy-bunch-mobile-1.png';
import emveepBrainyBunchMobile2 from '@public/assets/projects/emveep-brainy-bunch-mobile-2.png';
import emveepBrainyBunchWeb1 from '@public/assets/projects/emveep-brainy-bunch-web-1.png';
import emveepCompanyProfile1 from '@public/assets/projects/emveep-company-profile-1.png';
import emveepCompanyProfile2 from '@public/assets/projects/emveep-company-profile-2.png';
import emveepProperty1 from '@public/assets/projects/emveep-property-1.png';
import emveepProperty2 from '@public/assets/projects/emveep-property-2.png';
import emveepWegeeks1 from '@public/assets/projects/emveep-wegeeks-1.png';
import emveepWegeeks3 from '@public/assets/projects/emveep-wegeeks-3.png';
import halalinAcademy1 from '@public/assets/projects/halalin-academy-1.png';
import halalinAcademy2 from '@public/assets/projects/halalin-academy-2.png';
import halalinAcademy3 from '@public/assets/projects/halalin-academy-3.png';
import halalinBackoffice1 from '@public/assets/projects/halalin-backoffice-1.png';
import halalinBackoffice2 from '@public/assets/projects/halalin-backoffice-2.png';
import halalinBackoffice3 from '@public/assets/projects/halalin-backoffice-3.png';
import halalinSso1 from '@public/assets/projects/halalin-sso-1.png';
import steadyMobile1 from '@public/assets/projects/steady-mobile-1.png';
import steadyMobile2 from '@public/assets/projects/steady-mobile-2.png';
import steadyWeb1 from '@public/assets/projects/steady-web-1.png';
import steadyWeb2 from '@public/assets/projects/steady-web-2.png';
import steadyWeb3 from '@public/assets/projects/steady-web-3.png';
import supirinMobile1 from '@public/assets/projects/supirin-mobile-1.png';
import supirinMobile2 from '@public/assets/projects/supirin-mobile-2.png';
import supirinWeb1 from '@public/assets/projects/supirin-web-1.png';
import supirinWeb3 from '@public/assets/projects/supirin-web-3.png';
import supriinWeb2 from '@public/assets/projects/supriin-web-2.png';

export default function Project({
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

  const data = [
    {
      title: 'Late 2023 - Present',
      content: (
        <div>
          <div className='mb-10'>
            <p className='mb-8 text-sm text-neutral-800 dark:text-neutral-200'>
              Building School Management with powerful platform designed for BPK
              Penabur with microservices architecture. My main contributions
              were in developing and managing these modules as{' '}
              <span className='underline'>Backend Developer</span>:
            </p>
            <ul className='ml-5 list-disc text-sm text-neutral-800 dark:text-neutral-200'>
              <li className='my-3'>
                <span className='font-bold'>School Admin Module:</span>
                <br />
                Manages school operations like student, staff, and academic
                calendar.
              </li>
            </ul>
            <div className='grid grid-cols-2 gap-4'>
              <Image
                src={emveepBpkWebAdminSiswa}
                alt='Emveep project bpk admin siswa 1'
                width={500}
                height={500}
                className='h-20 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60'
              />
              <Image
                src={emveepBpkWebPsb}
                alt='Emveep project bpk admin siswa 2'
                width={500}
                height={500}
                className='h-20 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60'
              />
            </div>
            <p className='my-1 text-sm italic'>
              <span className='font-semibold'>Tech stack: </span>
              Nest.js, PostgreSQL, TypeORM, Redis, BullMQ, RabbitMQ, Git,
              GitLab, Docker, Kubernetes, RESTful API, Swagger, Prometheus,
              Google Oauth, JWT, Firebase Cloud Messaging, AWS S3, AWS EC2,
              Cloudflare.
            </p>
          </div>
          <div className='mb-10'>
            <ul className='ml-5 list-disc text-sm text-neutral-800 dark:text-neutral-200'>
              <li className='my-3'>
                <span className='font-bold'>Single Sign On (SSO) Module:</span>
                <br />
                Provides secure login for all users with one set of credentials.
              </li>
            </ul>
            <div className='grid grid-cols-2 gap-4'>
              <Image
                src={emveepBpkWebSso}
                alt='Emveep project bpk sso 1'
                width={500}
                height={500}
                className='h-20 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60'
              />
              <Image
                src={emveepBpkWeb}
                alt='Emveep project bpk sso 2'
                width={500}
                height={500}
                className='h-20 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60'
              />
            </div>
            <p className='my-1 text-sm italic'>
              <span className='font-semibold'>Tech stack: </span>
              Nest.js, PostgreSQL, TypeORM, Redis, BullMQ, RabbitMQ, Git,
              GitLab, Docker, Kubernetes, RESTful API, Swagger, Prometheus,
              Google Oauth, JWT, Firebase Cloud Messaging, AWS S3, AWS EC2,
              Cloudflare.
            </p>
          </div>
          <div className='mb-10'>
            <ul className='ml-5 list-disc text-sm text-neutral-800 dark:text-neutral-200'>
              <li className='my-3'>
                <span className='font-bold'>Curriculum Module:</span>
                <br />
                Handles curriculum, schedules, announcement, and course
                assignments.
              </li>
            </ul>
            <div className='grid grid-cols-2 gap-4'>
              <div className='flex gap-3'>
                <Image
                  src={emveepBpkMobile1}
                  alt='Emveep project bpk curriculum 1'
                  width={300}
                  height={500}
                  className='h-20 w-[8rem] rounded-lg object-cover shadow-md md:h-44 lg:h-full'
                />
                <Image
                  src={emveepBpkMobile2}
                  alt='Emveep project bpk curriculum 2'
                  width={300}
                  height={500}
                  className='h-20 w-[8rem] rounded-lg object-cover shadow-md md:h-44 lg:h-full'
                />
              </div>
              <Image
                src={emveepBpkWebCuriculum}
                alt='Emveep project bpk curriculum 3'
                width={500}
                height={500}
                className='h-20 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60'
              />
            </div>
            <p className='my-1 text-sm italic'>
              <span className='font-semibold'>Tech stack: </span>
              Nest.js, PostgreSQL, TypeORM, Redis, BullMQ, RabbitMQ, Git,
              GitLab, Docker, Kubernetes, RESTful API, Swagger, Prometheus,
              Google Oauth, JWT, Firebase Cloud Messaging, AWS S3, AWS EC2,
              Cloudflare.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: 'Late 2023 - Late 2024',
      content: (
        <div>
          <p className='mb-8 text-sm text-neutral-800 dark:text-neutral-200'>
            Helped Halalin grow in the global halal industry by providing halal
            certification, supervisor training, and digital solutions. My main
            contributions were in developing and managing these applications as{' '}
            <span className='underline'>Fullstack Developer</span> :
          </p>
          <div className='mb-10'>
            <ul className='ml-5 list-disc text-sm text-neutral-800 dark:text-neutral-200'>
              <li className='my-3'>
                <span className='font-bold'>Halalin Academy</span>
                <br />A Learning Management System for halal certification
                training, providing courses and resources for professionals.
              </li>
            </ul>
            <div className='grid grid-cols-2 gap-4'>
              <Image
                src={halalinAcademy1}
                alt='Halalin project backoffice 1'
                width={500}
                height={500}
                className='h-20 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60'
              />
              <Image
                src={halalinAcademy2}
                alt='Halalin project backoffice 2'
                width={500}
                height={500}
                className='h-20 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60'
              />
              <Image
                src={halalinAcademy3}
                alt='Halalin project academy 3'
                width={500}
                height={500}
                className='h-20 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60'
              />
            </div>
            <p className='my-1 text-sm italic'>
              <span className='font-semibold'>Tech stack: </span>
              Ruby on Rails, PostgreSQL, Redis Cluster, Sidekiq, Git, Github,
              HoneyBadger, SCSS, Hotwire, RSpec, Sentry, Docker, Digital Ocean,
              Cloudflare.
            </p>
          </div>
          <div className='mb-10'>
            <ul className='ml-5 list-disc text-sm text-neutral-800 dark:text-neutral-200'>
              <li className='my-3'>
                <span className='font-bold'>Backoffice</span>
                <br />
                An admin tool to manage certification processes, track progress,
                and generate reports for better efficiency.
              </li>
            </ul>
            <div className='grid grid-cols-2 gap-4'>
              <Image
                src={halalinBackoffice1}
                alt='Halalin project backoffice 1'
                width={500}
                height={500}
                className='h-20 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60'
              />
              <Image
                src={halalinBackoffice2}
                alt='Halalin project backoffice 2'
                width={500}
                height={500}
                className='h-20 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60'
              />
              <Image
                src={halalinBackoffice3}
                alt='Halalin project backoffice 3'
                width={500}
                height={500}
                className='h-20 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60'
              />
            </div>
            <p className='my-1 text-sm italic'>
              <span className='font-semibold'>Tech stack: </span>
              Ruby on Rails, PostgreSQL, Redis Cluster, Sidekiq, Git, Github,
              HoneyBadger, SCSS, Hotwire, RSpec, Sentry, Docker, Digital Ocean,
              Cloudflare, Mixpanel, Google Analytics.
            </p>
          </div>
          <div className='mb-10'>
            <ul className='ml-5 list-disc text-sm text-neutral-800 dark:text-neutral-200'>
              <li className='my-3'>
                <span className='font-bold'>Single Sign-On (SSO)</span>
                <br />A secure login system that allows users to access all
                Halalin platforms with a single set of credentials.
              </li>
            </ul>
            <div className='grid grid-cols-2 gap-4'>
              <Image
                src={halalinSso1}
                alt='Halalin project sso'
                width={500}
                height={500}
                className='h-20 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60'
              />
            </div>
            <p className='my-1 text-sm italic'>
              <span className='font-semibold'>Tech stack: </span>
              Ruby on Rails, PostgreSQL, Redis Cluster, Sidekiq, Git, Github,
              HoneyBadger, SCSS, Hotwire, RSpec, Sentry, Docker, Digital Ocean,
              Cloudflare.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: 'Mid 2023 - Late 2023',
      content: (
        <div>
          <div className='mb-10'>
            <p className='mb-8 text-sm text-neutral-800 dark:text-neutral-200'>
              During my time working at a startup studio, I often developed
              multiple projects, and here are some of them :
            </p>
            <ul className='ml-5 list-disc text-sm text-neutral-800 dark:text-neutral-200'>
              <li className='my-3'>
                <span className='font-bold'>Property Listing</span>
                <br />
                Building a property listing application for properties in Bali.
                My main contributions were in developing and managing these
                applications as{' '}
                <span className='underline'>Fullstack Developer</span> :
              </li>
            </ul>
            <div className='grid grid-cols-2 gap-4'>
              <Image
                src={emveepProperty1}
                alt='Emveep project property 1'
                width={500}
                height={500}
                className='h-20 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60'
              />
              <Image
                src={emveepProperty2}
                alt='Emveep project property 2'
                width={500}
                height={500}
                className='h-20 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60'
              />
            </div>
            <p className='my-1 text-sm italic'>
              <span className='font-semibold'>Tech stack: </span>
              Ruby on Rails, PostgreSQL, Redis, Sidekiq, Git, Github, Hotwire,
              Bootstrap, Google Translate, Google Maps, Nginx, Docker.
            </p>
          </div>
          <div className='mb-10'>
            <ul className='ml-5 list-disc text-sm text-neutral-800 dark:text-neutral-200'>
              <li className='my-3'>
                <span className='font-bold'>Emveep Company Profile</span>
                <br />
                {`Develop a platform showcasing Emveep's services and expertise in the tech
industry. My contributions to the project include`}
                My main contributions were in developing and managing these
                applications as{' '}
                <span className='underline'>Fullstack Developer</span> :
              </li>
            </ul>
            <div className='grid grid-cols-2 gap-4'>
              <Image
                src={emveepCompanyProfile1}
                alt='Emveep project company profile 1'
                width={500}
                height={500}
                className='h-20 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60'
              />
              <Image
                src={emveepCompanyProfile2}
                alt='Emveep project company profile 2'
                width={500}
                height={500}
                className='h-20 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60'
              />
            </div>
            <p className='my-1 text-sm italic'>
              <span className='font-semibold'>Tech stack: </span>
              Next.js, Express.js, React Router, PostgreSQL, PrismaORM, Git,
              Gitlab, Docker, Vite, CSS, Google Analytics, Google Tags.
            </p>
          </div>
          <div className='mb-10'>
            <ul className='ml-5 list-disc text-sm text-neutral-800 dark:text-neutral-200'>
              <li className='my-3'>
                <span className='font-bold'>Weegeks</span>
                <br />
                Develop a leading online platform connecting businesses with
                skilled freelancers from various industries. My main
                contributions were in developing and managing these applications
                as <span className='underline'>Frontend Developer</span> :
              </li>
            </ul>
            <div className='grid grid-cols-2 gap-4'>
              <Image
                src={emveepWegeeks1}
                alt='Emveep project weegeks 1'
                width={500}
                height={500}
                className='h-20 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60'
              />
              <Image
                src={emveepWegeeks3}
                alt='Emveep project weegeks 2'
                width={500}
                height={500}
                className='h-20 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60'
              />
            </div>
            <p className='my-1 text-sm italic'>
              <span className='font-semibold'>Tech stack: </span>
              Next.js, React.js, React Query, React Router, React Redux, Git,
              Gitlab, Vite, Bootstrap.
            </p>
          </div>
          <div className='mb-10'>
            <ul className='ml-5 list-disc text-sm text-neutral-800 dark:text-neutral-200'>
              <li className='my-3'>
                <span className='font-bold'>BrainyBunch</span>
                <br />
                Develop an application designed for the world’s leader in
                Islamic Montessori education, providing a comprehensive platform
                for educators and students to enhance learning experiences. My
                main contributions were in developing and managing these
                applications as{' '}
                <span className='underline'>Backend Developer</span> :
              </li>
            </ul>
            <div className='grid grid-cols-2 gap-4'>
              <div className='flex gap-3'>
                <Image
                  src={emveepBrainyBunchMobile1}
                  alt='Emveep project brainy bunch mobile 1'
                  width={300}
                  height={500}
                  className='h-20 w-[8rem] rounded-lg object-cover shadow-md md:h-44 lg:h-full'
                />
                <Image
                  src={emveepBrainyBunchMobile2}
                  alt='Emveep project brainy bunch mobile 2'
                  width={300}
                  height={500}
                  className='h-20 w-[8rem] rounded-lg object-cover shadow-md md:h-44 lg:h-full'
                />
              </div>
              <Image
                src={emveepBrainyBunchWeb1}
                alt='Emveep project brainy bunch web 1'
                width={500}
                height={500}
                className='h-20 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60'
              />
            </div>
            <p className='my-1 text-sm italic'>
              <span className='font-semibold'>Tech stack: </span>
              Nest.js, PostgreSQL, PrismaORM, Redis, Docker, BullMQ, Git,
              Gitlab.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: 'Late 2021 - Early 2023',
      content: (
        <div>
          <p className='mb-8 text-sm text-neutral-800 dark:text-neutral-200'>
            During my time in school, I often took freelance jobs to improve my
            skills. Here are some of the projects I worked on.
          </p>
          <div className='mb-10'>
            <ul className='ml-5 list-disc text-sm text-neutral-800 dark:text-neutral-200'>
              <li className='my-3'>
                <span className='font-bold'>Supirin</span>
                <br />
                Building an online passenger transportation aggregator
                application designed to streamline ride-hailing services. My
                main contributions were in developing and managing these
                applications as{' '}
                <span className='underline'>
                  Fullstack Developer and Mobile Developer
                </span>{' '}
                :
              </li>
            </ul>
            <div className='grid grid-cols-2 gap-4'>
              <div className='flex gap-3'>
                <Image
                  src={supirinMobile1}
                  alt='Supirin project mobile 1'
                  width={300}
                  height={500}
                  className='h-20 w-[8rem] rounded-lg object-cover shadow-md md:h-44 lg:h-full'
                />
                <Image
                  src={supirinMobile2}
                  alt='Supirin project mobile 2'
                  width={300}
                  height={500}
                  className='h-20 w-[8rem] rounded-lg object-cover shadow-md md:h-44 lg:h-full'
                />
              </div>
              <Image
                src={supirinWeb1}
                alt='Supirin project web 1'
                width={500}
                height={500}
                className='h-20 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60'
              />
              <Image
                src={supriinWeb2}
                alt='Supirin project web 2'
                width={500}
                height={500}
                className='h-20 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60'
              />
              <Image
                src={supirinWeb3}
                alt='Supirin project web 3'
                width={500}
                height={500}
                className='h-20 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60'
              />
            </div>
            <p className='my-1 text-sm italic'>
              <span className='font-semibold'>Tech stack: </span>
              Ruby on Rails, Flutter, PostgreSQL, Redis, Sidekiq, RSpec,
              HoneyBadger, Hotwire, Sentry, Git, Github.
            </p>
          </div>
          <div className='mb-10'>
            <ul className='ml-5 list-disc text-sm text-neutral-800 dark:text-neutral-200'>
              <li className='my-3'>
                <span className='font-bold'>Basic School</span>
                <br />
                Develop an online Learning Management System (LMS) designed for
                those looking to become software engineers. It offers a
                bootcamp-style experience with a clear, structured curriculum to
                teach essential programming skills. My main contributions were
                in developing and managing these applications as{' '}
                <span className='underline'>Fullstack Developer</span> :
              </li>
            </ul>
            <div className='grid grid-cols-2 gap-4'>
              <Image
                src={basicSchoolWeb1}
                alt='Basic project basic school 1'
                width={500}
                height={500}
                className='h-20 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60'
              />
              <Image
                src={basicSchoolWeb2}
                alt='Basic project basic school 2'
                width={500}
                height={500}
                className='h-20 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60'
              />
            </div>
            <p className='my-1 text-sm italic'>
              <span className='font-semibold'>Tech stack: </span>
              Laravel, MySQL, Bootstrap, Livewire, Git, Gitlab.
            </p>
          </div>
          <div className='mb-10'>
            <ul className='ml-5 list-disc text-sm text-neutral-800 dark:text-neutral-200'>
              <li className='my-3'>
                <span className='font-bold'>PDAM Water Utility Finance</span>
                <br />
                Building a comprehensive financial management platform designed
                to streamline billing, payment processing, and reporting for
                water utility services. My main contributions were in developing
                and managing these applications as{' '}
                <span className='underline'>Fullstack Developer</span> :
              </li>
            </ul>
            <div className='grid grid-cols-2 gap-4'>
              <Image
                src={basicBoyolaliWeb1}
                alt='Basic project pdam 1'
                width={500}
                height={500}
                className='h-20 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60'
              />
              <Image
                src={basicBoyolaliWeb2}
                alt='Basic project pdam 2'
                width={500}
                height={500}
                className='h-20 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60'
              />
            </div>
            <p className='my-1 text-sm italic'>
              <span className='font-semibold'>Tech stack: </span>
              Laravel, MySQL, Bootstrap, Livewire, Git, Gitlab.
            </p>
          </div>
          <div className='mb-10'>
            <ul className='ml-5 list-disc text-sm text-neutral-800 dark:text-neutral-200'>
              <li className='my-3'>
                <span className='font-bold'>Steady Academy</span>
                <br />
                Building an online platform offering courses and learning
                resources. I led a team of six developers to build the
                application from scratch, covering front-end, back-end and
                mobile development. My main contributions were in developing and
                managing these applications as{' '}
                <span className='underline'>
                  Fullstack Developer and Mobile Developer
                </span>{' '}
                :
              </li>
            </ul>
            <div className='grid grid-cols-2 gap-4'>
              <div className='flex gap-3'>
                <Image
                  src={steadyMobile1}
                  alt='Steady project mobile 1'
                  width={300}
                  height={500}
                  className='h-20 w-[8rem] rounded-lg object-cover shadow-md md:h-44 lg:h-full'
                />
                <Image
                  src={steadyMobile2}
                  alt='Steady project mobile 2'
                  width={300}
                  height={500}
                  className='h-20 w-[8rem] rounded-lg object-cover shadow-md md:h-44 lg:h-full'
                />
              </div>
              <Image
                src={steadyWeb1}
                alt='Steady project web 1'
                width={500}
                height={500}
                className='h-20 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60'
              />
              <Image
                src={steadyWeb2}
                alt='Steady project web 2'
                width={500}
                height={500}
                className='h-20 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60'
              />
              <Image
                src={steadyWeb3}
                alt='Steady project web 3'
                width={500}
                height={500}
                className='h-20 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60'
              />
            </div>
            <p className='my-1 text-sm italic'>
              <span className='font-semibold'>Tech stack: </span>
              Laravel, Flutter, MySQL, Bootstrap, Livewire, Google Oauth,
              Firestore.
            </p>
          </div>
        </div>
      ),
    },
  ];

  return (
    <motion.section id='project' ref={ref} className='h-full'>
      <Timeline data={data} />
    </motion.section>
  );
}
