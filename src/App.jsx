import React, { useState } from "react";
import Tasks from "./components/Tasks";
import Stats from "./components/Stats";
import NavBar from "./components/NavBar";
import Timer from "./components/Timer";

const App = () => {
  const [taskList, setTaskList] = useState([]);
  const [currentTaskId, setCurrentTaskId] = useState(null);
  const [stats, setStats] = useState({
    workMinutes: 0,
    breakMinutes: 0,
    sessions: 0, // add this if Timer uses sessions
  });

  return (
    <div>
      <NavBar />
      <Timer
        currentTaskId={currentTaskId}
        setCurrentTaskId={setCurrentTaskId}
        taskList={taskList}
        setTaskList={setTaskList}
        stats={stats}
        setStats={setStats}
      />
      <Tasks taskList={taskList} setTaskList={setTaskList} />
      
      <Stats stats={stats} taskList={taskList} />
    </div>
  );
};

export default App;