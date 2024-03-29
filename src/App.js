import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import AddTask from './components/AddTask';
import Footer from './components/Footer';
import ShowTask from './components/ShowTask';

const App = () => {
  const [tasklist, setTasklist] = useState(JSON.parse(localStorage.getItem("tasklist")) || []);
  const [task, setTask ] = useState([]);

  useEffect( () => {
    localStorage.setItem("tasklist", JSON.stringify(tasklist))
  }, [tasklist]);

  return (
    <>
      <div className='App'>
        <div className='container'>
          <Header/>
          <AddTask 
            tasklist={tasklist} 
            setTasklist={setTasklist}
            task={task}
            setTask={setTask}
            />

          <ShowTask 
            tasklist={tasklist} 
            setTasklist={setTasklist}
            task={task}
            setTask={setTask}
            />
          <Footer/>
        </div>
      </div>
    </>    
  )
}

export default App
