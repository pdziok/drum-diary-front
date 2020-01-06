import React from 'react';
import { storiesOf } from '@storybook/react';

import loadScriptDecorator from '../../../../utils/load-script-decorator'
import { GrooveUtilsContext } from '../../../../contexts';
import Entry from '.';

import { paradiddle } from '../../../../stories/fixtures';

const withGrooveUtilsProvider = story => (
  <GrooveUtilsContext.Provider value={true}>
    {story()}
  </GrooveUtilsContext.Provider>
);

storiesOf('Entry', module)
  .addDecorator(loadScriptDecorator('abc2svg-1.js'))
  .addDecorator(loadScriptDecorator('groove_utils.js'))
  .addDecorator(withGrooveUtilsProvider)
  .add('Simple entry', () => <Entry
    id='1'
    exercise={paradiddle}
  />)
  .add('exercise with tempo', () => <Entry
    id='1'
    exercise={paradiddle}
    bpm='100-130'
  />)
  .add('exercise with notes', () => <Entry
    id='1'
    exercise={paradiddle}
    notes='Left hand is way worse, felt pain afterwards'
  />)
  .add('exercise with tempo & notes', () => <Entry
    id='1'
    exercise={paradiddle}
    bpm='100-130'
    notes='Left hand is way worse, felt pain afterwards'
  />);
