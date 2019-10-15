import React from 'react';
import { storiesOf } from '@storybook/react';

import loadScriptDecorator from '../../../../utils/load-script-decorator'
import { GrooveUtilsContext } from '../../../../contexts';
import Entry from '.';

let gscribeUrl = 'https://www.mikeslessons.com/groove/?Debug=1&TimeSig=4/4&Div=16&Tempo=80&Measures=2&H=|------------' +
  '----|----------------|&S=|OoooOoooOoooOooo|ooOOooOOooOOooOO|&K=|----------------|----------------|&Stickings=|RLRR' +
  'LRLLRLRRLRLL|RLRRLRLLRLRRLRLL|';
const exercise = {
  id: '1',
  name: 'Paradiddle',
  gScribe: { url: gscribeUrl },
  description: 'Use moeller for the accented notes'
};


const withGrooveUtilsProvider = story => (
  <GrooveUtilsContext.Provider value={true}>
    {story()}
  </GrooveUtilsContext.Provider>
);

storiesOf('Entry', module)
  .addDecorator(loadScriptDecorator('/abc2svg-1.js'))
  .addDecorator(loadScriptDecorator('/groove_utils.js'))
  .addDecorator(withGrooveUtilsProvider)
  .add('Simple entry', () => <Entry
    id='1'
    exercise={exercise}
  />)
  .add('exercise with tempo', () => <Entry
    id='1'
    exercise={exercise}
    bpm='100-130'
  />)
  .add('exercise with notes', () => <Entry
    id='1'
    exercise={exercise}
    notes='Left hand is way worse, felt pain afterwards'
  />)
  .add('exercise with tempo & notes', () => <Entry
    id='1'
    exercise={exercise}
    bpm='100-130'
    notes='Left hand is way worse, felt pain afterwards'
  />)
;

