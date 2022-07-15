import React from 'react';
import { useContext } from 'react';
import noteContext from '../context/notes/noteContext';

const Home = () => {
  const a = useContext(noteContext)
  const {notes, setNotes} = a;
  return (
    <div>
    {notes.map((note)=>{
      return note.title
    })}
    </div>
  )
}

export default Home
