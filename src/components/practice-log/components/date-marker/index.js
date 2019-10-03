import React from 'react';
import PropTypes from 'prop-types';
import { parseISO, format } from 'date-fns'
import classNames from 'classnames';

import './date-marker.scss'

function dateFrom(input) {
  return format(parseISO(input), 'PPP');
}

function DateMarker({ current, previous }) {
  const previousDate = previous && dateFrom(previous);
  const currentDate = dateFrom(current);
  const dateToDisplay = previousDate !== currentDate ? currentDate : null;

  if (!dateToDisplay) {
    return null;
  }

  return (
    <div className={classNames({ 'practice-date-marker': true, 'first-one': !previousDate })}>
      {dateToDisplay}
    </div>
  )
}

DateMarker.propTypes = {
  current: PropTypes.string.isRequired,
  previous: PropTypes.string,
};

export default DateMarker;


