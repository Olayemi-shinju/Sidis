import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/style.css'
const Nav = () => {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  const openOver = () => {
    setIsOverlayOpen(true);
  };

  const closeOver = () => {
    setIsOverlayOpen(false);
  };

 

  return (
    <div>
      <nav className="navbar">
        <div className="flex row-between">
          <div className="logo">
            <Link to="/">sidis</Link>
          </div>

          <ul className="nav-links flex row-around">
            <li className="nav-item tooltip">
              <Link to="/" className="nav-link"><i className="fas fa-home"></i></Link>
              <div className="tooltiptext tooltiptext-down"><Link to="/">home</Link></div>
            </li>

            <li className="nav-item tooltip">
              <Link to="/launch" className="nav-link"><i className="fas fa-newspaper"></i></Link>
              <div className="tooltiptext tooltiptext-down"><Link to="/blog">blog</Link></div>
            </li>

            <li className="nav-item tooltip">
              <Link to="/about" className="nav-link"><i className="fas fa-address-book"></i></Link>
              <div className="tooltiptext tooltiptext-down"><Link to="/about">about us</Link></div>
            </li>

            <li className="nav-item dropdown">
              <span className="dropbtn">more <i className="fas fa-angle-down"></i></span>
              <div className="dropdown-menu">
                <Link to="/projects" className="dropdown-item">projects</Link>
                <Link to="/support" className="dropdown-item">support</Link>
              </div>
            </li>
          </ul>

          <div className="nav-cta flex row-end">
            <form action="" method="get" className="searchbar">
              <input type="search" name="searchbar" placeholder="search..." />
            </form>
            {/* <Link to="/sign" className="btn"><i className="fas fa-sign-in-alt"></i></Link> */}
            <Link to="/" className="btn font-bold">get started</Link>
            <span onClick={openOver}><i className="menu fas fa-bars"></i></span>
          </div>
        </div>
      </nav>

      {isOverlayOpen && (
        <div className="overlay" id="overlay">
          <div className="container flex column-center">
            <span onClick={closeOver} className="over-close"><i className="fas fa-times"></i></span>
            <Link to="/" className="over-link">home</Link>
            <Link to="/blog" className="over-link">blog</Link>
            <Link to="/about" className="over-link">about us</Link>
            <Link to="/projects" className="over-link">projects</Link>
            <Link to="/support" className="over-link">support</Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Nav;
