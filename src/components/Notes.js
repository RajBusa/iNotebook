import React from 'react';
import { useContext } from 'react';
import noteContext from '../context/notes/noteContext';
import NoteItem from './NoteItem';

const Notes = () => {
  const a = useContext(noteContext)
  const {notes, setNotes} = a;
  // console.log(notes)
  return (
    <div className='row'>
      {notes.map((note)=>{
        return <NoteItem key={note._id} note={note}/>
      })}
    </div>
  )
}

export default Notes
