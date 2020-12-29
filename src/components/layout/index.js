import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';

import Drawer from './components/drawer'
import Content from "./components/content";
import AppHeader from "./components/app-header";

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
  }
}));

export default function Layout() {
  const classes = useStyles();
  const [drawerOpen, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppHeader drawerOpen={drawerOpen} handleOpen={handleDrawerOpen} />
      <Drawer open={drawerOpen} handleClose={handleDrawerClose} />
      <Content />
    </div>
  );
}
