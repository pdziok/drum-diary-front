import React from 'react';
import PropTypes from 'prop-types';
import { TimelineItem }  from 'vertical-timeline-component-for-react';
import MaterialIcon from '@material/react-material-icon';
import { parseISO, format } from 'date-fns'

import GScribe from '../gscribe'

function timeFrom(input) {
  return format(parseISO(input), 'p');
}

function GScribeExercise({id, gScribeUrl, tempo, startedAt, finishedAt, notes}) {
  return (
      <TimelineItem
        key={id}
        dateText={`${timeFrom(startedAt)} - ${timeFrom(finishedAt)}`}
      >
        <div className='bpm'>
          <MaterialIcon icon='timer' />
          <span>{tempo}</span></div>
        <GScribe url={gScribeUrl} />
        {
          notes && <div className='notes'>{notes}</div>
        }
      </TimelineItem>
  )
}

GScribeExercise.propTypes = {
  id: PropTypes.string.isRequired,
  startedAt: PropTypes.string.isRequired,
  finishedAt: PropTypes.string.isRequired,
  gScribeUrl: PropTypes.string.isRequired,
  tempo: PropTypes.string.isRequired,
  notes: PropTypes.string
};

export default GScribeExercise;
