import React from 'react';
import { connect } from 'react-redux';
import {
  LinearProgress, Grid, Typography, Link,
  Table, TableBody, TableCell, TableHead, TableRow,
  Paper, Card, CardContent
} from '@material-ui/core';

import Exercise from '../../components/exercise';
import { fetchExercise } from '../../actions/exercise';
import { dateFrom, durationBetween, timestampFrom } from '../../utils/datetime';

function Executions({ values = [] }) {
  if (!values.length) {
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
          {values.map(entry => (
            <TableRow>
              <TableCell>{dateFrom(entry.start)}</TableCell>
              <TableCell>{durationBetween(entry.start, entry.end)}</TableCell>
              <TableCell>{entry.bpm}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  )
}

function Comment({ author, timestamp, content }) {
  return (
    <Card>
      <CardContent>
        <Typography component='span'>{timestampFrom(timestamp)}</Typography>
        <Typography component='span'><Link href={`/users/${author.id}`}>{author.name}</Link></Typography>
        <Typography>{content}</Typography>
      </CardContent>
    </Card>
  )
}

class ExerciseView extends React.Component {

  componentWillMount() {
    if (!this.props.exercise && this.props.id) {
      this.props.fetchExercise(this.props.id)
    }
  }

  render() {
    if (!this.props.exercise) {
      return (
        <LinearProgress />
      );
    }

    return (
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Exercise {...this.props.exercise} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant='h4'>Executions</Typography>
          <Executions values={this.props.executions} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant='h4'>Comments</Typography>
          {this.props.comments.map(comment => (<Comment {...comment} />))}
        </Grid>
      </Grid>
    )
  }
}

const mapStateToProps = state => ({
  exercise: state.exercises.current,
  executions: state.exercises.executions,
  comments: state.exercises.comments
});

const mapDispatchToProps = dispatch => ({
  fetchExercise: (id) => dispatch(fetchExercise(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ExerciseView);
