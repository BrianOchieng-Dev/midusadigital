
import '../index.css';
import logo from '../assets/logo3.png';
import { FaHome, FaUser, FaLayerGroup, FaTags, FaPaperPlane } from 'react-icons/fa';
import { useState } from 'react';

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="nav-glass">
      <div className="navbox">
        <img src={logo} alt="Midusa Digital logo" className="logo" />

        <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
          <a href="#home"><FaHome /> Home</a>
          <a href="#about"><FaUser /> About</a>
          <a href="#service"><FaLayerGroup /> Services</a>
          <a href="#price"><FaTags /> Pricing</a>
          <a href="#contact" id="contact"><FaPaperPlane /> Contact</a>
        </nav>

        <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          <div className={menuOpen ? 'bar active' : 'bar'}></div>
          <div className={menuOpen ? 'bar active' : 'bar'}></div>
          <div className={menuOpen ? 'bar active' : 'bar'}></div>
        </div>
      </div>
    </header>
  );
}

export default Nav;
