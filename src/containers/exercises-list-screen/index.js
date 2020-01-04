import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Container, Grid, LinearProgress, Paper } from '@material-ui/core';
import { truncate } from 'lodash'

import Exercise from '../../components/exercise';
import { fetchExercises } from '../../actions/exercises';
import { makeStyles } from '@material-ui/core/styles/index';

const useStyles = makeStyles(theme => ({
  singleExercise: {
    padding: theme.spacing(2),
  },
}));

function ExercisesListScreen({ pending, list, fetchExercises }) {
  const { page = 1 } = useParams();
  const classes = useStyles();

  useEffect(() => {
      fetchExercises(page);
  }, []);

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
        <Paper className={classes.singleExercise}>
          <Exercise {...exercise} description={truncate(exercise.description, {length: 100, separator: /[,.]? +/})} />
        </Paper>
      </Grid>)}
      </Grid>
    </Container>
  )
}

const mapStateToProps = state => ({
  pending: state.exercises.pending,
  list: state.exercises.data,
});

const mapDispatchToProps = dispatch => ({
  fetchExercises: (id) => dispatch(fetchExercises(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExercisesListScreen);
