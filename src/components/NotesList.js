import React from 'react'
import AddNote from './AddNote'
import Note from './Note'


 export default function NotesList({notes, handleAddNote, handleDeleteNote}){

   return (
     <div className='notes-list'>
         {(notes).map(note => (
             <Note id={note.id} key={note.id} text={note.text} date={note.date} handleDeleteNote={handleDeleteNote}/>
         ))}
        <AddNote handleAddNote={handleAddNote}/>
    </div>
   )
 }
