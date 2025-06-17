import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import "./App.css";
import MindHack2025 from "./pages/mindhack2025";
import MindHackHomepage from "./pages/Home";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        {/* <Header /> */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<MindHackHomepage />} />
            <Route path="mindhack-2025" element={<MindHack2025 />} />
            {/* <Route path="/" element={<Home />} />
            <Route path="/events" element={<Events />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/history" element={<History />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} /> */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
