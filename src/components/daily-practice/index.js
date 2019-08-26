import React from 'react';
import PropTypes from 'prop-types';
import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';
import GScribe from '../gscribe'

function DailyPractice({exercises}) {
  if (!exercises || !exercises.length) {
    return null;
  }

  return (
    <Timeline lineColor={'#ddd'}>
      <TimelineItem
        key="001"
        dateText='15:30 - 15:45'
        // style={{ color: '#e86971' }}
      >
        <GScribe
          url='https://www.mikeslessons.com/groove/?Debug=1&TimeSig=4/4&Div=16&Tempo=80&Measures=1&H=|xxxxxxxxxxxxxxxx|&S=|----O-------O---|&K=|o-------o-------|' />
        <span className='bpm'>140</span>
      </TimelineItem>
      <TimelineItem
        key="003"
        dateText='2019-07-03'
      />
      <TimelineItem
        key="002"
        dateText='16:00 - 16:30'
      >
        <h3>Paradiddle z akcentami</h3>
        <h4>Grać jedno po drugim</h4>
        <GScribe
          url='https://www.mikeslessons.com/groove/?Debug=1&TimeSig=4/4&Div=16&Tempo=80&Measures=2&H=|----------------|----------------|&S=|OoooOoooOoooOooo|ooOOooOOooOOooOO|&K=|----------------|----------------|&Stickings=|RLRRLRLLRLRRLRLL|RLRRLRLLRLRRLRLL|' />
        <span className='bpm'>140</span>
      </TimelineItem>
      <TimelineItem
        key="002"
        dateText='16:30 - 17:00'
      >
        <h3>Akcenty w triolach ósemkowych</h3>
        <h4>Grać jedno po drugim</h4>
        <GScribe
          url='https://www.mikeslessons.com/groove/?Debug=1&TimeSig=4/4&Div=12&Tempo=80&Measures=3&MetronomeFreq=4&H=|------------|------------|------------|&S=|OooOooOooOoo|oOooOooOooOo|ooOooOooOooO|&K=|------------|------------|------------|&Stickings=|RRLLRRLLRRLL|RRLLRRLLRRLL|RRLLRRLLRRLL|' />
        <span className='bpm'>80</span>
      </TimelineItem>
    </Timeline>
  )
}

const GScribeExcercise = PropTypes.shape({
  gScribeUrl: PropTypes.string.isRequired,
  tempo: PropTypes.string.isRequired
});

DailyPractice.propTypes = {
  exercises: PropTypes.arrayOf(
    GScribeExcercise
  )
};

export default DailyPractice;
