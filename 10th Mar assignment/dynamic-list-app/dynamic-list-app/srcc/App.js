import React, { useState } from "react";

function App() {

  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  // Add Task
  const addTask = () => {

    if(task.trim() === "") return;

    setTasks([...tasks, task]);
    setTask("");
  };

  // Delete Task
  const deleteTask = (index) => {

    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (

    <div style={{textAlign:"center", marginTop:"80px", fontFamily:"Arial"}}>

      <h1>Dynamic Task List</h1>

      <input
        type="text"
        placeholder="Enter task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        style={{padding:"10px", width:"200px"}}
      />

      <button onClick={addTask} style={{padding:"10px", marginLeft:"10px"}}>
        Add
      </button>

      <ul style={{listStyle:"none", marginTop:"20px"}}>

        {tasks.map((t, index) => (

          <li key={index} style={{margin:"10px"}}>

            {t}

            <button
              onClick={() => deleteTask(index)}
              style={{marginLeft:"10px", background:"red", color:"white"}}
            >
              Delete
            </button>

          </li>

        ))}

      </ul>

    </div>
  );
}

export default App;