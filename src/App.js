import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import Header from './components/Header';
import AddTask from './components/AddTask';
import Footer from './components/Footer';
import ShowTask from './components/ShowTask';

const App = () => {
  const [tasklist, setTasklist] = useState([]);
  const [task, setTask ] = useState([]);


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
