import React from 'react';
import { storiesOf } from '@storybook/react';
import { ThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';

import loadScriptDecorator from '../../utils/load-script-decorator'
import { GrooveUtilsContext } from '../../contexts';
import Exercise from '.';

import { gScribeUrl, longDescription } from '../../stories/fixtures';

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
    gScribe={{url: gScribeUrl}}
  />)
  .add('Exercise with short description', () => <Exercise
    id='1'
    name='Paradiddle'
    gScribe={{url: gScribeUrl}}
    description='Use moeller for the accented notes'
  />)
  .add('Exercise with long description', () => <Exercise
    id='1'
    name='Paradiddle'
    gScribe={{url: gScribeUrl}}
    description={longDescription}
  />);

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
  />);

