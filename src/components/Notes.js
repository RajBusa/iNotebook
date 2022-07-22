import React from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import noteContext from '../context/notes/noteContext';
import AddNote from './AddNote';
import NoteItem from './NoteItem';

const Notes = () => {
  const a = useContext(noteContext)
  const {notes, getNotes} = a;
  // console.log(notes)
  useEffect(() => {
    getNotes()
  }, [])
  return (
    <>
      <AddNote />
      <div className='row'>
        {notes.map((note)=>{
          return <NoteItem key={note._id} note={note}/>
        })}
      </div>
    </>
  )
}

export default Notes
