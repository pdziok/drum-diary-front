import React from 'react';
import { storiesOf } from '@storybook/react';
import { ThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';

import loadScriptDecorator from '../../utils/load-script-decorator'
import { GrooveUtilsContext } from '../../contexts';
import Exercise from '.';

const gscribeUrl = 'https://www.mikeslessons.com/groove/?Debug=1&TimeSig=4/4&Div=16&Tempo=80&Measures=2&H=|----------' +
  '------|----------------|&S=|OoooOoooOoooOooo|ooOOooOOooOOooOO|&K=|----------------|----------------|&Stickings=|RL' +
  'RRLRLLRLRRLRLL|RLRRLRLLRLRRLRLL|';
const longDescription = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ac lorem at turpis auct' +
  'or auctor. Nunc dapibus et leo quis interdum. Etiam elementum eu lacus in faucibus. Duis volutpat sed elit nec pel' +
  'lentesque. Cras malesuada, nisl eu volutpat euismod, nibh est posuere nulla, et malesuada ante purus sit amet ante' +
  '. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur accumsan' +
  ' ultricies erat eu posuere. Fusce dictum sem quis efficitur lacinia. Mauris at est lorem. Ut laoreet lacus id vest' +
  'ibulum rhoncus. In malesuada urna tellus, quis fringilla dui pellentesque sed. Quisque quis lacus justo.';


const withGrooveUtilsProvider = story => (
  <GrooveUtilsContext.Provider value={true}>
    {story()}
  </GrooveUtilsContext.Provider>
);

const withThemeProvider = story => (
  <ThemeProvider theme={createMuiTheme()}>
    {story()}
  </ThemeProvider>
);

storiesOf('Exercise.Gscribe', module)
  .addDecorator(loadScriptDecorator('/abc2svg-1.js'))
  .addDecorator(loadScriptDecorator('/groove_utils.js'))
  .addDecorator(withGrooveUtilsProvider)
  .addDecorator(withThemeProvider)
  .add('Simple exercise', () => <Exercise
    id='1'
    name='Paradiddle'
    gScribe={{url: gscribeUrl}}
  />)
  .add('Exercise with short description', () => <Exercise
    id='1'
    name='Paradiddle'
    gScribe={{url: gscribeUrl}}
    description='Use moeller for the accented notes'
  />)
  .add('Exercise with long description', () => <Exercise
    id='1'
    name='Paradiddle'
    gScribe={{url: gscribeUrl}}
    description={longDescription}
  />)
;
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
    description={longDescription}
    youtube={{
      videoId: 'kPio-XnchYY'
    }}
  />)
;

