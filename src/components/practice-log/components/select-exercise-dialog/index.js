import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@mui/styles';
import {
  TextField, InputAdornment, Typography, Link, Button, LinearProgress, Box as MuiBox, Grid,
  List, ListItem, ListItemText,
  Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions,
} from '@mui/material';
import {   TimePicker } from '@mui/lab';
import LaunchIcon from '@mui/icons-material/Launch';
import { addMinutes } from 'date-fns'

import { YoutubeVideo } from '../../../exercise';
import GScribe from '../../../gscribe'
import { smartTruncate } from '../../../../utils/string';
import ExerciseSearch from '../../../exercise-search';
import Exercise from '../../../exercise';
import { minutesBetween } from '../../../../utils/datetime';

const Container = withStyles(() => ({
  root: {
    px: 1,
    py: 2
  }
}))(MuiBox);

function ExercisesList({ pending, exercises = [], handleClick, onNewExerciseClick }) {
  const handleNewClick = (event) => {
    event.preventDefault();
    onNewExerciseClick();
  };

  if (pending) {
    return (
      <LinearProgress />
    );
  }

  if (!exercises.length) {
    return <Container>
      <Typography variant="body2">
        No exercises matching searching criteria.
        Try <Link href="#" onClick={handleNewClick}>creating a new one</Link>
      </Typography>
    </Container>
  }

  return <List fullWidth>
    {exercises.map(exercise => (
      <ListItem button onClick={() => handleClick(exercise.id)} key={exercise.id}>
        <ListItemText
          primary={exercise.name}
          secondary={<>
            <Typography variant='body2'>{smartTruncate(exercise.description, 100)}</Typography>
            <YoutubeVideo {...exercise.youtube} />
            <GScribe {...exercise.gScribe} hideLink={true} />
          </>}
        />
      </ListItem>
    ))}
  </List>
}

ExercisesList.propTypes = {
  pending: PropTypes.bool,
  exercises: PropTypes.arrayOf(Exercise.propTypes),
  handleClick: PropTypes.func.isRequired,
  onNewExerciseClick: PropTypes.func.isRequired,
};

const defaultSearchParams = {
  pending: false, list: [], onChange: () => {
  }, criteria: { text: '', tags: [] }
};

const getDialogTitle = (step) => {
  switch (step) {
    case 1:
      return 'Select exercise';
    case 2:
      return 'Create new exercise';
    case 3:
      return 'Fill in entry details';
    default:
      return '';
  }
};

function ExerciseSelection({ search, onSelect, onNewExerciseClick }) {
  return <>
    <Container>
      <ExerciseSearch {...search.criteria} />
    </Container>
    <ExercisesList pending={search.pending} exercises={search.list} handleClick={onSelect}
                   onNewExerciseClick={onNewExerciseClick} />
  </>
}

ExerciseSelection.propTypes = {
  search: PropTypes.shape({ //todo export to search input
    pending: PropTypes.bool,
    list: PropTypes.arrayOf(Exercise.propTypes),
    onChange: PropTypes.func,
    criteria: PropTypes.shape({
      text: PropTypes.string,
      tags: PropTypes.arrayOf(PropTypes.string),
    })
  }),
  onSelect: PropTypes.func.isRequired,
  onNewExerciseClick: PropTypes.func.isRequired
};

function ExerciseCreation() {
  return <>
    <DialogContentText>
      Insert name and the URL of the exercise.
      URL should be either Youtube or <Link href='https://www.mikeslessons.com/groove/' target="_blank"
                                            rel="noopener">Groove Scribe <LaunchIcon fontSize='small' /></Link>.
    </DialogContentText>

    <TextField
      autoFocus
      margin="dense"
      id="name"
      label="Name"
      type="url"
      required={true}
    />
    <TextField
      margin="dense"
      id="url"
      label="URL"
      type="url"
      fullWidth
    />
    <TextField
      margin="dense"
      id="description"
      label="Description"
      fullWidth
      multiline
    />
  </>
}

