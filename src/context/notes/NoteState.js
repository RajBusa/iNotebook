import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {

    const n = [
        {
          "_id": 1,
          "user": "62caab060d1f2205ce96741a",
          "title": "First title",
          "description": "First Description",
          "tag": "First tag",
          "date": "2022-07-13T12:48:29.442Z",
          "__v": 0
        },
        {
            "_id": 2,
            "user": "62caab060d1f2205ce96741a",
            "title": "second title",
            "description": "First Description",
            "tag": "First tag",
            "date": "2022-07-13T12:48:29.442Z",
            "__v": 0
        },
        {
          "_id": 3,
          "user": "62caab060d1f2205ce96741a",
          "title": "First title",
          "description": "First Description",
          "tag": "First tag",
          "date": "2022-07-13T12:48:29.442Z",
          "__v": 0
        },
        {
            "_id": 4,
            "user": "62caab060d1f2205ce96741a",
            "title": "second title",
            "description": "First Description",
            "tag": "First tag",
            "date": "2022-07-13T12:48:29.442Z",
            "__v": 0
        },
        {
          "_id": 5,
          "user": "62caab060d1f2205ce96741a",
          "title": "First title",
          "description": "First Description",
          "tag": "First tag",
          "date": "2022-07-13T12:48:29.442Z",
          "__v": 0
        },
        {
            "_id": 7,
            "user": "62caab060d1f2205ce96741a",
            "title": "second title",
            "description": "First Description",
            "tag": "First tag",
            "date": "2022-07-13T12:48:29.442Z",
            "__v": 0
        },
        {
          "_id": 8,
          "user": "62caab060d1f2205ce96741a",
          "title": "First title",
          "description": "First Description",
          "tag": "First tag",
          "date": "2022-07-13T12:48:29.442Z",
          "__v": 0
        },
        {
            "_id": 9,
            "user": "62caab060d1f2205ce96741a",
            "title": "second title",
            "description": "First Description",
            "tag": "First tag",
            "date": "2022-07-13T12:48:29.442Z",
            "__v": 0
        },
        {
          "_id": 10,
          "user": "62caab060d1f2205ce96741a",
          "title": "First title",
          "description": "First Description",
          "tag": "First tag",
          "date": "2022-07-13T12:48:29.442Z",
          "__v": 0
        },
        {
            "_id": 11,
            "user": "62caab060d1f2205ce96741a",
            "title": "second title",
            "description": "First Description",
            "tag": "First tag",
            "date": "2022-07-13T12:48:29.442Z",
            "__v": 0
        },
        {
          "_id": 12,
          "user": "62caab060d1f2205ce96741a",
          "title": "First title",
          "description": "First Description",
          "tag": "First tag",
          "date": "2022-07-13T12:48:29.442Z",
          "__v": 0
        },
        {
            "_id": 13,
            "user": "62caab060d1f2205ce96741a",
            "title": "second title",
            "description": "First Description",
            "tag": "First tag",
            "date": "2022-07-13T12:48:29.442Z",
            "__v": 0
        },
      ]       
    const [notes, setNotes] = useState(n)
    
    // Add a Note
    const addNote = (title, description, tag) =>{
      console.log("Adding a new note")
      const note = {
        "_id": 14,
        "user": "62caab060d1f2205ce96741a",
        "title": title,
        "description": description,
        "tag": tag,
        "date": "2022-07-13T12:48:29.442Z",
        "__v": 0
    };
      setNotes(notes.concat(note))
    }  

    // Delete a Note
    const deleteNote = () =>{

    }
    // Edit a Note
    const editNote = () => {

    }

    return (
        <NoteContext.Provider value={{notes, addNote, deleteNote, editNote}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;