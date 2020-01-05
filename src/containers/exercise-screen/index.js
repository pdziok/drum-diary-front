import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  Container,
  Grid,
  LinearProgress,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography
} from '@material-ui/core';

import Exercise from '../../components/exercise';
import { fetchExercise, fetchExerciseExecutions } from '../../actions/exercise';
import { dateFrom, durationBetween } from '../../utils/datetime';

function Executions({ data = [], pending }) {
  if (pending) {
    return (
      <LinearProgress />
    );
  }

  if (!data.length) {
    return <Typography variant='body2'>No executions yet</Typography>
  }

  return (
    <Paper>
      <Table size="small" aria-label="executions table">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Duration</TableCell>
            <TableCell>BPM</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(entry => (
            <TableRow>
              <TableCell>{dateFrom(entry.startedAt)}</TableCell>
              <TableCell>{durationBetween(entry.startedAt, entry.finishedAt)}</TableCell>
              <TableCell>{entry.bpm}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  )
}

export function ExerciseScreen({ exercise, executions, fetchExercise, fetchExecutions }) {
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      fetchExercise(id);
      fetchExecutions(id);
    }
  }, []);

  if (exercise.pending) {
    return (
      <LinearProgress />
    );
  }

  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Exercise {...exercise.data} />
        </Grid>
        <Grid item xs={12}>
          <Typography variant='h4'>Executions</Typography>
          <Executions {...executions} />
        </Grid>
      </Grid>
    </Container>
  )
}

const mapStateToProps = state => ({
  exercise: state.exercise.details,
  executions: state.exercise.executions,
  comments: state.exercise.comments
});

const mapDispatchToProps = dispatch => ({
  fetchExercise: (id) => dispatch(fetchExercise(id)),
  fetchExecutions: (id) => dispatch(fetchExerciseExecutions(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ExerciseScreen);
