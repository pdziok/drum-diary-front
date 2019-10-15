import React from 'react';
import { storiesOf } from '@storybook/react';
import { Provider } from 'react-redux'
import Container from '@material-ui/core/Container'

import loadScriptDecorator from '../../utils/load-script-decorator'
import { GrooveUtilsContext } from '../../contexts';
import ExerciseView from '.';

import configureStore from '../../store.js'

const gscribeUrl = 'https://www.mikeslessons.com/groove/?Debug=1&TimeSig=4/4&Div=16&Tempo=80&Measures=2&H=|----------' +
  '------|----------------|&S=|OoooOoooOoooOooo|ooOOooOOooOOooOO|&K=|----------------|----------------|&Stickings=|RL' +
  'RRLRLLRLRRLRLL|RLRRLRLLRLRRLRLL|';
const longDescription = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ac lorem at turpis auct' +
  'or auctor. Nunc dapibus et leo quis interdum. Etiam elementum eu lacus in faucibus. Duis volutpat sed elit nec pel' +
  'lentesque. Cras malesuada, nisl eu volutpat euismod, nibh est posuere nulla, et malesuada ante purus sit amet ante' +
  '. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur accumsan' +
  ' ultricies erat eu posuere. Fusce dictum sem quis efficitur lacinia. Mauris at est lorem. Ut laoreet lacus id vest' +
  'ibulum rhoncus. In malesuada urna tellus, quis fringilla dui pellentesque sed. Quisque quis lacus justo.';

const basicState = {
  exercises: {
    current: {
      id: 'someId',
      name: 'Some name',
      description: longDescription,
      gScribe: {
        url: gscribeUrl
      }
    },
  }
};

const stateWithExecutions = {
  exercises: {
    ...basicState.exercises,
    executions: [
      {start: '2019-10-10T10:10:10', end: '2019-10-10T10:18:10', bpm: '100'},
      {start: '2019-10-08T10:10:10', end: '2019-10-08T10:25:10', bpm: '95'},
    ]
  }
};

const comment = {
  timestamp: '2019-10-10T10:10:10',
  author: {
    id: 'dummy-id',
    name: 'John Doe',
  },
  content: 'Awesome exercise. I do it everyday'
};

const stateWithComments = {
  exercises: {
    ...basicState.exercises,
    comments: [comment]
  }
};

const stateWithExecutionsAndComments = {
  exercises: {
    ...basicState.exercises,
    executions: [
      { start: '2019-10-10T10:10:10', end: '2019-10-10T10:18:10', bpm: '100' },
      { start: '2019-10-08T10:10:10', end: '2019-10-08T10:25:10', bpm: '95' },
    ],
    comments: [comment]
  }
};

const withGrooveUtilsProvider = story => (
  <GrooveUtilsContext.Provider value={true}>
    {story()}
  </GrooveUtilsContext.Provider>
);

const withContainer = story => (
  <Container>
    {story()}
  </Container>
);

storiesOf('ExerciseView', module)
  .addDecorator(loadScriptDecorator('/abc2svg-1.js'))
  .addDecorator(loadScriptDecorator('/groove_utils.js'))
  // .addDecorator(withStateProvider)
  .addDecorator(withGrooveUtilsProvider)
  .addDecorator(withContainer)
  .add('Simple exercise', () => <Provider store={configureStore(basicState)}>
    <ExerciseView />
  </Provider>)
  .add('Exercise with executions', () => <Provider store={configureStore(stateWithExecutions)}>
    <ExerciseView />
  </Provider>)
  .add('Exercise with comments', () => <Provider store={configureStore(stateWithComments)}>
    <ExerciseView />
  </Provider>)
  .add('Exercise with executions & comments', () => <Provider store={configureStore(stateWithExecutionsAndComments)}>
    <ExerciseView />
  </Provider>)
;

