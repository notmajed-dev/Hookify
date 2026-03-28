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
    sessions: 0,
  });

  return (
    <div className="min-h-screen bg-white text-black font-mono">
      <NavBar />

      <div className="flex flex-col items-center gap-12 p-8">
        <Timer
          currentTaskId={currentTaskId}
          setCurrentTaskId={setCurrentTaskId}
          taskList={taskList}
          setTaskList={setTaskList}
          stats={stats}
          setStats={setStats}
        />

        <div className="flex flex-col md:flex-row gap-12 w-full justify-center">
          <Tasks taskList={taskList} setTaskList={setTaskList} />
          <Stats stats={stats} taskList={taskList} />
        </div>
      </div>
    </div>
  );
};

export default App;