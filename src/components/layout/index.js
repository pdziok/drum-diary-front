import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
  Switch, Route, Link, useLocation
} from "react-router-dom";
import {
  Drawer, AppBar, Toolbar,
  List, Typography, Divider,
  IconButton, CssBaseline,
  ListItem, ListItemIcon, ListItemText,
} from '@material-ui/core';
import {
  Menu as MenuIcon, ChevronLeft as ChevronLeftIcon, ChevronRight as ChevronRightIcon,
  Assignment as AssignmentIcon, Book as BookIcon, FiberSmartRecord as FiberSmartRecordIcon, Settings as SettingsIcon
} from '@material-ui/icons';

import PracticeLog from '../practice-log';
import ExerciseScreen from '../../containers/exercise-screen';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
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
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

const menu = [
  { text: 'Practice Log', icon: <AssignmentIcon />, path: '/' },
  { text: 'Exercises', icon: <BookIcon />, path: '/exercises' },
  { text: 'Record activity', icon: <FiberSmartRecordIcon />, path: '/record' },
];

const gScribeUrl = 'https://www.mikeslessons.com/groove/?Debug=1&TimeSig=4/4&Div=16&Tempo=80&Measures=2&H=|----------' +
  '------|----------------|&S=|OoooOoooOoooOooo|ooOOooOOooOOooOO|&K=|----------------|----------------|&Stickings=|RL' +
  'RRLRLLRLRRLRLL|RLRRLRLLRLRRLRLL|';
const logEntries = [
  {
    id: '1',
    startedAt: '2019-08-10T10:10:10Z',
    finishedAt: '2019-08-10T10:20:10Z',
    bpm: '100-130',
    exercise: {
      id: '1',
      name: 'Paradiddle',
      description: 'Use moeller for the accented notes',
      youtube: {
        videoId: 'kPio-XnchYY'
      }
    }
  },
  {
    id: '2',
    startedAt: '2019-08-10T10:20:10Z',
    finishedAt: '2019-08-10T10:30:10Z',
    bpm: '100-130',
    notes: 'I don\'t like playing that',
    exercise: {
      id: '2',
      name: 'Paradiddle',
      description: 'Use moeller for the accented notes',
      gScribe: { url: gScribeUrl }
    }
  },
  {
    id: '3',
    startedAt: '2019-08-12T10:20:10Z',
    finishedAt: '2019-08-12T10:30:10Z',
    bpm: '100-130',
    notes: 'Much better than 2 days ago',
    exercise: {
      id: '2',
      name: 'Paradiddle',
      description: 'Use moeller for the accented notes',
      gScribe: { url: gScribeUrl }
    }
  },
];

export default function MiniDrawer() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const path = useLocation().pathname;

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            DrumDiary
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
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
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          {menu.map(item => (
            <Link to={item.path} key={item.text}>
              <ListItem button selected={path.match(item.path)}>
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
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Switch>
          <Route path="/exercise/:id">
            <ExerciseScreen />
          </Route>
          <Route path="/">
            <PracticeLog entries={logEntries} />
          </Route>
        </Switch>
      </main>
    </div>
  );
}
