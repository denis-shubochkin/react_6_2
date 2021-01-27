
import './App.css';
import NotesWidget from './NotesWidget/NotesWidget';
import NotesForm from './NotesForm/NotesForm';
import { useEffect, useState } from 'react';

function App() {

  const [arr, setArr] = useState([]);

  const getNotes = () => {
   fetch(process.env.REACT_APP_NOTES_URL) // - не работает с переменно env, переменная в файле dev.env
   // fetch('http://localhost:7777/notes')
    .then(response => response.json())
    .then(data => {
       setArr(data);
    })
  }

  useEffect( () => {
    getNotes();
  })


  const onRefreshHandler = () => {
    getNotes();
  }


  return (
    <div className="App">
     <NotesWidget notes={arr} onRefresh={onRefreshHandler}/>
     <NotesForm Refresh={onRefreshHandler}/>
    </div>
  );
}

export default App;
