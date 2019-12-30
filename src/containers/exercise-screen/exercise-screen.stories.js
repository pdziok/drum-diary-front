import React from 'react';
import { storiesOf } from '@storybook/react';
import { Provider } from 'react-redux'
import StoryRouter from 'storybook-react-router';

import loadScriptDecorator from '../../utils/load-script-decorator'
import { GrooveUtilsContext } from '../../contexts';
import ExerciseScreen from '.';

import configureStore from '../../store.js'

import { gScribeUrl, longDescription } from '../../stories/fixtures';

const basicState = {
  exercise: {
    details: {
      pending: false,
      data: {
        id: 'someId',
        name: 'Some name',
        description: longDescription,
        gScribe: {
          url: gScribeUrl
        }
      }
    },
  }
};

const stateWithExecutions = {
  exercise: {
    ...basicState.exercise,
    executions: {
      pending: false,
      data: [
        { startedAt: '2019-10-10T10:10:10', finishedAt: '2019-10-10T10:18:10', bpm: '100' },
        { startedAt: '2019-10-08T10:10:10', finishedAt: '2019-10-08T10:25:10', bpm: '95' },
      ]
    }
  }
};

const withGrooveUtilsProvider = story => (
  <GrooveUtilsContext.Provider value={true}>
    {story()}
  </GrooveUtilsContext.Provider>
);

storiesOf('ExerciseScreen', module)
  .addDecorator(loadScriptDecorator('/abc2svg-1.js'))
  .addDecorator(loadScriptDecorator('/groove_utils.js'))
  .addDecorator(withGrooveUtilsProvider)
  .addDecorator(StoryRouter())
  .add('Simple exercise', () => <Provider store={configureStore(basicState)}>
    <ExerciseScreen />
  </Provider>)
  .add('Exercise with executions', () => <Provider store={configureStore(stateWithExecutions)}>
    <ExerciseScreen />
  </Provider>)
;

