import './App.css';
import BackToTop from './common/BackToTop';
import About from './components/About';
import Faq from './components/Faq';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Testimonials from './components/Testimonials';

function App() {
  return (
    <>
      <Hero />
      <About />
      <Testimonials />
      <Faq />
      <Footer />
      <BackToTop/>
    </>
  );
}

export default App;
