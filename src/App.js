import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./Pages/Landing"; // Updated import statement
import Contact from "./Pages/Contact";
import AboutPod from "./Pages/AboutPod";
import AboutHost from "./Pages/AboutHost";
import Navigation from "./components/Navigation"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="App">
        <Navigation />
      <Router>
        <Routes>
          <Route exact path="/" element={<Landing />} /> {/* Updated Route component */}
          <Route path="/aboutpod" element={<AboutPod />} />
          <Route path="/abouthost" element={<AboutHost />} />
          <Route path="/contact" element={<Contact />} />
          {/* Add more routes for other pages */}
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
