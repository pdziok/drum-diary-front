import React from 'react';
import PropTypes from 'prop-types';
import { Box, Chip, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles/index';
import { remove } from 'lodash';

const useStyles = makeStyles(theme => ({
  searchWrapper: {
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing(0, 2),
  },
  tagsWrapper: {
    display: 'flex',
    justifyContent: 'left',
    flexWrap: 'wrap',
    margin: theme.spacing(0, -0.5),
    '& > *': {
      margin: theme.spacing(0.5),
    },
  }
}));

const availableTags = ['hands', 'legs', 'coordination', 'independence', 'speed'];

function ExerciseSearch({ text = '', tags = [], onChange = () => {} }) {
  const classes = useStyles();
  const [selectedTags, setSelectedTags] = React.useState(tags);
  const [searchText, setSearchText] = React.useState(text);

  const toggleTag = (tag) => () => {
    if (selectedTags.includes(tag)) {
      const copy = [...selectedTags];
      remove(copy, (n) => n === tag);
      setSelectedTags(copy);
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
    onChange(generateResult());
  };

  const onTextChange = (event) => {
    setSearchText(event.target.value);
    onChange(generateResult())
  };

  const generateResult = () => ({
    text: searchText,
    tags: selectedTags
  });

  return (
    <Box className={classes.searchWrapper}>
      <TextField
        autoFocus
        id="search"
        label="Search"
        type="search"
        // helperText="Use hashtag to search for tags"
        onChange={onTextChange}
        defaultValue={text}
      />
      <Box className={classes.tagsWrapper}>
        {availableTags.map(tag =>
          <Chip color="primary" size="small" onClick={toggleTag(tag)} label={tag}
                variant={selectedTags.includes(tag) ? 'default' : 'outlined'} />
        )}
        {/*<Chip size="small" onDelete={() => {}} label="paradiddle" />*/}
        {/*<Chip size="small" onDelete={() => {}} label="accents" />*/}
      </Box>
    </Box>
  )
}

ExerciseSearch.propTypes = {
  text: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
  onChange: PropTypes.func,
};

export default ExerciseSearch;
