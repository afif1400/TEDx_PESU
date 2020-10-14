import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';

import Landing from './pages/Landing';
import About from './pages/About';
import './App.css';
import Join from './pages/Join';
import LinksPage from './components/links';

const RedirectForm = () => {};

const route = window.location.href;

const ismobile = Boolean(
  navigator.userAgent.match(/(iPad)|(iPhone)|(android)|(webOS)/i)
);

console.log(ismobile);

if (ismobile === false && route.toString() === 'https://tedxpesu.com/') {
  window.location.replace('https://desktop.tedxpesu.com/');
}

const App = () => {
  return (
    <>
      <CssBaseline />
      <Router>
        <div>
          <Switch>
            <Route exact path='/' component={Landing} />
            <Route exact path='/about' component={About} />
            {/* <Route exact path="/join" component={Join} /> */}
            <Route
              path='/cms'
              render={({ history }) =>
                window.location.replace('https://forms.gle/nnSMNsYjedaZY6wN7')
              }
            />
            <Route
              exact
              path='/links/greenmile'
              render={({ history }) =>
                window.location.replace('https://forms.gle/XaTiW9e8gbK34tNb6')
              }
            />
            <Route
              exact
              path='/links/jtc-upload'
              render={({ history }) =>
                window.location.replace('https://forms.gle/vLXhUJMLkXEcX1Hg7')
              }
            />
            <Route
              exact
              path='/links/watchparty'
              render={({ history }) =>
                window.location.replace(
                  'https://www.airmeet.com/e/acbff400-087c-11eb-9aa2-db9f70964def'
                )
              }
            />
            <Route exact path='/links' component={LinksPage} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    </>
  );
};

function NotFound() {
  return <h2>Wops! - TODO need to add a 404 page</h2>;
}

export default App;
