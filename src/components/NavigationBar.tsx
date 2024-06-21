import React, { useState } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, IconButton, Drawer, MenuList, MenuItem, ListItemText} from '@material-ui/core';
import MenuIcon from '@mui/icons-material/Menu';
import Routes from './Routes';
import { Divider, Typography } from '@mui/material';
import { Routing } from '../shared/interfaces';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    drawer: {
      width: 300,
    },
    fullList: {
      width: 'auto',
    }
  }),
);

const NavigationBar = (props: Routing) => {
  const classes = useStyles();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    console.log(event);
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }
    setIsOpen(open);
  };

  const activeRoute = (routeName: string) => {
    return props.location.pathname === routeName ? true : false;
  }

  return (
    <div>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </div>
      <Drawer classes={{ paper: classes.drawer }} open={isOpen} onClose={toggleDrawer(false)}>
        <div
          className={classes.fullList}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <MenuList>
            {Routes.map((prop, key) => {
              return (
                <NavLink to={prop.direction} style={{ textDecoration: 'none' }} key={key}>
                  <MenuItem key={`${props.location.hash}-${key}`} style={{ color: 'black' }} selected={activeRoute(prop.direction)}>
                    <ListItemText key={key + 1} primary={prop.name} />
                  </MenuItem>
                </NavLink>
              );
            })}
            <Divider />
            {["League of legends", "Teamfight Tactics", "Legends of Runaterra", "Valorant"].map((item, key) => {
              return (
                <MenuItem key={key} style={{ color: 'black' }}>
                  <ListItemText key={key + 1} primary={item} />
                </MenuItem>
              )
            })}
          </MenuList>
          <Typography>V 0.1.0</Typography>
        </div>
      </Drawer>
    </div>
  );
};

export default withRouter(NavigationBar);