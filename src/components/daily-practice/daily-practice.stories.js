import React from 'react';
import { storiesOf } from '@storybook/react';
import loadScriptDecorator from '../../utils/load-script-decorator'
import DailyPractice from '.';

storiesOf('DailyPractice', module)
  .addDecorator(loadScriptDecorator('/abc2svg-1.js'))
  .addDecorator(loadScriptDecorator('/groove_utils.js'))
  .add('empty practice', () => <DailyPractice />)
;

