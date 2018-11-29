import React, { Component } from 'react';

class HowTo extends Component {
  render() {
    return (
      <div>
      <h1>
        How To
      </h1>
      <h2>
      React:
      </h2>
      <ol>
      <li>Install Node.js</li>
      <li>run 'npm install React' </li>
      <li>run 'npx create-app *name*'</li>
      <li>cd to *name*</li>
      <li>source contains the js code for the app</li>
      <li>run 'npm start' to start the app.</li>
      <li>the app will be accesable at http://localhost:3000/</li>
      </ol>
      </div>
    );
  }
}

export default HowTo;
