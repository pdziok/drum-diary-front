import { configure } from '@storybook/react';
import '!style-loader!css-loader!sass-loader!../src/index.scss'

const req = require.context('../src/components', true, /\.stories\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
