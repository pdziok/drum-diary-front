import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import {Route, Switch} from "react-router-dom";
import ExerciseScreen from "../../../../containers/exercise-screen";
import ExercisesListScreen from "../../../../containers/exercises-list-screen";
import PracticeLog from "../../../practice-log";

const useStyles = makeStyles(theme => ({
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

//todo move to screen practice log screen
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

export default function Content() {
    const classes = useStyles();

    return (
        <main className={classes.content}>
            <div className={classes.toolbar} />
            <Switch>
                <Route path="/exercise/:id">
                    <ExerciseScreen />
                </Route>
                <Route path="/exercises/:page?">
                    <ExercisesListScreen />
                </Route>
                <Route path="/">
                    <PracticeLog entries={logEntries} />
                </Route>
            </Switch>
        </main>
    )
}