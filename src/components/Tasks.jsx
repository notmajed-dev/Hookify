import React, { useState } from "react";

const Tasks = () => {
  const [taskList, setTaskList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() === "") return;
    setTaskList([...taskList, { id: Date.now(), text: newTask, completed: false }]);
    setNewTask("");
  };

  const toggleComplete = (id) => {
    setTaskList(taskList.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  return (
    <div>
      <input
        value={newTask}
        onChange={(event) => setNewTask(event.target.value)}
        placeholder="what are you working on???"
      />
      <button onClick={addTask}>Add</button>

      <ul>
        {taskList.map((task) => (
          <li key={task.id}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleComplete(task.id)}
            />
            <span style={{ textDecoration: task.completed ? "line-through" : "none" }}>
              {task.text}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tasks;