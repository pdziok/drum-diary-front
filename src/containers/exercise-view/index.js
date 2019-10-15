import React from 'react';
import { connect } from 'react-redux';
import LinearProgress from '@material-ui/core/LinearProgress';

import Exercise from '../../components/exercise';
import { fetchExercise } from '../../actions/exercise';

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

    return <Exercise {...this.props.exercise} />
  }
}

const mapStateToProps = state => ({
  exercise: state.exercises.current
});

const mapDispatchToProps = dispatch => ({
  fetchExercise: (id) => dispatch(fetchExercise(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ExerciseView);
