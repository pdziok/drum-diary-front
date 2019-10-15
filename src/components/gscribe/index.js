import React from 'react';
import PropTypes from 'prop-types';
import InlineSVG from 'svg-inline-react';
import MaterialIcon from '@material/react-material-icon';
import { withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';

import './index.scss'
import { generateSvgFromGScribe } from '../../utils/gscribe';
import WidthAware from '../width-aware';
import { GrooveUtilsContext } from '../../contexts';

const styles = {
  root: {
    flexGrow: 1,
    padding: '20px 0'
  },
};

const gScribePropsMapper = (url) => (width) => ({ src: generateSvgFromGScribe(url, width) });

class GScribe extends React.Component {

  // noinspection JSUnusedGlobalSymbols
  static contextType = GrooveUtilsContext;

  render() {
    if (!this.props.url) {
      return null;
    }

    if (!this.context) {
      return (
        <div className={this.props.classes.root}>
          <Typography variant='caption'>Loading Groove Scribe Utils</Typography>
          <LinearProgress />
        </div>
      );
    }

    return (
      <WidthAware delay='200'
                  propsMapper={gScribePropsMapper(this.props.url)} maxWidth='1024' className='gscribe--wrapper'>
        <InlineSVG />
        <a className='gscribe-link' href={this.props.url} target='_blank' rel='noopener noreferrer'>
          <Typography variant='caption'>Open in Groove Scribe</Typography> <MaterialIcon icon='open_in_new' />
        </a>
      </WidthAware>
    );
  }
}

GScribe.propTypes = {
  url: PropTypes.string.isRequired,
};

export default withStyles(styles)(GScribe);


