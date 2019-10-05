import React from 'react';
import PropTypes from 'prop-types';
import InlineSVG from 'svg-inline-react';
import MaterialIcon from '@material/react-material-icon';

import './index.scss'
import { generateSvgFromGScribe } from '../../utils/gscribe';
import WidthAware from '../width-aware';

const gScribePropsMapper = (url) => (width) => ({ src: generateSvgFromGScribe(url, width) });

function GScribe({ url }) {
  if (!url) {
    return null;
  }

  return (
    <WidthAware delay='200'
                propsMapper={gScribePropsMapper(url)} maxWidth='1024' className='gscribe--wrapper'>
      <InlineSVG />
      <a className='gscribe-link' href={url} target='_blank' rel='noopener noreferrer'>
        Open in Groove Scribe <MaterialIcon icon='open_in_new' />
      </a>
    </WidthAware>
  );
}

GScribe.propTypes = {
  url: PropTypes.string.isRequired,
};

export default GScribe;


