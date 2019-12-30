import React from 'react';
import { storiesOf } from '@storybook/react';
import { Provider } from 'react-redux'
import StoryRouter from 'storybook-react-router';

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
  exercise: {
    details: {
      pending: false,
      data: {
        id: 'someId',
        name: 'Some name',
        description: longDescription,
        gScribe: {
          url: gscribeUrl
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

storiesOf('ExerciseView', module)
  .addDecorator(loadScriptDecorator('/abc2svg-1.js'))
  .addDecorator(loadScriptDecorator('/groove_utils.js'))
  .addDecorator(withGrooveUtilsProvider)
  .addDecorator(StoryRouter())
  .add('Simple exercise', () => <Provider store={configureStore(basicState)}>
    <ExerciseView />
  </Provider>)
  .add('Exercise with executions', () => <Provider store={configureStore(stateWithExecutions)}>
    <ExerciseView />
  </Provider>)
;

