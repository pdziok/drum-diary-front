import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Script extends Component {
  static propTypes = {
    src: PropTypes.string.isRequired,
  };

  state = {
    loaded: false,
  };

  componentWillMount() {
    const head = document.querySelector('head');
    const script = document.createElement('script');

    script.async = true;
    script.src = this.props.src;
    script.onload = () => this.setState({
      loaded: true,
    });

    head.appendChild(script);
  }

  render() {
    return this.state.loaded ? this.props.children : null;
  }
}

const loadScriptDecorator = src => story => <Script src={src}>{story()}</Script>;

export default loadScriptDecorator;
