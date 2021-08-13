import React, { useState } from 'react';
import useChangeField from '@hooks/useChangeField';
import { Typography, Button, ButtonGroup, Container, makeStyles, TextField, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel } from '@material-ui/core';
import { KeyboardArrowRight } from '@material-ui/icons';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles({
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: 'block',
    // "& .Mui-focused": {
    //   color: '#d500f9'
    // }
  },
});

const CreateNote = () => {
  console.log('CreateNote');
  const classes = useStyles();
  const history = useHistory();
  const [title, onChangeTitle, setTitle, titleError, setTitleError] = useChangeField("");
  const [details, onChangeDetails, setDetails, detailsError, setDetailsError] = useChangeField("");
  const [category, setCategory] = useState('todos')
  const [date, setDate] = useState(new Date());

  const handleSubmit = (e:React.ChangeEvent<any>) => {
    e.preventDefault();
    setTitleError(false);
    setDetailsError(false);
    console.log(history);
    
    if (title === '') {
      setTitleError(true);
    }
    if (details === '') {
      setDetailsError(true);
    }
    if (title && details) {
      fetch('http://localhost:8000/notes', {
        method: 'POST',
        headers: {"Content-type": "application/json"},
        body: JSON.stringify({ title, details, category, date })
      }).then(() => history.push('/menu/diary'))
    }
  };

  return (
    <Container>
      <Typography
        variant="h6"
        color="textSecondary"
        component="h2"
        gutterBottom
      >
        Create a New Note
      </Typography>
      <br />
      <br />
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField 
          onChange={onChangeTitle}
          className={classes.field}
          label="Note Title"
          variant="outlined"
          color="secondary"
          fullWidth
          required
          error={titleError}
        />
        <TextField 
          onChange={onChangeDetails}
          className={classes.field}
          label="Details"
          variant="outlined"
          color="secondary"
          multiline
          minRows={4}
          fullWidth
          required
          error={detailsError}
        />
        <FormControl className={classes.field}>
          <FormLabel>Note Category</FormLabel>
          <RadioGroup value={category} onChange={(e) => setCategory(e.target.value)}>
            <FormControlLabel value="money" control={<Radio />} label="Money" />          
            <FormControlLabel value="todos" control={<Radio />} label="Todos" />          
            <FormControlLabel value="reminders" control={<Radio />} label="Reminders" />          
            <FormControlLabel value="work" control={<Radio />} label="Work" />          
          </RadioGroup>
        </FormControl>

        <Button
          onClick={() => console.log('button clicked')}
          type="submit"
          color="secondary"
          variant="contained"
          endIcon={<KeyboardArrowRight />}
        >
          Submit
        </Button>
      </form>

      {/* icons */}
      {/* <br />
      <AcUnitOutlined/>
      <AcUnitOutlined color="secondary" fontSize="large" />
      <AcUnitOutlined color="secondary" fontSize="small" />
      <AcUnitOutlined color="action" fontSize="small" />
      <AcUnitOutlined color="error" fontSize="small" />
      <AcUnitOutlined color="disabled" fontSize="small" /> */}
    </Container>
  )
};

export default CreateNote;