import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Route, Switch } from "react-router-dom";
import { AppBar, CssBaseline, IconButton, Toolbar, Typography, } from '@material-ui/core';
import { Menu as MenuIcon } from '@material-ui/icons';

import Drawer, { drawerWidth } from './components/drawer'
import PracticeLog from '../practice-log';
import ExerciseScreen from '../../containers/exercise-screen';

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
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: drawerOpen,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: drawerOpen,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            DrumDiary
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer open={drawerOpen} handleClose={handleDrawerClose} />
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
