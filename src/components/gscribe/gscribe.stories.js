import React from 'react';
import { storiesOf } from '@storybook/react';

import loadScriptDecorator from '../../utils/load-script-decorator'
import { GrooveUtilsContext } from '../../contexts';
import GScribe from '.';


const withGrooveUtilsProvider = story => (
  <GrooveUtilsContext.Provider value={true}>
    {story()}
  </GrooveUtilsContext.Provider>
);

storiesOf('GScribe', module)
  .addDecorator(loadScriptDecorator('/abc2svg-1.js'))
  .addDecorator(loadScriptDecorator('/groove_utils.js'))
  .addDecorator(withGrooveUtilsProvider)
  .add('without url', () => <GScribe />)
  .add('with valid url', () => <GScribe
    url='https://www.mikeslessons.com/groove/?Debug=1&TimeSig=4/4&Div=16&Tempo=80&Measures=1&H=|xxxxxxxxxxxxxxxx|&S=|----O-------O---|&K=|o-------o-------|'
  />);
