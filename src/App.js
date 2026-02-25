import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './layout/Header';
import Home from "./pages/Accueil";
import About from "./pages/Apropos";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <Header />
      <div className="app-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/a-propos" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;