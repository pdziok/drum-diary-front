import React from 'react';
import { storiesOf } from '@storybook/react';

import loadScriptDecorator from '../../../../utils/load-script-decorator'
import { GrooveUtilsContext } from '../../../../contexts';
import Dialog from '.';
import { accentedParadiddles, doubles, paradiddle, singles } from '../../../../stories/fixtures';

const withGrooveUtilsProvider = story => (
  <GrooveUtilsContext.Provider value={true}>
    {story()}
  </GrooveUtilsContext.Provider>
);

const noop = () => {
};

const exercises = [singles, doubles, paradiddle, accentedParadiddles];

storiesOf('PracticeLog.SelectExerciseDialog', module)
  .addDecorator(loadScriptDecorator('abc2svg-1.js'))
  .addDecorator(loadScriptDecorator('groove_utils.js'))
  .addDecorator(withGrooveUtilsProvider)
  .add('Simple Dialog', () => <Dialog open={true} onClose={noop}/>)
  .add('Dialog with existing exercises opened', () => <Dialog open={true} onClose={noop} search={{
    pending: false,
    list: exercises,
    onChange: noop,
  }} />)
  .add('Dialog with existing exercises search pending', () => <Dialog open={true} onClose={noop}
                                                                      initiallyExpanded='existing' search={{
    pending: true,
    onChange: noop,
  }} />)
  .add('Dialog with existing exercises opened', () => <Dialog open={true} onClose={noop}
                                                              initiallyExpanded='existing' search={{
    pending: false,
    list: exercises,
    onChange: noop,
  }} />)
  .add('Dialog with not existing exercises opened', () => <Dialog open={true} onClose={noop}
                                                              initiallyExpanded='existing' search={{
    pending: false,
    list: [],
    criteria: {
      text: 'Not existing exercise',
      tags: ['legs']
    },
    onChange: noop,
  }} />)
  .add('Dialog with new exercise opened', () => <Dialog open={true} onClose={noop} initiallyExpanded='new-exercise' />)
;
