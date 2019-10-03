import React from 'react';
import PropTypes from 'prop-types';
import './exercise.scss'

import GScribe from '../gscribe'

function Exercise({id, name, gScribeUrl, description}) {
  return (
    <div className='exercise'>
      <h3>
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
  description: PropTypes.string
};

export default Exercise;
