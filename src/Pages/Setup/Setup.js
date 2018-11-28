import React, { Component } from 'react';

class Setup extends Component {
  render() {
    return (
      <div>
      <h1>
        Setup
      </h1>
      <h2>
      react:
      </h2>
      <ol>
      <li>install node.js</li>
      <li>run 'npm install react'</li>
      <li>run 'npx create-react-app *Name-of-app*' </li>
      <li>run 'cd *Name-of-app*'</li>
      <li>you'll be in the directory which contains your app. the sub directory src contains all of the js code</li>
      <li>run 'npm start' to run the app localy</li>
      </ol>
      </div>
    );
  }
}

export default Setup;
