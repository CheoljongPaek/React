import React from 'react';
import { NoteProps } from '../Page/Note';

type NoteCardProps = {
  note: NoteProps
}

const NoteCard = ({ note }: NoteCardProps) => {

  return (
    <div>
      {note.title}
    </div>
  )
};

export default NoteCard;