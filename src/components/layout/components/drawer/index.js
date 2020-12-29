import React from 'react';
import PropTypes from 'prop-types'
import clsx from 'clsx';
import { Link, useLocation } from "react-router-dom";
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Divider, Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText, } from '@material-ui/core';
import {
  Assignment as AssignmentIcon,
  Book as BookIcon,
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
  // FiberSmartRecord as FiberSmartRecordIcon,
  Settings as SettingsIcon
} from '@material-ui/icons';

export const drawerWidth = 240; //todo extract

const useStyles = makeStyles(theme => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  },
}));

const menu = [
  { text: 'Practice Log', icon: <AssignmentIcon />, path: '/' },
  { text: 'Exercises', icon: <BookIcon />, path: '/exercises' },
  // { text: 'Record activity', icon: <FiberSmartRecordIcon />, path: '/record' },
];

export default function LayoutDrawer({ open = false, handleClose }) {
  const classes = useStyles();
  const path = useLocation().pathname;
  const theme = useTheme();

  return <Drawer
    variant="permanent"
    className={clsx(classes.drawer, {
      [classes.drawerOpen]: open,
      [classes.drawerClose]: !open,
    })}
    classes={{
      paper: clsx({
        [classes.drawerOpen]: open,
        [classes.drawerClose]: !open,
      }),
    }}
    open={open}
  >
    <div className={classes.toolbar}>
      <IconButton onClick={handleClose}>
        {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
      </IconButton>
    </div>
    <Divider />
    <List>
      {menu.map(item => (
        <Link to={item.path} key={item.text}>
          <ListItem button selected={!!path.match(item.path)?.length || false}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        </Link>
      ))}
    </List>
    <Divider />
    <List>
      <ListItem button key='settings'>
        <ListItemIcon><SettingsIcon /></ListItemIcon>
        <ListItemText primary='Settings' />
      </ListItem>
    </List>
  </Drawer>
}

LayoutDrawer.propTypes = {
  open: PropTypes.bool,
  handleClose: PropTypes.func
};
