import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AssignmentIcon from '@material-ui/icons/Assignment';
import BookIcon from '@material-ui/icons/Book';
import FiberSmartRecordIcon from '@material-ui/icons/FiberSmartRecord';
import SettingsIcon from '@material-ui/icons/Settings';
import PracticeLog from '../practice-log';

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
  {text: 'Practice Log', icon: <AssignmentIcon />, path: /^|practice-log$/},
  {text: 'Exercises', icon: <BookIcon />, path: /^exercises?$/},
  {text: 'Record activity', icon: <FiberSmartRecordIcon />, path: /^record$/},
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

const path = '';

export default function MiniDrawer() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

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
            <ListItem button key={item.text} selected={path.match(item.path)}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
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
        <PracticeLog entries={logEntries}/>
      </main>
    </div>
  );
}
