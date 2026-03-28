import React, { useState, useEffect } from "react";

const Timer = ({ currentTaskId, setCurrentTaskId, taskList, setTaskList, stats, setStats }) => {
  const [timeLeft, setTimeLeft] = useState(25 * 60);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning && timeLeft > 0) {
      timer = setInterval(() => setTimeLeft((t) => t - 1), 1000);
    } else if (timeLeft === 0) {
      setIsRunning(false);
      setStats({
        ...stats,
        workMinutes: stats.workMinutes + 25,
        sessions: (stats.sessions || 0) + 1,
      });
      if (currentTaskId) {
        setTaskList(
          taskList.map((task) =>
            task.id === currentTaskId ? { ...task, pomodoros: task.pomodoros + 1 } : task
          )
        );
      }
    }
    return () => clearInterval(timer);
  }, [isRunning, timeLeft]);

  const handleSkip = () => {
    setIsRunning(false);
    setTimeLeft(25 * 60);
    setStats({
      ...stats,
      sessions: (stats.sessions || 0) + 1,
    });
    if (currentTaskId) {
      setTaskList(
        taskList.map((task) =>
          task.id === currentTaskId ? { ...task, pomodoros: task.pomodoros + 1 } : task
        )
      );
    }
  };

  return (
    <div>
      <h2>Timer</h2>
      <p>{Math.floor(timeLeft / 60)}:{String(timeLeft % 60).padStart(2, "0")}</p>
      <button onClick={() => setIsRunning(!isRunning)}>
        {isRunning ? "Pause" : "Start"}
      </button>
      <button onClick={() => setTimeLeft(25 * 60)}>Reset</button>
      <button onClick={handleSkip}>Skip</button>
      <p>Sessions Completed: {stats.sessions || 0}</p>
    </div>
  );
};

export default Timer;