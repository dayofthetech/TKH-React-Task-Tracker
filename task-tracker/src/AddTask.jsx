/* component for adding a new task */
import React, {useState} from 'react'

function AddTask({ add }) {
  // set the state for a task as empty str
  const [newTask, setNewTask] = useState('');

  // fn that triggers when the input field from the form element changes
  function handleChange(e){
    setNewTask(e.target.value);
  }


  // fn that handles the onSubmit event when user clicks btn
  // preventDefault is a standard so web page does not reload right away
  // add fn calls the newTask array
  // the form field reset back to empty
  function formSubmit(e){
    e.preventDefault();
    add(newTask);
    setNewTask('');
  };

  return (
    <form onSubmit={formSubmit}>
      <input
      type='text'
      value={newTask}
      placeholder='Add Task'
      onChange={handleChange}>

      </input>
      <button type='submit'>Add</button>
    </form>
  );
}

export default AddTask;