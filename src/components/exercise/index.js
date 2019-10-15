import React from 'react';
import PropTypes from 'prop-types';
import Youtube from 'react-youtube';
import Typography from '@material-ui/core/Typography'

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
      <Typography variant='h2'>{name}</Typography>
      <Typography variant='body1'>{description}</Typography>
      <YoutubeVideo {...youtube} />
      <GScribe {...gScribe} />
    </div>
  )
}

Exercise.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  gScribe: PropTypes.shape({
    url: PropTypes.string.isRequired
  }),
  youtube: Youtube.propTypes,
  description: PropTypes.string
};

export default Exercise;
