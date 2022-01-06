import React from 'react';
import { storiesOf } from '@storybook/react';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import loadScriptDecorator from '../../utils/load-script-decorator'
import { GrooveUtilsContext } from '../../contexts';
import ExerciseSearch from './index';

const withGrooveUtilsProvider = story => (
  <GrooveUtilsContext.Provider value={true}>
    {story()}
  </GrooveUtilsContext.Provider>
);

const withThemeProvider = story => (
  <ThemeProvider theme={createTheme()}>
    {story()}
  </ThemeProvider>
);

storiesOf('ExerciseSearch', module)
  .addDecorator(loadScriptDecorator('abc2svg-1.js'))
  .addDecorator(loadScriptDecorator('groove_utils.js'))
  .addDecorator(withGrooveUtilsProvider)
  .addDecorator(withThemeProvider)
  .add('Simple empty search', () => <ExerciseSearch />)
  .add('Preselected tags empty search', () => <ExerciseSearch tags={['legs', 'speed']} />)
  .add('Pre-filed with search text', () => <ExerciseSearch text="some search text" />)
;
