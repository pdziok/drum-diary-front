import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import { blue } from '@material-ui/core/colors';
import Link from '@material-ui/core/Link';
import PersonIcon from '@material-ui/icons/Person';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import LaunchIcon from '@material-ui/icons/Launch';

const ExpansionPanel = withStyles({
  root: {
    border: '1px solid rgba(0, 0, 0, .125)',
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
  expanded: {},
})(MuiExpansionPanel);

const ExpansionPanelSummary = withStyles({
  root: {
    backgroundColor: 'rgba(0, 0, 0, .03)',
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
    marginBottom: -1,
    minHeight: 56,
    '&$expanded': {
      minHeight: 56,
    },
  },
  content: {
    '&$expanded': {
      margin: '12px 0',
    },
  },
  expanded: {}

})(MuiExpansionPanelSummary);

const ExpansionPanelDetails = withStyles(theme => ({
  root: {
    padding: theme.spacing(2),
    flexDirection: 'column'
  },
}))(MuiExpansionPanelDetails);

const emails = ['username@gmail.com', 'user02@gmail.com'];
const useStyles = makeStyles({
  avatar: {
    backgroundColor: blue[100],
    color: blue[600],
  },
});

function NewEntryDialog({ onClose, selectedValue, open, initiallyExpanded = 'existing' }) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(initiallyExpanded);

  const handleChange = panel => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = value => {
    onClose(value);
  };

  return (
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
      <DialogTitle id="simple-dialog-title">Select exercise</DialogTitle>
      <div>
        <ExpansionPanel square expanded={expanded === 'existing'} onChange={handleChange('existing')}>
          <ExpansionPanelSummary aria-controls="existing-content" id="existing-header" expandIcon={<ExpandMoreIcon />}>
            <Typography>Existing exercise</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <List fullWidth>
              {emails.map(email => (
                <ListItem button onClick={() => handleListItemClick(email)} key={email}>
                  <ListItemAvatar>
                    <Avatar className={classes.avatar}>
                      <PersonIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary={email} />
                </ListItem>
              ))}
            </List>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel square expanded={expanded === 'new-exercise'} onChange={handleChange('new-exercise')}>
          <ExpansionPanelSummary aria-controls="new-exercise-content" id="new-exercise-header" expandIcon={<ExpandMoreIcon />}>
            <Typography>New exercise</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <DialogContent>
              <DialogContentText>
                Insert name and the URL of the exercise.
                URL should be either Youtube or <Link href='https://www.mikeslessons.com/groove/' target="_blank" rel="noopener">Groove Scribe <LaunchIcon fontSize='small'/></Link>.
              </DialogContentText>

              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Name"
                type="url"
              />
              <TextField
                autoFocus
                margin="dense"
                id="url"
                label="URL"
                type="url"
                fullWidth
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="primary">
                Cancel
              </Button>
              <Button onClick={handleClose} color="primary">
                Create & add
              </Button>
            </DialogActions>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    </Dialog>
  );
}

NewEntryDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
  initiallyExpanded: PropTypes.string
};

export default NewEntryDialog;
