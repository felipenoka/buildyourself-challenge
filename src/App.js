import React from 'react';
import Header from './components/header/header';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/home/home';
import ContentApp from './components/screen/index';

function App() {
  return (
    <Router>
      <div className="container">
        <Header />
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/modelr" component={ContentApp} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
