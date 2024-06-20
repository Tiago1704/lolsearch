import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Routes from './components/Routes';

const App = () => {
  return (
    <div>
      <NavigationBar />
      <Switch>
        {Routes.map((route, key) => (
          <Route exact path={route.direction} key={key}>
            <route.component />
          </Route>
        ))}
      </Switch>
      {/* <Footer /> */}
    </div>
  );
}

export default App;