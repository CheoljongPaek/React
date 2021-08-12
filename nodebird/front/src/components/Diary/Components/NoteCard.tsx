import React from 'react';
import { NoteProps } from '../Page/Note';
import { Card, CardHeader, CardContent, IconButton, Typography, makeStyles } from '@material-ui/core';
import { DeleteOutlined } from '@material-ui/icons';

type NoteCardProps = {
  note: NoteProps
  handleDelete: (id:number) => void
}

const useStyles = makeStyles({
  test: {
    border: (note: NoteProps) => {
      if (note.category === 'work') {
        return '1px solid red'
      }
    }
  }
});

const NoteCard = ({ note, handleDelete }: NoteCardProps) => {
  const classes = useStyles(note);

  return (
    <div>
      <Card elevation={3} className={classes.test}>
        <CardHeader 
          action={
            <IconButton onClick={() => handleDelete(note.id)}>
              <DeleteOutlined />
            </IconButton>
          }
          title={note.title}
          subheader={note.category}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary">
            {note.details}
          </Typography>
        </CardContent>
      </Card>
    </div>
  )
};

export default NoteCard;