import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Navigation from './Navigation/Navigation';
import Summary from './Pages/Summary/Summary';
import Setup from './Pages/Setup/Setup';
import HowTo from './Pages/HowTo/HowTo';
import Demo from './Pages/Demo/Demo';
import Conclusion from './Pages/Conclusion/Conclusion';
import Credits from './Pages/Credits/Credits';

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
