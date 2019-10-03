import React from 'react';
import PropTypes from 'prop-types';
import MaterialIcon from '@material/react-material-icon';
import './entry.scss'

import Exercise from '../../../exercise';

function Entry({ id, tempo, notes, exercise }) {
  return (
    <div className='entry'>
      {tempo && <span className='bpm'>
          <MaterialIcon icon='timer' />
          <span>{tempo}</span>
        </span>}
      <Exercise {...exercise} />
      {notes &&
      <div className='notes'>
        {notes}
      </div>
      }
    </div>
  )
}

Entry.propTypes = {
  id: PropTypes.string.isRequired,
  tempo: PropTypes.string,
  notes: PropTypes.string,
  exercise: Exercise.propTypes.isRequired
};

export default Entry;
