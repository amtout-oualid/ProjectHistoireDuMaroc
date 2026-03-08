import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Definition from './components/Definition';
import HorizontalScroll from './components/HorizontalScroll';
import Rayonnement from './components/Rayonnement';
import ArtMusic from './components/ArtMusic';
import Histoire from './components/Histoire';

function App() {
  return (
    <div className="bg-tamaghrabit-dark min-h-screen text-white font-sans selection:bg-tamaghrabit-gold selection:text-black">
      <Navbar />

      <Hero />
      <Definition />
      <HorizontalScroll />
      <Rayonnement />
      <ArtMusic />
      <Histoire />

      {/* Footer */}
      <footer className="w-full py-8 md:py-12 text-center bg-andalusia-navy border-t border-andalusia-gold/20 px-4">
        <div className="font-serif text-xl md:text-2xl tracking-wider text-andalusia-gold mb-3 md:mb-4">TAMAGHRABIT</div>
        <p className="text-andalusia-cream/40 text-xs md:text-sm font-sans">© 2026. Celebrating the Moroccan way of life.</p>
      </footer>

    </div>
  );
}

export default App;
