import React from 'react';
import PropTypes from 'prop-types';
import Youtube from 'react-youtube';
import { debounce } from 'lodash'

import './index.scss';
import GScribe from '../gscribe'
import WidthAware from '../width-aware';

const ytPropsMapper = (width) => ({ opts: { width }});

function YoutubeVideo(props) {
  if (!props.videoId) {
    return null;
  }

  return (
    <WidthAware delay='200' propsMapper={ytPropsMapper} maxWidth='1024' className='youtube--wrapper'>
      <Youtube {...props} className='youtube-video' />
    </WidthAware>
  )
}

function Exercise({ id, name, gScribe, youtube, description }) {
  return (
    <div className='exercise'>
      <h3>{name}</h3>
      <div className='description'>{description}</div>
      <YoutubeVideo {...youtube} />
      <GScribe {...gScribe} />
    </div>
  )
}

Exercise.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  gScribeUrl: PropTypes.shape({
    url: PropTypes.string.isRequired
  }),
  youtube: Youtube.propTypes,
  description: PropTypes.string
};

export default Exercise;
