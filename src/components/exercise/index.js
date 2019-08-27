import React from 'react';
import PropTypes from 'prop-types';
import MaterialIcon from '@material/react-material-icon';
import './exercise.scss'

import GScribe from '../gscribe'

function Exercise({id, name, gScribeUrl, tempo, startedAt, finishedAt, description}) {
  return (
    <div>
      <h3>
        <span className='bpm'>
          <MaterialIcon icon='timer' />
          <span>{tempo}</span>
        </span>
        {name}
      </h3>
      <div className='description'>
        {description}
      </div>
      <GScribe url={gScribeUrl} />
    </div>
  )
}

Exercise.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  gScribeUrl: PropTypes.string.isRequired,
  tempo: PropTypes.string.isRequired,
  description: PropTypes.string
};

export default Exercise;
