// import logo from './logo.svg';
// import React from 'react';
// import './App.css';

import {useState} from 'react';

import './index.css';
import Header from './components/Header';
import Task from './components/Tasks'
import AddTask from './components/AddTask'

function App() {
  const [showAddTask, setShowTaskAdd] = useState(false)
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Doctors Appointment',
      day: 'Feb 5th at 2:30pm',
      reminder: true,
    },
    {
      id:2,
      text:'Meeting at School',
      day: 'Feb 6th at 1:30pm',
      reminder: true,
    },
    {
      id:3,
      text:'Food Shopping',
      day: 'Feb 6th at 4:30pm',
      reminder: false,
    }
  ]
  )

  // ADD task

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = { id, ...task}
    setTasks([...tasks,newTask])
  }

   // Delete Task

 const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id))
 }

 //Toggle Reminder
 const toggleReminder = (id) => {
  setTasks(
    tasks.map((task)=> 
    task.id ===id ? {...task, reminder:
       !task.reminder}: task
      ))
 }
  return (
    <div className="container">
     <Header title='Task Tracker' onAdd={() => setShowTaskAdd(!showAddTask)}
      showAdd={showAddTask}
      />
     { showAddTask && <AddTask onAdd={addTask}/>}
    {tasks.length > 0 ? 
    <Task  tasks={tasks} onDelete={deleteTask} 
    onToggle={toggleReminder}
    />
      : 'No tasks To Show'
  }

    
    </div>
  );
}


export default App;

// class App extends React.Component {
//   render(){
//     return <h1>Hello from a class</h1>
//   }
// }