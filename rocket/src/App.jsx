import Header from "./assets/header/Header";
import Hero from "./assets/Hero";
import Rockets from "./assets/rockets/Rockets";
import Testimonials from "./assets/testimonials/Testimonials";
import Contact from "./assets/Contact";
import Footer from "./assets/Footer";

function App() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-black dark:text-white">
      <Header />
      <Hero />
      <Rockets />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
