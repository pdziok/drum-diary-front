import React from 'react';
import { storiesOf } from '@storybook/react';
import StoryRouter from 'storybook-react-router';

import loadScriptDecorator from '../../utils/load-script-decorator'
import { GrooveUtilsContext } from '../../contexts';
import { ExercisesListScreen } from '.';

import { paradiddle, singles, doubles, accentedParadiddles } from '../../stories/fixtures';

const withGrooveUtilsProvider = story => (
  <GrooveUtilsContext.Provider value={true}>
    {story()}
  </GrooveUtilsContext.Provider>
);

storiesOf('ExercisesListScreen', module)
  .addDecorator(loadScriptDecorator('abc2svg-1.js'))
  .addDecorator(loadScriptDecorator('groove_utils.js'))
  .addDecorator(withGrooveUtilsProvider)
  .addDecorator(StoryRouter())
  .add('pending', () => <ExercisesListScreen {...{
    pending: true,
    list: [],
    fetchExercises: () => {}
  }} />)
  .add('1 exercise', () => <ExercisesListScreen {...{
    pending: false,
    list: [accentedParadiddles],
    fetchExercises: () => {}
  }} />)
  .add('2 exercises', () => <ExercisesListScreen {...{
    pending: false,
    list: [singles, doubles, paradiddle, accentedParadiddles],
    fetchExercises: () => {}
  }} />)
;

