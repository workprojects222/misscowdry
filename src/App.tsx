import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Programs from './components/Programs';
import MissCowdrayPark from './components/MissCowdrayPark';
import Impact from './components/Impact';
import Gallery from './components/Gallery';
import Quote from './components/Quote';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ComingSoon from './components/ComingSoon';

export default function App() {
  const [page, setPage] = useState<'home' | 'coming-soon'>(() =>
    window.location.hash === '#coming-soon' ? 'coming-soon' : 'home'
  );

  useEffect(() => {
    const handleHashChange = () => {
      setPage(window.location.hash === '#coming-soon' ? 'coming-soon' : 'home');
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  if (page === 'coming-soon') {
    return <ComingSoon onBack={() => (window.location.hash = '')} />;
  }

  return (
    <main className="relative min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Programs />
      <MissCowdrayPark />
      <Impact />
      <Gallery />
      <Quote />
      <Contact />
      <Footer />
    </main>
  );
}
