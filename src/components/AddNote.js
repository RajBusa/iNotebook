import React from 'react'
import { useState, useContext} from 'react'
import noteContext from '../context/notes/noteContext';

const AddNote = () => {
    const a = useContext(noteContext)
    const {addNote} = a;

    const [note, setNote] = useState({title: "", description: "", tag: "default"});

    const onChange = (e)=>{
        setNote({...note, [e.target.name]: e.target.value})
    }

    const handleClick = (e) => {
      e.preventDefault();
      addNote(note.title,note.description,note.tag)
    }
  return (
    <>
      <form>
        <div class="mb-3">
          <label for="title" class="form-label">
            Title
          </label>
          <input type="text" class="form-control" id="title" aria-describedby="emailHelp" name='title' onChange={onChange}/>
        </div>
        <div class="mb-3">
          <label for="description" class="form-label">
          Description
          </label>
          <input type="text" class="form-control" id="description" name='description' onChange={onChange} />
        </div>
        <button type="submit" class="btn btn-primary" onClick={handleClick}>
          Submit
        </button>
      </form>
    </>
  )
}

export default AddNote
