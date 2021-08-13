import React from 'react';
import { NoteProps } from '../Page/Note';
import { Avatar, Card, CardHeader, CardContent, IconButton, Typography, makeStyles } from '@material-ui/core';
import { DeleteOutlined } from '@material-ui/icons';
import { blue, green, pink, yellow } from '@material-ui/core/colors';
import { format } from 'date-fns';
type NoteCardProps = {
  note: NoteProps
  handleDelete: (id:number) => void
}

const useStyles = makeStyles({
  avatar: {
    backgroundColor: (note: NoteProps) => {
      if (note.category === 'work') {
        return yellow[700]
      }
      if (note.category === 'money') {
        return green[500]
      }
      if (note.category === 'todos') {
        return pink[500]
      }
      return blue[500]
    }
  }
});

const NoteCard = ({ note, handleDelete }: NoteCardProps) => {
  const classes = useStyles(note);
  const date = new Date(Date.parse(note.date));

  return (
    <div>
      <Card elevation={3}>
        <CardHeader
          avatar={
            <Avatar className={classes.avatar}>
              {note.category[0].toUpperCase()}
            </Avatar>
          }
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
      <div>{format(Date.parse(note.date), 'do MMMM Y')}</div>
    </div>
  )
};

export default NoteCard;