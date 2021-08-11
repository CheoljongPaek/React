import React, { useState, useEffect } from 'react';
import { Container, Grid, Paper } from '@material-ui/core'
import NoteCard from '../Components/NoteCard'

export interface NoteProps {
  "title": string,
  "details": string,
  "category": string,
  "id": number
}

const Note = () => {
  console.log('Note');
  const [notes, setNotes] = useState<NoteProps[]>([]);
  useEffect(() => {
    fetch('http://localhost:8000/notes')
      .then(res => res.json())
      .then(data => setNotes(data))
  }, []);

  return (
    <Container>
      <Grid container>
        {notes.map((note: NoteProps) => (
          <Grid item xs={12} md={6} lg={4} key={note.id}>
            {/* <Paper>{ note.title }</Paper>   */}
            <NoteCard note={note} />
          </Grid>
        ))}
      </Grid>
    </Container>
  )
};

export default Note;