import Home from "./components/Home";
import Project from "./components/Project";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Education from "./components/Education";

import Skills from "./components/Skills";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 via-stone-700 to-gray-900 text-gray-100">
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-12">
        {/* About Section */}
        <Home />
<Skills/>
        {/* Projects Section */}
        <Project />
        {/* Education Section */}
        <Education />
        {/* Contact Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
