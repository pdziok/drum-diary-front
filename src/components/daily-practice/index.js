import React from 'react';
import PropTypes from 'prop-types';
import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';
import { parseISO, format } from 'date-fns'

import Exercise from '../exercise'

function timeFrom(input) {
  return format(parseISO(input), 'p');
}

function DailyPractice({entries}) {
  if (!entries || !entries.length) {
    return null;
  }

  return (
    <Timeline lineColor={'#ddd'}>
      { entries.map(entry =>
        <TimelineItem
          key={entry.id}
          dateText={`${timeFrom(entry.startedAt)} - ${timeFrom(entry.finishedAt)}`}
        >
          <Exercise {...entry.exercise} />
        </TimelineItem>) }
    </Timeline>
  )
}

DailyPractice.propTypes = {
  entries: PropTypes.shape({
    id: PropTypes.string.isRequired,
    startedAt: PropTypes.string.isRequired,
    finishedAt: PropTypes.string.isRequired,
    exercise: PropTypes.arrayOf(
      Exercise.propTypes
    )
  })
};

export default DailyPractice;
