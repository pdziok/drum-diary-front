import React from 'react';
import PropTypes from 'prop-types';
import Youtube from 'react-youtube';
import { debounce } from 'lodash'

import './index.scss';
import GScribe from '../gscribe'

const MAX_WIDTH = 640; //at this point it seems pointless to make it bigger

class YoutubeVideo extends React.Component {
  constructor(props) {
    super(props);
    this.me = React.createRef();
    this.state = { availableWidth: null }
  }

  updateAvailableWidth = debounce(() => {
      this.setState({ availableWidth: this.me.current.offsetWidth });
  }, 200);

  componentDidMount() {
    window.addEventListener('resize', this.updateAvailableWidth);
    if (this.me.current) {
      this.setState({ availableWidth: this.me.current.offsetWidth })
    }
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateAvailableWidth);
  }

  render() {
    if (!this.props.videoId) {
      return null;
    }

    const width = Math.min(this.state.availableWidth, MAX_WIDTH);

    const video = this.state.availableWidth
      ? <Youtube {...this.props} opts={{width}} className='youtube-video' />
      : null;

    return (
      <div className='youtube--wrapper' ref={this.me}>{video}</div>
    )
  }
}

function Exercise({id, name, gScribeUrl, youtube, description}) {
  return (
    <div className='exercise'>
      <h3>{name}</h3>
      <div className='description'>{description}</div>
      <YoutubeVideo {...youtube} />
      <GScribe url={gScribeUrl} />
    </div>
  )
}

Exercise.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  gScribeUrl: PropTypes.string,
  youtube: Youtube.propTypes,
  description: PropTypes.string
};

export default Exercise;
