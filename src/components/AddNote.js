import { useState } from 'react'

export default function AddNote({handleAddNote}) {
    const [noteText, setNoteText] = useState("")
    const characterLimit = 200;

    const handleChange = (e) =>{
        if(characterLimit - e.target.value.length >=0){
        setNoteText(e.target.value)
    }}

    const handleSaveClick = () =>{
        if(noteText.trim().length > 0){
        handleAddNote(noteText)
        setNoteText("")
    }}
  return (
    <div className='note new-note'>
        <textarea
            rows ='8'
            cols='10'
            placeholder ='type to add new note...'
            onChange={handleChange}
            value = {noteText}></textarea>
        <div className='note-footer'>
            <small>{characterLimit - noteText.length} Remaining</small>
            <button className='save-btn' onClick={handleSaveClick}>Save</button>
        </div>
    </div>
  )
}
