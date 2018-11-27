import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to="/" className="navbar-brand">CPS 530 - Term Project</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/summary" className="nav-link">Summary</Link>
            </li>
            <li className="nav-item">
              <Link to="/how-to" className="nav-link">How To</Link>
            </li>
            <li className="nav-item">
              <Link to="/conclusion" className="nav-link">Conclusion</Link>
            </li>
            <li className="nav-item">
              <Link to="/credits" className="nav-link">Credits</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;