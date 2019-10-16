import React from 'react';
import PropTypes from 'prop-types';
import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react';
import MaterialIcon from '@material/react-material-icon';
import { get, chain } from 'lodash'

import './index.scss'
import Exercise from '../exercise'
import PracticeEntry from './components/practice-entry';
import DateMarker from './components/date-marker';
import { timeFrom, dateFrom } from '../../utils/datetime';

export const AddNewButton = () => {
  return (
    <div className='add-new-button'>
      <MaterialIcon icon='add_circle' />
      <span className='description'>Add new log entry</span>
    </div>
  )
};

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
    const entries = this.state.entries || [];

    return (
      <Timeline lineColor={'#ddd'}>
        {entries.map((entry, i) => {
            const previous = get(entries, `[${i - 1}].startedAt`, null);
            return (
              <div key={i} className='entry--wrapper'>
                <DateMarker current={entry.startedAt} previous={previous} />
                <TimelineItem key={entry.id} dateText={timeFrom(entry.startedAt)}>
                  <PracticeEntry {...entry} />
                </TimelineItem>
              </div>
            )
          }
        )}
        <AddNewButton />
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
