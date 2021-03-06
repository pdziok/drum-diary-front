import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './index.scss'
import { AddNewButton } from '../../index';
import { longDateFrom } from '../../../../utils/datetime';

function DateMarker({ current, previous, onClickAddNew }) {
  const previousDate = previous && longDateFrom(previous);
  const currentDate = longDateFrom(current);
  const dateToDisplay = previousDate !== currentDate ? currentDate : null;

  if (!dateToDisplay) {
    return null;
  }

  return (
    <div>
      <div className={classNames({ 'practice-date-marker': true, 'first-one': !previousDate })}>
        {dateToDisplay}
      </div>
      <AddNewButton onClick={onClickAddNew} />
    </div>
  )
}

DateMarker.propTypes = {
  current: PropTypes.string.isRequired,
  previous: PropTypes.string,
  onClickAddNew: PropTypes.func
};

export default DateMarker;


