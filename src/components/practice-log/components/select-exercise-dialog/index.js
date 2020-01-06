import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import {
  TextField, Typography, Link, Button, LinearProgress, Box as MuiBox,
  List, ListItem, ListItemText,
  Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions
} from '@material-ui/core';
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import { blue } from '@material-ui/core/colors';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import LaunchIcon from '@material-ui/icons/Launch';

import { YoutubeVideo } from '../../../exercise';
import GScribe from '../../../gscribe'
import { smartTruncate } from '../../../../utils/string';
import ExerciseSearch from '../../../exercise-search';
import Exercise from '../../../exercise';

const ExpansionPanel = withStyles({
  root: {
    border: '1px solid rgba(0, 0, 0, .125)',
    boxShadow: 'none',
    borderBottom: 0,
    '&$expanded': {
      margin: 'auto',
    },
    '&:first-child': {
      borderTop: 0,
    },
  },
  expanded: {},
})(MuiExpansionPanel);

const ExpansionPanelSummary = withStyles({
  root: {
    backgroundColor: '#f7f7f7',
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
    position: 'sticky',
    top: 0,
    zIndex: 1,
    marginBottom: -1,
    minHeight: 56,
    '&$expanded': {
      minHeight: 56,
    },
    '&:first-child': {
      borderTop: 0
    }
  },
  content: {
    '&$expanded': {
      margin: '12px 0',
    },
  },
  expanded: {}

})(MuiExpansionPanelSummary);

const useStyles = makeStyles({
  avatar: {
    backgroundColor: blue[100],
    color: blue[600],
  },
  existingPanelDetails: {
    padding: 0,
    flexDirection: 'column',
  },
  newExercisePanelDetails: {
    flexDirection: 'column',
  },
  dialogContent: {
    padding: 0
  }
});

const Container = withStyles(theme => ({
  root: {
    padding: theme.spacing(1, 2)
  }
}))(MuiBox);

function ExercisesList({ pending, exercises = [], handleClick }) {
  if (pending) {
    return (
      <LinearProgress />
    );
  }

  if (!exercises.length) {
    return <Container>
      <Typography variant="body2">No exercises matching searching criteria. Try creating a new one.</Typography>
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
  handleClick: PropTypes.func.isRequired
};

const defaultSearchParams = {pending: false, list: [], onChange: () => {}, criteria: { text: '', tags: []}};

function SelectExerciseDialog({ exercises, onClose, open, initiallyExpanded = '', search = defaultSearchParams }) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(initiallyExpanded);

  const handleChange = panel => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const handleClose = () => {
    onClose();
  };

  const handleListItemClick = value => {
    onClose(value);
  };

  return (
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open} scroll='paper'>
      <DialogTitle id="simple-dialog-title">Select exercise</DialogTitle>
      <DialogContent dividers={true} className={classes.dialogContent}>
        <ExpansionPanel square expanded={expanded === 'existing'} onChange={handleChange('existing')}>
          <ExpansionPanelSummary aria-controls="existing-content" id="existing-header" expandIcon={<ExpandMoreIcon />}>
            <Typography>Existing exercise</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className={classes.existingPanelDetails}>
            <ExerciseSearch {...search.criteria} />
            <ExercisesList pending={search.pending} exercises={search.list} handleClick={handleListItemClick} />
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel square expanded={expanded === 'new-exercise'} onChange={handleChange('new-exercise')}>
          <ExpansionPanelSummary aria-controls="new-exercise-content" id="new-exercise-header"
                                 expandIcon={<ExpandMoreIcon />}>
            <Typography>New exercise</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className={classes.newExercisePanelDetails}>
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
              autoFocus
              margin="dense"
              id="url"
              label="URL"
              type="url"
              fullWidth
            />
            <TextField
              autoFocus
              margin="dense"
              id="description"
              label="Description"
              fullWidth
              multiline
            />
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        {
          expanded === 'new-exercise' &&
          <Button onClick={handleClose} color="primary">
            Create & add
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
