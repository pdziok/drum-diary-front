import React from 'react';
import { storiesOf } from '@storybook/react';

import loadScriptDecorator from '../../utils/load-script-decorator'
import GScribeExercise from './gscribe-exercise';

storiesOf('Exercise', module)
  .addDecorator(loadScriptDecorator('/abc2svg-1.js'))
  .addDecorator(loadScriptDecorator('/groove_utils.js'))
  .add('Simple exercise', () => <GScribeExercise
    id='1'
    gScribeUrl='https://www.mikeslessons.com/groove/?Debug=1&TimeSig=4/4&Div=16&Tempo=80&Measures=2&H=|----------------|----------------|&S=|OoooOoooOoooOooo|ooOOooOOooOOooOO|&K=|----------------|----------------|&Stickings=|RLRRLRLLRLRRLRLL|RLRRLRLLRLRRLRLL|'
    tempo='100-130'
    startedAt='2019-08-10T10:10:10Z'
    finishedAt='2019-08-10T10:20:10Z'
  />)
;

