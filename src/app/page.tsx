import NavigationProvider from '../providers/navigation.provider';
import Navigation from '../components/Navigation';
import About from '@/components/About';

const sections = [
  {
    title: 'About',
    slug: 'about',
  },
  {
    title: 'Skill',
    slug: 'skill',
  },
  {
    title: 'Project',
    slug: 'project',
  },
  {
    title: 'Blog',
    slug: 'blog',
  },
  {
    title: 'Contact',
    slug: 'contact',
  },
];

export default function Home() {
  return (
    <>
      <NavigationProvider>
        <div className='relative'>
          <div className='absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]'></div>
        </div>
        <Navigation links={sections} />
        <main>
          <About />
        </main>
      </NavigationProvider>
      <footer></footer>
    </>
  );
}
