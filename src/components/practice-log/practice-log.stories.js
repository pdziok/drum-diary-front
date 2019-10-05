import React from 'react';
import { storiesOf } from '@storybook/react';
import loadScriptDecorator from '../../utils/load-script-decorator'
import PracticeLog from '.';

const gScribeUrl = 'https://www.mikeslessons.com/groove/?Debug=1&TimeSig=4/4&Div=16&Tempo=80&Measures=2&H=|----------' +
  '------|----------------|&S=|OoooOoooOoooOooo|ooOOooOOooOOooOO|&K=|----------------|----------------|&Stickings=|RL' +
  'RRLRLLRLRRLRLL|RLRRLRLLRLRRLRLL|';
storiesOf('PracticeLog', module)
  .addDecorator(loadScriptDecorator('/abc2svg-1.js'))
  .addDecorator(loadScriptDecorator('/groove_utils.js'))
  .add('empty log', () => <PracticeLog />)
  .add('one entry', () => <PracticeLog entries={[
    {
      id: '1',
      startedAt: '2019-08-10T10:10:10Z',
      finishedAt: '2019-08-10T10:20:10Z',
      bpm: '100-130',
      exercise: {
        id: '1',
        name: 'Paradiddle',
        description: 'Use moeller for the accented notes',
        gScribeUrl: gScribeUrl,
      }
    }
  ]} />)
  .add('two entries', () => <PracticeLog entries={[
    {
      id: '1',
      startedAt: '2019-08-10T10:10:10Z',
      finishedAt: '2019-08-10T10:20:10Z',
      bpm: '100-130',
      exercise: {
        id: '1',
        name: 'Paradiddle',
        description: 'Use moeller for the accented notes',
        gScribeUrl: gScribeUrl,
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
        gScribeUrl: gScribeUrl
      }
    },
  ]} />)
  .add('entries with different dates', () => <PracticeLog entries={[
    {
      id: '1',
      startedAt: '2019-08-10T10:10:10Z',
      finishedAt: '2019-08-10T10:20:10Z',
      bpm: '100-130',
      exercise: {
        id: '1',
        name: 'Paradiddle',
        description: 'Use moeller for the accented notes',
        gScribeUrl: gScribeUrl,
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
        gScribeUrl: gScribeUrl
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
        gScribeUrl: gScribeUrl
      }
    },
  ]} />)
;

