import React from 'react'

const AddTask = ({tasklist, setTasklist, task, setTask}) => {

  const handleSubmit = (e) => {
    e.preventDefault();

    if(task.id){
      const date = new Date();
      const updateEdit = tasklist.map( (todo) => (
        todo.id === task.id ? { id: task.id, name: task.name, time:`${date.toLocaleDateString()} ${date.toLocaleTimeString()}`} : todo
      ));
      setTasklist(updateEdit);
      setTask({});
    }
    else{    
      const date = new Date();
      const newTask = {
          id: date.getTime(), 
          name: e.target.task.value, 
          time: `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`,
          complete: false
        }
      setTasklist([...tasklist, newTask]);
      setTask({});
    }
  }

  return (
    <section className='container'>
      <form onSubmit={handleSubmit}>
        <div className='inputAdd my-5'>
          <input type='text' placeholder='Add Task' value={task.name || "" } onChange={(e) => setTask({...task, name: e.target.value})} autoComplete='off' maxLength="25" name="task"/>
          <button type='submit'>{task.id ? "Edit" : "Add"}</button>
        </div>
      </form>
    </section>
  )
}

export default AddTask