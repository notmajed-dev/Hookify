import React, { useState } from "react";
import Timer from "./components/Timer";
import Tasks from "./components/Tasks";
import Stats from "./components/Stats";


const App = () => {
  // Global states
  const [taskList, setTaskList] = useState([]);
  const [currentTaskId, setCurrentTaskId] = useState(null);
  const [stats, setStats] = useState({
    workMinutes: 0,
    breakMinutes: 0,
  });

  return (
    <div>
      <h1>PomodoroPulse</h1>
      <Tasks taskList={taskList} setTaskList={setTaskList} />
      <Timer
        currentTaskId={currentTaskId}
        setCurrentTaskId={setCurrentTaskId}
        taskList={taskList}
        setTaskList={setTaskList}
        stats={stats}
        setStats={setStats}
      />
      <Stats stats={stats} taskList={taskList} />
    </div>
  );
};

export default App;