function EntryCompletion({ entry, onChange }) {
  const handleTimeChange = (field) => (event) => {
    onChange({
      ...entry,
      [field]: event.toISOString()
    })
  };

  const handleFieldChange = (field) => event => {
    onChange({
      ...entry,
      [field]: event.target.value
    })
  };

  const handleDurationChange = (event) => {
    onChange({
      ...entry,
      finishedAt: addMinutes(new Date(entry.startedAt), event.target.value).toISOString(),
    })
  };

  return <div>
    <DialogContentText>
      Fill in details of the practice time
    </DialogContentText>
    <Grid container wrap="nowrap" justify="space-between">
      <TimePicker
        margin="dense"
        id="started-at-picker"
        label="Started at"
        value={new Date(entry.startedAt)}
        sx={{
          mx: 1,
          width: 140,
          '&:first-child': {
            ml: 0
          },
        }}
        onChange={handleTimeChange('startedAt')}
        KeyboardButtonProps={{
          'aria-label': 'change time',
        }}
        renderInput={
          props => <TextField {...props} />
        }
      />
      <TextField
        type="number"
        margin="dense"
        id="duration-picker"
        label="Duration"
        sx={{
          mx: 1,
          width: 120,
        }}
        value={minutesBetween(entry.startedAt, entry.finishedAt)}
        onChange={handleDurationChange}
        InputProps={{
          endAdornment: <InputAdornment position="end">minutes</InputAdornment>
        }}
      />
      <TimePicker
        margin="dense"
        id="finished-at-picker"
        label="Finished at"
        value={new Date(entry.finishedAt)}
        onChange={handleTimeChange('finishedAt')}
        sx={{
          mx: 1,
          width: 140,
          '&:first-child': {
            ml: 0
          },
        }}
        KeyboardButtonProps={{
          'aria-label': 'change time',
        }}
        renderInput={
          props => <TextField {...props} />
        }
      />
    </Grid>
    <Grid direction="column">
      <TextField
        type="text"
        margin="dense"
        id="tempo"
        label="Tempo"
        value={entry.bpm}
        onChange={handleFieldChange('bpm')}
        InputProps={{
          endAdornment: <InputAdornment position="end">bpm</InputAdornment>
        }}
      />
      <TextField
        type="text"
        margin="dense"
        id="notes"
        fullWidth={true}
        label="Notes"
        multiline
        value={entry.bpm}
        onChange={handleFieldChange('notes')}
      />
    </Grid>
  </div>
}

function SelectExerciseDialog({ exercises, onClose, open, initialStep = 1, search = defaultSearchParams }) {
  const [step, setStep] = React.useState(initialStep);
  const [previousStep, setPreviousStep] = React.useState(1);
  const [exerciseId, selectExercise] = React.useState();
  const [exerciseDetails, setExerciseDetails] = React.useState({ name: null, url: null, description: null });
  const [entryDetails, setEntryDetails] = React.useState({
    startedAt: '2020-01-10T10:00:00Z',
    finishedAt: '2020-01-10T10:10:00Z',
    bpm: null,
    notes: null
  });

  const goToStep = (nextStep) => () => {
    setPreviousStep(step);
    setStep(nextStep)
  };

  const handleClose = () => {
    onClose();
  };

  const handleExerciseSelection = (exerciseId) => {
    selectExercise(exerciseId);
    goToStep(3)();
  };

  return (
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open} scroll='paper'>
      <DialogTitle id="simple-dialog-title">{getDialogTitle(step)}</DialogTitle>
      <DialogContent dividers={true}>
        {step === 1 &&
        <ExerciseSelection search={search} onSelect={handleExerciseSelection} onNewExerciseClick={goToStep(2)} />}
        {step === 2 && <ExerciseCreation onChange={setExerciseDetails} />}
        {step === 3 && <EntryCompletion exercise={{ ...exerciseDetails, id: exerciseId }} entry={entryDetails}
                                        onChange={setEntryDetails} />}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="secondary">
          Cancel
        </Button>
        {
          step !== 1 &&
          <Button onClick={goToStep(previousStep)}>
            Go back
          </Button>
        }
        {
          step === 1 &&
          <Button onClick={goToStep(2)} color="primary">
            Create new exercise
          </Button>
        }
        {
          step === 2 &&
          <Button onClick={goToStep(3)} color="primary">
            Continue
          </Button>
        }
        {
          step === 3 &&
          <Button onClick={onClose()} color="primary">
            Continue
          </Button>
        }
      </DialogActions>
    </Dialog>
  );
}

SelectExerciseDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  initiallyExpanded: PropTypes.string,
  search: PropTypes.shape({ //todo export to search input
    pending: PropTypes.bool,
    list: PropTypes.arrayOf(Exercise.propTypes),
    onChange: PropTypes.func,
    criteria: PropTypes.shape({
      text: PropTypes.string,
      tags: PropTypes.arrayOf(PropTypes.string),
    })
  })
};

export default SelectExerciseDialog;
