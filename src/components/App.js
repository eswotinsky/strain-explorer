import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Error404 from './Error404';
import StrainDetails from './StrainDetails';
import '../css/App.css';
import '../css/bootstrap.min.css';

function App() {

    return (
      <div className="wrapper">
        <Header />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/details/:ucpc" component={StrainDetails} />
            <Route component={Error404} />
          </Switch>
        </div>
      </div>
    );
}

export default App;
