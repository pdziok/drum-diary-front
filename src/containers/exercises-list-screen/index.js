import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Container, Grid, LinearProgress, Paper } from '@mui/material';

import Exercise from '../../components/exercise';
import { fetchExercises } from '../../actions/exercises';
import { smartTruncate } from '../../utils/string';

export function ExercisesListScreen({ pending, list, fetchExercises }) {
  const { page = 1 } = useParams();

  useEffect(() => {
    fetchExercises(page);
  }, [page, fetchExercises]);

  console.log(pending, list);

  if (pending) {
    return (
      <LinearProgress />
    );
  }

  if (!list.length) {
    return ''
  }

  return (
    <Container>
      <Grid container spacing={1}>
        {list.map(exercise => <Grid item xs={12}>
          <Paper sx={{padding: 2}}>
            <Exercise {...exercise} description={smartTruncate(exercise.description, 100)} />
          </Paper>
        </Grid>)}
      </Grid>
    </Container>
  )
}

ExercisesListScreen.propTypes = {
  pending: PropTypes.bool,
  list: PropTypes.arrayOf(
    Exercise.propTypes
  ),
  fetchExercises: PropTypes.func,
};

const mapStateToProps = state => ({
  pending: state.exercises.pending,
  list: state.exercises.data,
});

const mapDispatchToProps = dispatch => ({
  fetchExercises: (page) => dispatch(fetchExercises(page)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExercisesListScreen);
