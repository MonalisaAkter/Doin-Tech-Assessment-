import { useState } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';
import { Categories } from './components/sections/Categories';
import { Growth } from './components/sections/Growth';
import { CallToAction } from './components/sections/CallToAction';
import { Testimonials } from './components/sections/Testimonials';
import { AuthPage } from './components/pages/AuthPage';
import { Logo } from './components/ui/Logo';
import { SearchBar } from './components/ui/SearchBar';
import { Button } from './components/ui/Button';
import { NewsletterForm } from './components/ui/NewsletterForm';
import { testimonials } from './data/home';

export default function App() {
  const [page, setPage] = useState<'home' | 'login' | 'signup'>('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = (path: string) => setPage(path === '/signup' ? 'signup' : path === '/login' ? 'login' : 'home');
  if (page !== 'home') return <AuthPage mode={page} onBack={() => navigate('/')} onSubmit={() => undefined} />;
  const scrollTo = (id: string) => { document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }); setMenuOpen(false); };
  return (
    <div className="min-h-screen bg-snow text-gray-950">
      <header className="sticky top-0 z-50 border-b border-white/20 bg-blue-800/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1232px] items-center justify-between px-4 py-4 sm:px-6 lg:px-4"><Logo tone="light" />
          <nav className="hidden items-center gap-8 md:flex"><button onClick={() => scrollTo('categories')} className="font-satoshi text-label-m text-white/90 hover:text-lime-400">Categories</button><button onClick={() => scrollTo('creators')} className="font-satoshi text-label-m text-white/90 hover:text-lime-400">For Creators</button><button onClick={() => scrollTo('testimonials')} className="font-satoshi text-label-m text-white/90 hover:text-lime-400">Testimonials</button></nav>
          <div className="hidden items-center gap-3 sm:flex"><Button variant="outline" onClick={() => navigate('/login')}>Sign in</Button><Button variant="lime" onClick={() => navigate('/signup')}>Join us <ArrowRight className="h-4 w-4" /></Button></div>
          <button className="text-white md:hidden" aria-label="Toggle menu" onClick={() => setMenuOpen((v) => !v)}>{menuOpen ? <X /> : <Menu />}</button>
        </div>
        {menuOpen && <div className="border-t border-white/10 px-4 py-4 md:hidden"><div className="flex flex-col gap-4"><button onClick={() => scrollTo('categories')} className="text-left text-white">Categories</button><button onClick={() => scrollTo('creators')} className="text-left text-white">For Creators</button><button onClick={() => scrollTo('testimonials')} className="text-left text-white">Testimonials</button><div className="flex gap-3"><Button variant="outline" onClick={() => navigate('/login')}>Sign in</Button><Button variant="lime" onClick={() => navigate('/signup')}>Join us</Button></div></div></div>}
      </header>
      <main>
        <section className="relative overflow-hidden bg-blue-800 px-4 py-24 sm:px-6 lg:py-28"><div className="absolute inset-0 bg-grid opacity-60" /><div className="relative mx-auto flex max-w-[1050px] flex-col items-center text-center"><span className="mb-5 rounded-full bg-lime-400 px-4 py-2 font-satoshi text-label-s font-medium text-gray-950">Learn. Create. Grow.</span><h1 className="max-w-[850px] font-poppins text-4xl font-semibold leading-tight tracking-tight text-white md:text-6xl">Build skills that move your life forward.</h1><p className="mt-6 max-w-[760px] font-satoshi text-body-l text-white/80">Discover practical courses from passionate creators and turn knowledge into meaningful progress with ByteSpace.</p><div className="mt-9 w-full max-w-[600px]"><SearchBar /></div></div></section>
        <Categories /><Growth /><div id="testimonials"><Testimonials testimonials={testimonials} /></div><CallToAction onNavigate={navigate} />
      </main>
      <footer className="bg-gray-50 px-4 py-14 sm:px-6"><div className="mx-auto grid max-w-[1232px] gap-10 md:grid-cols-3"><div><Logo /><p className="mt-4 max-w-sm font-satoshi text-body-s text-gray-600">A modern learning platform for learners and creators.</p></div><div><h3 className="font-poppins font-semibold">Explore</h3><div className="mt-4 flex flex-col gap-2 font-satoshi text-body-s text-gray-600"><button className="text-left" onClick={() => scrollTo('categories')}>Categories</button><button className="text-left" onClick={() => scrollTo('creators')}>For creators</button></div></div><div><h3 className="font-poppins font-semibold">Stay in the loop</h3><p className="mt-2 font-satoshi text-body-s text-gray-600">Get updates about new courses and learning resources.</p><div className="mt-4"><NewsletterForm /></div></div></div><div className="mx-auto mt-10 max-w-[1232px] border-t border-gray-200 pt-6 font-satoshi text-body-xs text-gray-500">© 2026 ByteSpace. Built for the Doin-Tech assessment.</div></footer>
    </div>
  );
}
