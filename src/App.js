import {useState} from 'react'
import NotesList from './components/NotesList'
import uuid from 'react-uuid'
import Search from './components/Search';


export default function App() {
  const [notes, setNotes] = useState([{
    text: "To create a new note, type in the textarea highlighted blue. To search your notes, type in the search button and enter any text and MyNotesApp will show you matching results instantly. Deleted notes go in the trash. ",
    date: "08/11/2022",
    id: uuid()
    },{
    text: "This is my second note!",
    date: "02/06/2022",
    id: uuid()
  },{
    text: "I couldn't figure the edit button:( Help me",
    date: "02/06/2022",
    id: uuid()
  }]);

  const [searchText, setSearchText] = useState('')

  const addNote = (text) => {
    const date = new Date()
    const newNote = {
      text: text,
      date: date.toLocaleDateString(),
      id: uuid()
    }
    const newNotes = [...notes, newNote]
    setNotes(newNotes)
  }

  const deleteNote = (id) => {
    const newNotes = notes.filter((note)=>note.id !== id);
    setNotes(newNotes)
  }


  return (

    <div className='notes-container'>
      <h1 className='logo'>My Notes App</h1>
      <Search handleSearchNote={setSearchText}/>
      <NotesList
        notes={notes.filter((note) => note.text.toLocaleLowerCase().includes(searchText))}
        handleAddNote={addNote}
        handleDeleteNote = {deleteNote}/>
    </div>

  )
}
