import "../styles/globals.css";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Projects from "../components/Projects";
function MyApp() {
  return (
    <div className="bg-black min-h-screen h-full text-gray-200">
      <Navbar />
      <About />
      <Projects />
    </div>
  );
}

export default MyApp;
