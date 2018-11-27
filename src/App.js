import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Navigation from './Navigation/Navigation';
import Summary from './Summary/Summary';
import HowTo from './HowTo/HowTo';
import Conclusion from './Conclusion/Conclusion';
import Credits from './Credits/Credits';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Route path="/" render={() => <Navigation />} />
          <Route path="/summary" exact render={() => <Summary />} />
          <Route path="/how-to" exact render={() => <HowTo />} />
          <Route path="/conclusion" exact render={() => <Conclusion />} />
          <Route path="/credits" exact render={() => <Credits />} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
