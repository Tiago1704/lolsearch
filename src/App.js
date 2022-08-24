import React from 'react';
import { Box, Tabs, Tab} from '@mui/material';
import './App.css';
import {
  MemoryRouter,
  Route,
  Routes,
  Link,
  matchPath,
  useLocation,
} from 'react-router-dom';
import SearchPlayer from './pages/SearchPlayer';
import ErrorPage from './pages/ErrorPage';
import { StaticRouter } from 'react-router-dom/server';
import Footer from './components/Footer';

// import { createStyles, makeStyles } from "@material-ui/core"

// const useStyles = makeStyles((theme) => createStyles({
//   container: {
//       height: 'auto !important',
//       overflow: 'visible'
//   },
//   navBar: {
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center'
//   }
// }));

function App() {
  //const classes = useStyles();

  function useRouteMatch(patterns) {
    const { pathname } = useLocation();
  
    for (let i = 0; i < patterns.length; i += 1) {
      const pattern = patterns[i];
      const possibleMatch = matchPath(pattern, pathname);
      if (possibleMatch !== null) {
        return possibleMatch;
      }
    }
  
    return null;
  }

  function Router(props) {
    const { children } = props;
    if (typeof window === 'undefined') {
      return <StaticRouter location="/error">{children}</StaticRouter>;
    }
  
    return (
      <MemoryRouter initialEntries={['*']} initialIndex={0}>
        {children}
      </MemoryRouter>
    );
  }

  function MyTabs() {
    const routeMatch = useRouteMatch(['error', 'searchplayer', 'champs', 'items']);
    const currentTab = routeMatch?.pattern?.path;
  
    return (
      <Tabs value={currentTab}>
        <Tab label="Buscador" value="searchplayer" to="searchplayer" component={Link} />
        <Tab label="Items" value="items" to="/error" component={Link} />
        <Tab label="Champs" value="champs" to="/error" component={Link} />
        {/* <Tab label="TFT Sección" value="/error" to="/error" component={Link} />
        <Tab label="LOR Sección" value="/error" to="/error" component={Link} />
        <Tab label="Valorant Sección" value="/error" to="/error" component={Link} /> */}
      </Tabs>
    );
  }

  return (
    <Router>
      <Box sx={{ width: '100%' }}>
        <MyTabs />
        <Routes>
          <Route path="/searchplayer" element={<SearchPlayer />} />
          <Route path="/error" element={<ErrorPage />} />
        </Routes>
        <Footer title={"footer"}/>
      </Box>
    </Router>
  );
}

export default App;
