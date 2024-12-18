import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Page from "./components/Page";
import Video from "./components/Vid"; // Assuming you have a background video
import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience"; // Your 3D experience page
import Loader from "./components/Loader";
import Music from "./components/Music"; // Import Music Page
import About from "./components/About"; // Import the About page
import Contact from "./components/Contact";







export default function App() {
  return (
    <Router>
      <Header /> {/* Header is at the top */}
      <Routes>
        {/* Main Page */}
        <Route
          path="/"
          element={
            <>
              <Video />
              <Canvas shadows camera={{ position: [0, 0, 8], fov: 42 }}>
                <Experience />
              </Canvas>
            </>
          }
        />
        {/* Music Page Route */}
        <Route path="/music" element={<Music />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        {/* Dynamic Pages */}
        {/* <Route path="/about" element={<Page title="About Us" content="Learn more about the band." onBack={() => (window.location.href = "/")} />} />
        <Route path="/contact" element={<Page title="Contact" content="Get in touch with us." onBack={() => (window.location.href = "/")} />} /> */}



      </Routes>
    </Router>
  );
}







