import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Programs from './pages/Programs';
import GetInvolved from './pages/GetInvolved';
import Contact from './pages/Contact';
import News from './pages/News';
import Governance from './pages/Governance';
import Donate from './pages/Donate';
import Impact from './pages/Impact';
import IkoTambaya from './pages/IkoTambaya';
import Trustees from './pages/Trustees';
import './App.css';

export default function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/about/iko-tambaya" element={<IkoTambaya />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/get-involved" element={<GetInvolved />} />
            <Route path="/news" element={<News />} />
            <Route path="/Governance" element={<Governance />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/Impact" element={<Impact />} />
            <Route path="/Trustees" element={<Trustees />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
