import React from 'react'

const NoteItem = (props) => {
  const note = props.note
  console.log(note)
  return (
    <div className="col-md-3 my-1">
      <div className="card">
        <div className="card-body">
          <div className="d-flex align-items-center justify-content-between">
            <h5 className="card-title">{note.title}</h5>
            <div className="icon">
              <i class="fa-solid fa-pen-to-square mx-2"></i>
              <i class="fa-solid fa-trash-can mx-2"></i>
            </div>
          </div>
          <p className="card-text">{note.description}</p>
          {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
        </div>
      </div>
    </div>
  )
}

export default NoteItem
