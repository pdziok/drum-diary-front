import React from 'react';
import { storiesOf } from '@storybook/react';
import loadScriptDecorator from '../../utils/load-script-decorator'
import DailyPractice from '.';

storiesOf('DailyPractice', module)
  .addDecorator(loadScriptDecorator('/abc2svg-1.js'))
  .addDecorator(loadScriptDecorator('/groove_utils.js'))
  .add('empty practice', () => <DailyPractice />)
  .add('one exercise', () => <DailyPractice entries={[
    {
      id: '1',
      startedAt: '2019-08-10T10:10:10Z',
      finishedAt: '2019-08-10T10:20:10Z',
      exercise: {
        id: '1',
        name: 'Paradiddle',
        description: 'Use moeller for the accented notes',
        gScribeUrl: 'https://www.mikeslessons.com/groove/?Debug=1&TimeSig=4/4&Div=16&Tempo=80&Measures=2&H=|----------------|----------------|&S=|OoooOoooOoooOooo|ooOOooOOooOOooOO|&K=|----------------|----------------|&Stickings=|RLRRLRLLRLRRLRLL|RLRRLRLLRLRRLRLL|',
        tempo: '100-130',
      }
    }
  ]}/>)
  .add('two exercises', () => <DailyPractice entries={[
    {
      id: '1',
      startedAt: '2019-08-10T10:10:10Z',
      finishedAt: '2019-08-10T10:20:10Z',
      exercise: {
        id: '1',
        name: 'Paradiddle',
        description: 'Use moeller for the accented notes',
        gScribeUrl: 'https://www.mikeslessons.com/groove/?Debug=1&TimeSig=4/4&Div=16&Tempo=80&Measures=2&H=|----------------|----------------|&S=|OoooOoooOoooOooo|ooOOooOOooOOooOO|&K=|----------------|----------------|&Stickings=|RLRRLRLLRLRRLRLL|RLRRLRLLRLRRLRLL|',
        tempo: '100-130',
      }
    },
    {
      id: '2',
      startedAt: '2019-08-10T10:20:10Z',
      finishedAt: '2019-08-10T10:30:10Z',
      exercise: {
        id: '2',
        name: 'Paradiddle',
        description: 'Use moeller for the accented notes',
        gScribeUrl: 'https://www.mikeslessons.com/groove/?Debug=1&TimeSig=4/4&Div=8&Tempo=80&Measures=2&H=|--------|--------|&S=|OoOoOoOo|oOoOoOoO|&K=|--------|--------|&Stickings=|BBBBBBBB|BBBBBBBB|',
        tempo: '100-130',
      }
    },
  ]}/>)
;

