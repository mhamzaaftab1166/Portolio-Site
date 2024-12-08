import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./Components/About/About";
import Experience from "./Components/Experience/Experience";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Projects from "./Components/Projects/Projects";
import VideoPage from "./Components/Projects/Videopage";

function App() {
  return (
    <Router>
      <div className="bg-[#171d32] h-auto w-full overflow-hidden">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
                <About />
                <Experience />
                <Projects />
              </>
            }
          />
          <Route path="/video" element={<VideoPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
