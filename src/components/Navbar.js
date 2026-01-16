import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function closeMobileMenu() {
  const nav = document.getElementById('ftco-nav');
  const toggler = document.querySelector('.navbar-toggler');
  if (nav && nav.classList.contains('show')) {
    nav.classList.remove('show');
    nav.setAttribute('aria-expanded', 'false');
    if (toggler) toggler.setAttribute('aria-expanded', 'false');
  }
}

function Navbar() {
  const navbarStyle = `
    @media (max-width: 991.98px) {
      #ftco-navbar {
        background-color: white !important;
      }
      #ftco-navbar .navbar-brand {
        color: #000 !important;
      }
      #ftco-navbar .navbar-brand span {
        color: #ff6b6b !important;
      }
      #ftco-navbar .navbar-toggler {
        color: #000 !important;
        font-size: 18px !important;
        font-weight: 600 !important;
      }
      #ftco-navbar .navbar-toggler span {
        color: #000 !important;
      }
      #ftco-navbar .navbar-dark .navbar-nav .nav-link {
        color: #333 !important;
      }
      #ftco-navbar .navbar-dark .navbar-nav .nav-link.active {
        color: #ff6b6b !important;
      }
    }
  `;

  return (
    <>
      <style>{navbarStyle}</style>
      <nav
        className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light site-navbar-target"
        id="ftco-navbar"
        style={{ paddingLeft: '20px', paddingRight: '20px' }}
      >
      <style>{`
        @media (max-width: 991.98px) {
          #ftco-navbar {
            padding-left: 6px !important;
            padding-right: 6px !important;
          }
        }
      `}</style>
        <div className="container-fluid px-5" style={{ maxWidth: '100%' }}>
        <style>{`
          @media (max-width: 991.98px) {
            .container-fluid.px-5 {
              padding-left: 6px !important;
              padding-right: 6px !important;
            }
          }
        `}</style>
        <Link className="navbar-brand" to="/" style={{marginLeft: 0, paddingLeft: 0}}>
          <img src="/images/logo.png" alt="MecviTech Logo" style={{height: '40px', color: '#000000'}} /> Mecvi<span>Tech</span>
        </Link>
        <button className="navbar-toggler js-fh5co-nav-toggle fh5co-nav-toggle" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="oi oi-menu"></span> Menu
        </button>

        <div className="collapse navbar-collapse" id="ftco-nav">
          <ul className="navbar-nav nav ml-auto" style={{marginRight: 0, paddingRight: 0, marginLeft: 0, paddingLeft: 0, gap: '0px'}}>
            <li className="nav-item"><NavLink to="/" onClick={closeMobileMenu} className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}><span style={{fontSize: '17px', fontWeight: '600'}}>Home</span></NavLink></li>
            <li className="nav-item"><NavLink to="/about" onClick={closeMobileMenu} className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}><span style={{fontSize: '17px', fontWeight: '600'}}>About</span></NavLink></li>
            <li className="nav-item"><NavLink to="/services" onClick={closeMobileMenu} className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}><span style={{fontSize: '17px', fontWeight: '600'}}>Services</span></NavLink></li>
            <li className="nav-item"><NavLink to="/projects" onClick={closeMobileMenu} className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}><span style={{fontSize: '17px', fontWeight: '600'}}>Projects</span></NavLink></li>
            <li className="nav-item"><NavLink to="/testimonials" onClick={closeMobileMenu} className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}><span style={{fontSize: '17px', fontWeight: '600'}}>Testimony</span></NavLink></li>
            <li className="nav-item" style={{marginRight: 0, paddingRight: 0}}><NavLink to="/contact" onClick={closeMobileMenu} className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} style={{paddingRight: 0}}><span style={{fontSize: '17px', fontWeight: '600'}}>Contact</span></NavLink></li>
          </ul>
        </div>
      </div>
    </nav>
    </>
  );
}

export default Navbar;
