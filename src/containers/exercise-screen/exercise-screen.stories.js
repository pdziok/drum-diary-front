import React from 'react';
import { storiesOf } from '@storybook/react';
import StoryRouter from 'storybook-react-router';

import loadScriptDecorator from '../../utils/load-script-decorator'
import { GrooveUtilsContext } from '../../contexts';
import { ExerciseScreen } from '.';

import { gScribeUrl, longDescription } from '../../stories/fixtures';

const pendingExercise = {
  exercise: {
    pending: true
  },
  fetchExercise: () => {},
  fetchExecutions: () => {}
};

const simpleExercise = {
  exercise: {
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
  fetchExercise: () => {},
  fetchExecutions: () => {}
};

const exerciseWithPendingExecutions = {
  ...simpleExercise,
  executions: {
    pending: true,
  }
};

const exerciseWithExecutions = {
  ...simpleExercise,
  executions: {
    pending: false,
    data: [
      { startedAt: '2019-10-10T10:10:10', finishedAt: '2019-10-10T10:18:10', bpm: '100' },
      { startedAt: '2019-10-08T10:10:10', finishedAt: '2019-10-08T10:25:10', bpm: '95' },
    ]
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
  .add('Pending exercise', () => <ExerciseScreen {...pendingExercise} />)
  .add('Simple exercise', () => <ExerciseScreen {...simpleExercise} />)
  .add('Loaded Exercise with pending executions', () => <ExerciseScreen {...exerciseWithPendingExecutions} />)
  .add('Exercise with executions', () => <ExerciseScreen {...exerciseWithExecutions} />)
;

