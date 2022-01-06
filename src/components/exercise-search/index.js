import React from 'react';
import PropTypes from 'prop-types';
import { Box, Chip, TextField } from '@mui/material';
import { remove } from 'lodash';

const availableTags = ['hands', 'legs', 'coordination', 'independence', 'speed'];

function ExerciseSearch({ text = '', tags = [], onChange = () => {} }) {
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
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
    }}>
      <TextField
        autoFocus
        id="search"
        label="Search"
        type="search"
        // helperText="Use hashtag to search for tags"
        onChange={onTextChange}
        defaultValue={text}
        variant="standard"
      />
      <Box sx={{
        display: 'flex',
        justifyContent: 'left',
        flexWrap: 'wrap',
        m: 1,
        '& > *': {
          m: 0.2,
        },
      }}>
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
