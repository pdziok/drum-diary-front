import React from 'react';
import PropTypes from 'prop-types';
import InlineSVG from 'svg-inline-react';

import { generateSvgFromGScribe } from '../../utils/gscribe';

const MAX_WIDTH = 1024; //at this point it seems pointless to make it bigger
const INITIAL_WIDTH = 230; //preparing for mobile devices

class GScribe extends React.Component {
  constructor(props) {
    super(props);
    this.me = React.createRef();
    this.state = { availableWidth: INITIAL_WIDTH }
  }

  updateAvailableWidth = () => {
    this.setState({ availableWidth: this.me.current.offsetWidth });
  };

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
    if (!this.props.url) {
      return null;
    }

    return (
      <div className='gscribe--wrapper' ref={this.me}>
        <a href={this.props.url} target='_blank' rel='noopener noreferrer'>
          <InlineSVG src={generateSvgFromGScribe(this.props.url, Math.min(this.state.availableWidth, MAX_WIDTH))} />
        </a>
      </div>
    );
  }
}

GScribe.propTypes = {
  url: PropTypes.string.isRequired,
};

export default GScribe;


