import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './css/style.css';
import App from './components/App';
import StorePicker from './components/StorePicker';
import NotFound from './components/NotFound';

const Root = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={StorePicker}></Route>
        <Route exact path="/store/:storeId" component={(props) => <App params={props.match.params}/>}></Route>
        <Route component={NotFound}></Route>
      </Switch>
    </Router>
  )
}

render(<Root />, document.getElementById('main'));