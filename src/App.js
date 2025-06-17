import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import "./App.css";
import MindHack2025 from "./pages/mindhack2025";
import MindHackHomepage from "./pages/Home";
import Navbar from "./pages/NavBar";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-950 relative overflow-hidden">
        {/* Technical Grid Background */}
        <div className="fixed inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255,165,0,0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,165,0,0.1) 1px, transparent 1px)
              `,
              backgroundSize: "50px 50px",
            }}
          />
        </div>

        <Navbar />

        <Routes>
          <Route path="/" element={<MindHackHomepage />} />
          <Route path="/mindhack-2025" element={<MindHack2025 />} />
          {/* <Route path="/past-events" element={<PastEvents />} />
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/register" element={<Register />} /> */}
        </Routes>

        {/* Custom Styles */}
        <style jsx global>{`
          @import url("https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&display=swap");

          * {
            font-family: "Orbitron", monospace !important;
          }

          .glow-text {
            text-shadow: 0 0 10px rgba(255, 165, 0, 0.5);
          }
          .glow-text-strong {
            text-shadow: 0 0 20px rgba(255, 165, 0, 0.6),
              0 0 30px rgba(255, 165, 0, 0.4);
          }
          .glow-text-orange {
            text-shadow: 0 0 15px rgba(255, 165, 0, 0.8),
              0 0 25px rgba(255, 165, 0, 0.5);
          }
          .glow-text-gradient {
            filter: drop-shadow(0 0 10px rgba(255, 165, 0, 0.5));
          }
          .glow-dot {
            box-shadow: 0 0 15px rgba(255, 165, 0, 0.8),
              0 0 25px rgba(255, 165, 0, 0.5);
          }
          .glow-button {
            box-shadow: 0 0 20px rgba(255, 165, 0, 0.3);
          }
          .glow-button:hover {
            box-shadow: 0 0 30px rgba(255, 165, 0, 0.5),
              0 0 40px rgba(255, 165, 0, 0.3);
          }
        `}</style>
      </div>
    </Router>
  );
}

export default App;
