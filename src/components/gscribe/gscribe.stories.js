import React from 'react';
import { storiesOf } from '@storybook/react';

import loadScriptDecorator from '../../utils/load-script-decorator'
import { GrooveUtilsContext } from '../../contexts';
import GScribe from '.';
import { gScribeUrl } from '../../stories/fixtures';

const withGrooveUtilsProvider = story => (
  <GrooveUtilsContext.Provider value={true}>
    {story()}
  </GrooveUtilsContext.Provider>
);

storiesOf('GScribe', module)
  .addDecorator(loadScriptDecorator('abc2svg-1.js'))
  .addDecorator(loadScriptDecorator('groove_utils.js'))
  .addDecorator(withGrooveUtilsProvider)
  .add('without url', () => <GScribe />)
  .add('with valid url', () => <GScribe
    url={gScribeUrl}
  />);
