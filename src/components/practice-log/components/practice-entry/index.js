import React from 'react';
import PropTypes from 'prop-types';
import MaterialIcon from '@material/react-material-icon';
import './index.scss'

import Exercise from '../../../exercise';

function Tempo({ value }) {
  if (!value) {
    return null;
  }

  return (
    <span className='bpm'>
      <MaterialIcon icon='timer' />
      <span>{value}</span>
    </span>
  )
}

function Comment({ value }) {
  if (!value) {
    return null;
  }

  return (
    <div className='notes'>
      {value}
    </div>
  )
}

function PracticeEntry({ id, bpm, notes: comment, exercise }) {
  return (
    <div className='practice-entry'>
      <Tempo value={bpm} />
      <Exercise {...exercise} />
      <Comment value={comment} />
    </div>
  )
}

PracticeEntry.propTypes = {
  id: PropTypes.string.isRequired,
  bpm: PropTypes.string,
  notes: PropTypes.string,
  exercise: Exercise.propTypes.isRequired
};

export default PracticeEntry;
