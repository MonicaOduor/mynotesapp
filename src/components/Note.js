import React from 'react'

export default function Note({id, text, date, handleDeleteNote}) {
  return (
    <div className='note'>
        <span>{text}</span>
        <div className='note-footer'>
            <small>{date}</small>
            <button
                className='btn border delete-btn'
                >
                Edit
            </button>
            <button
                className='btn border delete-btn'
                onClick={()=> handleDeleteNote(id)}>
                Delete
            </button>
        </div>
    </div>
  )
}
// The general steps would be


// - When button is clicked show some sort of component/text input that is prepopulated with the current note text
// - Let the user edit the text, then add a save button
// - Save the edited note to state (you'll have to learn how to update an object in an array to do this bit)

// Good luck!