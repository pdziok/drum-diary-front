import React from 'react';
import { storiesOf } from '@storybook/react';
import { Provider } from 'react-redux'
import StoryRouter from 'storybook-react-router';

import loadScriptDecorator from '../../utils/load-script-decorator'
import { GrooveUtilsContext } from '../../contexts';
import ExercisesListScreen from '.';

import configureStore from '../../store.js'

import { exerciseWithLongDescription } from '../../stories/fixtures';

const withGrooveUtilsProvider = story => (
  <GrooveUtilsContext.Provider value={true}>
    {story()}
  </GrooveUtilsContext.Provider>
);

storiesOf('ExercisesListScreen', module)
  .addDecorator(loadScriptDecorator('/abc2svg-1.js'))
  .addDecorator(loadScriptDecorator('/groove_utils.js'))
  .addDecorator(withGrooveUtilsProvider)
  .addDecorator(StoryRouter())
  .add('1 exercise', () => <Provider store={configureStore({
    exercises: {
      pending: false,
      data: [exerciseWithLongDescription]
    }
  })}>
    <ExercisesListScreen />
  </Provider>)
  .add('2 exercises', () => <Provider store={configureStore({
    exercises: {
      pending: false,
      data: [exerciseWithLongDescription, exerciseWithLongDescription]
    }
  })}>
    <ExercisesListScreen />
  </Provider>)
;

