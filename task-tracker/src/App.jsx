// No need for import {Component} if is only one
import React, {useState} from 'react';
import DisplayTasks from './DisplayTasks';
import AddTask from './AddTask';
import Footer from './Footer';

function App() {

  // hook to maintain the state of tasks
  const [tasks, setTasks] = useState([]);

  const handleTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  return (
    <>
    <h1>Tasks</h1>
    {/* My component AddTask has a prop name add, and
    add prop will pass handleTask fn which does the tasks spread
     */}
    <AddTask add={handleTask}/>

     {/* DisplayTasks component takes tasks as props
     and in the child component does the mapping and
     displaying */}
    <DisplayTasks tasks={tasks} />

    <Footer />
    </>
  );
}
export default App;





