import React from 'react';
import PropTypes from 'prop-types';
import { debounce } from 'lodash';

class WidthAware extends React.Component {
  constructor(props) {
    super(props);
    this.me = React.createRef();
    this.state = { availableWidth: null }
  }

  updateAvailableWidth = debounce(() => {
    this.setState({ availableWidth: this.me.current.offsetWidth });
  }, this.props.delay || 0);

  componentDidMount() {
    window.addEventListener('resize', this.updateAvailableWidth);
    if (this.me.current) {
      this.setState({ availableWidth: this.me.current.offsetWidth })
    }
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateAvailableWidth);
  }

  calculateWidth() {
    return this.props.maxWidth
      ? Math.min(this.state.availableWidth, this.props.maxWidth)
      : this.state.availableWidth;
  }

  render() {
    let elements = React.Children.toArray(this.props.children);

    const children = this.state.availableWidth
      ? elements.map(child => React.cloneElement(child, this.generateChildrenProps()))
      : [];

    return (
      <div className={this.props.className} ref={this.me}>{children}</div>
    )
  }

  generateChildrenProps() {
    if (typeof this.props.propsMapper === 'function') {
      return this.props.propsMapper(this.calculateWidth())
    }

    return { width: this.calculateWidth() };
  }
}

WidthAware.propTypes = {
  children: PropTypes.node.isRequired,
  maxWidth: PropTypes.number,
  propsMapper: PropTypes.func,
  delay: PropTypes.number,
  className: PropTypes.string
};

export default WidthAware;



