import React from 'react';
import PropTypes from 'prop-types';
import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react';
import { parseISO, format } from 'date-fns'
import { get } from 'lodash'

import './practice-log.scss'
import Exercise from '../exercise'
import Entry from './components/entry';
import DateMarker from './components/date-marker';

function timeFrom(input) {
  return format(parseISO(input), 'p');
}

function dateFrom(input) {
  return format(parseISO(input), 'PPP');
}

function PracticeLog({ entries }) {
  if (!entries || !entries.length) {
    return null;
  }

  return (
    <Timeline lineColor={'#ddd'}>

      {entries.map((entry, i) => {
        const previousDate = entries[i-1] && dateFrom(entries[i-1].startedAt);
        const currentDate = dateFrom(entry.startedAt);
        const dateToDisplay = previousDate !== currentDate ? currentDate : null;
        return (
          <div>
            <DateMarker current={entry.startedAt} previous={get(entries, `[${i-1}].startedAt`, null)}/>
            <TimelineItem
              key={entry.id}
              dateText={`${timeFrom(entry.startedAt)} - ${timeFrom(entry.finishedAt)}`}
            >
              <Entry {...entry} />
            </TimelineItem>
          </div>
        )
        }
      )}
    </Timeline>
  )
}

PracticeLog.propTypes = {
  entries: PropTypes.shape({
    id: PropTypes.string.isRequired,
    startedAt: PropTypes.string.isRequired,
    finishedAt: PropTypes.string.isRequired,
    exercise: PropTypes.arrayOf(
      Exercise.propTypes
    )
  })
};

export default PracticeLog;
