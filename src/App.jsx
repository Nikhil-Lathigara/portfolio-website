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
    <div className="min-h-screen bg-gradient-to-r from-gray-950 via-violet-950 to-gray-950 text-indigo-950">
      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6">
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
