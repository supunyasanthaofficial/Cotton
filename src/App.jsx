import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Fashions from "./pages/Fashions";
import NewArrivals from "./pages/NewArrivals";
import Sales from "./pages/Sales";

import Footer from "./components/Footer";
import Navigation from "./components/Navigation";

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/fashions" element={<Fashions />} />
          <Route path="/new-arrivals" element={<NewArrivals />} />{" "}
          <Route path="/sales" element={<Sales />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
