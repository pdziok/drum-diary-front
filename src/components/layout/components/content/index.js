import React from 'react';
import { Box } from '@mui/material';

import {Route, Switch} from "react-router-dom";
import ExerciseScreen from "../../../../containers/exercise-screen";
import ExercisesListScreen from "../../../../containers/exercises-list-screen";
import PracticeLog from "../../../practice-log";

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
    return (
        <Box sx={{
            flexGrow: 1,
            padding: 3,
        }}>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-end',
                px: 0,
                py: 1,
            }} />
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
        </Box>
    )
}