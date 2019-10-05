import React from 'react';
import PropTypes from 'prop-types';
import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react';
import { get, chain } from 'lodash'

import './index.scss'
import Exercise from '../exercise'
import PracticeEntry from './components/practice-entry';
import DateMarker from './components/date-marker';
import { timeFrom, dateFrom } from '../../utils/datetime';

class PracticeLog extends React.Component {

  constructor(props) {
    super(props);
    this.state = { entries: this.sortEntries(props.entries) }
  }

  sortEntries(entries) {
    return chain(entries)
      .groupBy(entry => dateFrom(entry.startedAt))
      .valuesIn()
      .reverse()
      .flatten()
      .value()
  }

  render() {
    const { entries } = this.state;

    if (!entries || !entries.length) {
      return null;
    }

    return (
      <Timeline lineColor={'#ddd'}>

        {entries.map((entry, i) =>
          <div key={i} className='entry--wrapper'>
            <DateMarker current={entry.startedAt} previous={get(entries, `[${i - 1}].startedAt`, null)} />
            <TimelineItem
              key={entry.id}
              dateText={`${timeFrom(entry.startedAt)} - ${timeFrom(entry.finishedAt)}`}
            >
              <PracticeEntry {...entry} />
            </TimelineItem>
          </div>
        )}
      </Timeline>
    )
  }
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
