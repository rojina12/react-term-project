import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Navigation from './Navigation/Navigation';
import Summary from './Summary/Summary';
import Setup from './Setup/Setup';
import HowTo from './HowTo/HowTo';
import Demo from './Demo/Demo';
import Conclusion from './Conclusion/Conclusion';
import Credits from './Credits/Credits';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Navigation />
          <Route path="/" exact render={() => <Summary />} />
          <Route path="/setup" exact render={() => <Setup />} />
          <Route path="/how-to" exact render={() => <HowTo />} />
          <Route path="/demo" exact render={() => <Demo />} />
          <Route path="/conclusion" exact render={() => <Conclusion />} />
          <Route path="/credits" exact render={() => <Credits />} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
