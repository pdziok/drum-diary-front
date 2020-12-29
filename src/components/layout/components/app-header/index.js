import React from 'react';
import clsx from 'clsx';
import {makeStyles} from '@material-ui/core/styles';
import {AppBar, IconButton, Toolbar, Typography,} from '@material-ui/core';
import {Menu as MenuIcon} from '@material-ui/icons';

import {drawerWidth} from '../drawer'
import PropTypes from "prop-types";

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
    }
}));

export default function AppHeader({handleOpen, drawerOpen}) {
    const classes = useStyles();

    return (
        <AppBar
            position="fixed"
            className={clsx(classes.appBar, {
                [classes.appBarShift]: drawerOpen,
            })}
        >
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open menu"
                    onClick={handleOpen}
                    edge="start"
                    className={clsx(classes.menuButton, {
                        [classes.hide]: drawerOpen,
                    })}
                >
                    <MenuIcon/>
                </IconButton>
                <Typography variant="h6" noWrap>
                    DrumDiary
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

AppHeader.propTypes = {
    drawerOpen: PropTypes.bool,
    handleOpen: PropTypes.func
};


