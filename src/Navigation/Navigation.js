import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">CPS 530 - Term Project</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="#">Summary</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">How To</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Conclusion</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Credits</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;