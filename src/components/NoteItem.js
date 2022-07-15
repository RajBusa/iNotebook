import React from 'react'

const NoteItem = (props) => {
    const note = props.note;
    console.log(note)
  return (
    <div className="col-md-3 my-1">
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{note.title}</h5>
                <p className="card-text">{note.description}</p>
                {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
            </div>
        </div>
    </div>
  )
}

export default NoteItem