import React from 'react';
import { storiesOf } from '@storybook/react';

import loadScriptDecorator from '../../../../utils/load-script-decorator'
import { GrooveUtilsContext } from '../../../../contexts';
import Dialog from '.';

const withGrooveUtilsProvider = story => (
  <GrooveUtilsContext.Provider value={true}>
    {story()}
  </GrooveUtilsContext.Provider>
);

storiesOf('PracticeLog.SelectExerciseDialog', module)
  .addDecorator(loadScriptDecorator('abc2svg-1.js'))
  .addDecorator(loadScriptDecorator('groove_utils.js'))
  .addDecorator(withGrooveUtilsProvider)
  .add('Simple Dialog', () => <Dialog open={true} />)
;
