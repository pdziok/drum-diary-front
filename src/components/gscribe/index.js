import React from 'react';
import PropTypes from 'prop-types';
import InlineSVG from 'svg-inline-react';

import { generateSvgFromGScribe } from '../../utils/gscribe';

class GScribe extends React.Component {
  constructor(props) {
    super(props);
    this.me = React.createRef();
    this.state = { availableWidth: 500 }
  }

  componentDidMount() {
    if (this.me.current) {
      this.setState({ availableWidth: this.me.current.offsetWidth })
    }
  }

  render() {
    if (!this.props.url) {
      return null;
    }

    return (
      <div ref={this.me}>
        <a href={this.props.url} target='_blank' rel='noopener noreferrer'>
          <InlineSVG src={generateSvgFromGScribe(this.props.url, this.state.availableWidth)} />
        </a>
      </div>
    );
  }
}

GScribe.propTypes = {
  url: PropTypes.string.isRequired,
};

export default GScribe;


