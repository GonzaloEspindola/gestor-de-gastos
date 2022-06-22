import '../App.css';
import React, {useState, useEffect} from 'react';
import {RoutesApp} from './routes';

function App() {
  const [operations, setOperations] = useState([]);

  const token = localStorage.getItem('token')
  const options = {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  }
    useEffect(() => {
        (async function () {
            let data = await fetch('https://serene-brook-59719.herokuapp.com/tables', options)
            .then(data => data.json())
            .then(data => setOperations(data))
        })();
  }, [])

  return (
    <RoutesApp operations={operations} setOperations={setOperations}/>
  )
}

export default App;
