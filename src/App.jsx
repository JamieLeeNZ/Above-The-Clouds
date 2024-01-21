import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Crazy from './pages/Crazy';

function App() {
  return (
    <Router>
      <nav className="items-center">
        <ul style={{ listStyle: 'none', display: 'flex', gap: '20px', padding: '0' }}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/crazy">Crazy</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/crazy" element={<Crazy />} />
      </Routes>
    </Router>
  );
}

export default App;
