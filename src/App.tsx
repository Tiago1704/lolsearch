import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Routes from './components/Routes';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';



const theme = createTheme({
  palette: {
    primary: {
      main: 'rgb(0, 90, 130)', //blue
      contrastText: '#fff', // Texto blanco para buen contraste
    },
    secondary: {
      main: 'rgb(200, 155, 60)', // golden
      contrastText: '#000', // Texto blanco para buen contraste
    },
}});
 

const App = () => {
  const customTheme = theme;
  return (
    <ThemeProvider theme={customTheme}>
      <NavigationBar />
      <Switch>
        {Routes.map((route, key) => (
          <Route exact path={route.direction} key={key}>
            <route.component />
          </Route>
        ))}
      </Switch>
      {/* <Footer /> */}
    </ThemeProvider>
  );
};

export default App;