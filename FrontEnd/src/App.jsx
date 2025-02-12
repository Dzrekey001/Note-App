import { useEffect, useState } from 'react';
import Note from './components/Note';
import Notification from './components/Notification';
import './index.css'
import noteService from './services/notes'

function App() {
  const [notes, setNote] = useState([]);
  const [newNote, setNewNote] = useState("");
  const [showAll, setShowAll] = useState(true);
  const [error, setError] = useState(null)

  const showNote = showAll ? notes : notes.filter((note) => note.important === true)



  function toggleHandler(id) {
    const note = notes.find(n => n.id === id);
    if (!note) return;
    const changeNote = {...note, important: !note.important};
    noteService.update(id, changeNote)
    .then((data) => {
      setNote(notes.map((n) => (n.id === id ? data : n)));
    }).catch((error) => 
    {
      console.log(error)
      setError(`Note "${note.content}" was already removed from the server.`)
      setTimeout(()=>{
        setError(null)
      }, 5000)
      setNote(notes.filter((n)=> n.id !== note.id))

    })
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!newNote.trim()) return; // Prevent empty input

    const note = {
      content: newNote,
      important: Math.random() < 0.5,
      id: String(notes.length + 1),
    };
    noteService.create(note)
    .then((data)=>setNote((prevNotes) => [data, ...prevNotes]))
    setNewNote("");
  }


  function handleOnchange(event) {
    setNewNote(event.target.value);
  }

  useEffect(()=>{
    noteService.getAll()
    .then((data) => setNote(data))
  },[])

  return (
    <>
      <h1>Notes</h1>
      <Notification message={error}/>
      <button onClick={()=> setShowAll((prev)=> !prev)}>{showAll ? "All" : "Important"}</button>
      <ul>
        {showNote.map((note) => 
        <Note key={note.id} note={note} toggleHandler={()=>toggleHandler(note.id)}/>
        )}
      </ul>

      
      <form onSubmit={handleSubmit}>
        <input value={newNote} onChange={handleOnchange} />
        <button type='submit'>Save</button>
      </form>
    </>
  );
}

export default App;
