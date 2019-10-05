import React from 'react';
import { storiesOf } from '@storybook/react';

import loadScriptDecorator from '../../utils/load-script-decorator'
import Exercise from '.';

storiesOf('Exercise.Gscribe', module)
  .addDecorator(loadScriptDecorator('/abc2svg-1.js'))
  .addDecorator(loadScriptDecorator('/groove_utils.js'))
  .add('Simple exercise', () => <Exercise
    id='1'
    name='Paradiddle'
    gScribeUrl='https://www.mikeslessons.com/groove/?Debug=1&TimeSig=4/4&Div=16&Tempo=80&Measures=2&H=|----------------|----------------|&S=|OoooOoooOoooOooo|ooOOooOOooOOooOO|&K=|----------------|----------------|&Stickings=|RLRRLRLLRLRRLRLL|RLRRLRLLRLRRLRLL|'
  />)
  .add('Exercise with short description', () => <Exercise
    id='1'
    name='Paradiddle'
    gScribeUrl='https://www.mikeslessons.com/groove/?Debug=1&TimeSig=4/4&Div=16&Tempo=80&Measures=2&H=|----------------|----------------|&S=|OoooOoooOoooOooo|ooOOooOOooOOooOO|&K=|----------------|----------------|&Stickings=|RLRRLRLLRLRRLRLL|RLRRLRLLRLRRLRLL|'
    description='Use moeller for the accented notes'
  />)
  .add('Exercise with long description', () => <Exercise
    id='1'
    name='Paradiddle'
    gScribeUrl='https://www.mikeslessons.com/groove/?Debug=1&TimeSig=4/4&Div=16&Tempo=80&Measures=2&H=|----------------|----------------|&S=|OoooOoooOoooOooo|ooOOooOOooOOooOO|&K=|----------------|----------------|&Stickings=|RLRRLRLLRLRRLRLL|RLRRLRLLRLRRLRLL|'
    description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ac lorem at turpis auctor auctor. Nunc dapibus et leo quis interdum. Etiam elementum eu lacus in faucibus. Duis volutpat sed elit nec pellentesque. Cras malesuada, nisl eu volutpat euismod, nibh est posuere nulla, et malesuada ante purus sit amet ante. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur accumsan ultricies erat eu posuere. Fusce dictum sem quis efficitur lacinia. Mauris at est lorem. Ut laoreet lacus id vestibulum rhoncus. In malesuada urna tellus, quis fringilla dui pellentesque sed. Quisque quis lacus justo.'
  />)
storiesOf('Exercise.Youtube', module)
  .add('Simple exercise', () => <Exercise
    id='1'
    name='Paradiddle'
    youtube={{
      videoId: 'kPio-XnchYY'
    }}
  />)
  .add('Youtube exercise with short description', () => <Exercise
    id='1'
    name='Paradiddle'
    description='Use moeller for the accented notes'
    youtube={{
      videoId: 'kPio-XnchYY'
    }}
  />)
  .add('Youtube exercise with long description', () => <Exercise
    id='1'
    name='Paradiddle'
    description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ac lorem at turpis auctor auctor. Nunc dapibus et leo quis interdum. Etiam elementum eu lacus in faucibus. Duis volutpat sed elit nec pellentesque. Cras malesuada, nisl eu volutpat euismod, nibh est posuere nulla, et malesuada ante purus sit amet ante. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur accumsan ultricies erat eu posuere. Fusce dictum sem quis efficitur lacinia. Mauris at est lorem. Ut laoreet lacus id vestibulum rhoncus. In malesuada urna tellus, quis fringilla dui pellentesque sed. Quisque quis lacus justo.'
    youtube={{
      videoId: 'kPio-XnchYY'
    }}
  />)
;

