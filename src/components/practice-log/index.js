import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react';
import MaterialIcon from '@material/react-material-icon';
import { get, chain } from 'lodash'

import './index.scss'
import Exercise from '../exercise'
import PracticeEntry from './components/practice-entry';
import DateMarker from './components/date-marker';
import { timeFrom, dateFrom } from '../../utils/datetime';
import SelectExerciseDialog from './components/select-exercise-dialog';
import { accentedParadiddles, doubles, paradiddle, singles } from '../../stories/fixtures';

export const AddNewButton = ({ onClick }) => {
  return (
    <div className='add-new-button' onClick={onClick}>
      <MaterialIcon icon='add_circle' />
      <span className='description'>Add new log entry</span>
    </div>
  )
};

const sortEntries = (entries) => {
  return chain(entries)
    .groupBy(entry => dateFrom(entry.startedAt))
    .valuesIn()
    .reverse()
    .flatten()
    .value()
};

const exercises = [singles, doubles, paradiddle, accentedParadiddles];

function PracticeLog({ entries }) {
  const [sortedEntries, setEntries] = useState([]);
  const [addNewDialogOpen, setDialogOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState('existing');

  useEffect(() => {
    setEntries(sortEntries(entries))
  }, [entries]);

  const handleClickOpen = () => {
    setSelectedValue('existing');
    setDialogOpen(true);
  };

  const handleClose = value => {
    setDialogOpen(false);
    setSelectedValue(value);
  };

  return (
    <>
      <Timeline lineColor={'#ddd'}>
        {sortedEntries.map((entry, i) => {
            const previous = get(sortedEntries, `[${i - 1}].startedAt`, null);
            return (
              <div key={i} className='entry--wrapper'>
                {previous && <AddNewButton onClick={handleClickOpen} />}
                <DateMarker current={entry.startedAt} previous={previous} onClickAddNew={handleClickOpen} />
                <TimelineItem key={entry.id} dateText={timeFrom(entry.startedAt)}>
                  <PracticeEntry {...entry} />
                </TimelineItem>
              </div>
            )
          }
        )}
        <AddNewButton onClick={handleClickOpen} />
      </Timeline>
      <SelectExerciseDialog onClose={handleClose} open={addNewDialogOpen} selectedValue={selectedValue}
                            initiallyExpanded='existing' search={{list: exercises, pending: false}} />
    </>
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
