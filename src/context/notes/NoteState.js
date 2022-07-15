import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {

    const n = [
        {
          "_id": "62cebf1da13a963571590eab",
          "user": "62caab060d1f2205ce96741a",
          "title": "First title",
          "description": "First Description",
          "tag": "First tag",
          "date": "2022-07-13T12:48:29.442Z",
          "__v": 0
        },
        {
            "_id": "62cebf1da13a963571590eab",
            "user": "62caab060d1f2205ce96741a",
            "title": "second title",
            "description": "First Description",
            "tag": "First tag",
            "date": "2022-07-13T12:48:29.442Z",
            "__v": 0
        },
        {
          "_id": "62cebf1da13a963571590eab",
          "user": "62caab060d1f2205ce96741a",
          "title": "First title",
          "description": "First Description",
          "tag": "First tag",
          "date": "2022-07-13T12:48:29.442Z",
          "__v": 0
        },
        {
            "_id": "62cebf1da13a963571590eab",
            "user": "62caab060d1f2205ce96741a",
            "title": "second title",
            "description": "First Description",
            "tag": "First tag",
            "date": "2022-07-13T12:48:29.442Z",
            "__v": 0
        },
        {
          "_id": "62cebf1da13a963571590eab",
          "user": "62caab060d1f2205ce96741a",
          "title": "First title",
          "description": "First Description",
          "tag": "First tag",
          "date": "2022-07-13T12:48:29.442Z",
          "__v": 0
        },
        {
            "_id": "62cebf1da13a963571590eab",
            "user": "62caab060d1f2205ce96741a",
            "title": "second title",
            "description": "First Description",
            "tag": "First tag",
            "date": "2022-07-13T12:48:29.442Z",
            "__v": 0
        },
        {
          "_id": "62cebf1da13a963571590eab",
          "user": "62caab060d1f2205ce96741a",
          "title": "First title",
          "description": "First Description",
          "tag": "First tag",
          "date": "2022-07-13T12:48:29.442Z",
          "__v": 0
        },
        {
            "_id": "62cebf1da13a963571590eab",
            "user": "62caab060d1f2205ce96741a",
            "title": "second title",
            "description": "First Description",
            "tag": "First tag",
            "date": "2022-07-13T12:48:29.442Z",
            "__v": 0
        },
        {
          "_id": "62cebf1da13a963571590eab",
          "user": "62caab060d1f2205ce96741a",
          "title": "First title",
          "description": "First Description",
          "tag": "First tag",
          "date": "2022-07-13T12:48:29.442Z",
          "__v": 0
        },
        {
            "_id": "62cebf1da13a963571590eab",
            "user": "62caab060d1f2205ce96741a",
            "title": "second title",
            "description": "First Description",
            "tag": "First tag",
            "date": "2022-07-13T12:48:29.442Z",
            "__v": 0
        },
        {
          "_id": "62cebf1da13a963571590eab",
          "user": "62caab060d1f2205ce96741a",
          "title": "First title",
          "description": "First Description",
          "tag": "First tag",
          "date": "2022-07-13T12:48:29.442Z",
          "__v": 0
        },
        {
            "_id": "62cebf1da13a963571590eab",
            "user": "62caab060d1f2205ce96741a",
            "title": "second title",
            "description": "First Description",
            "tag": "First tag",
            "date": "2022-07-13T12:48:29.442Z",
            "__v": 0
        },
      ]       
    const [notes, setNotes] = useState(n)
    

    return (
        <NoteContext.Provider value={{notes, setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;