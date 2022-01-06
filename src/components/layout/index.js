import React from 'react';
import { CssBaseline, Box } from '@mui/material';

import Drawer from './components/drawer'
import Content from "./components/content";
import AppHeader from "./components/app-header";

export default function Layout() {
  const [drawerOpen, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{
      display: 'flex',
    }}>
      <CssBaseline />
      <AppHeader drawerOpen={drawerOpen} handleOpen={handleDrawerOpen} />
      <Drawer open={drawerOpen} handleClose={handleDrawerClose} />
      <Content />
    </Box>
  );
}
