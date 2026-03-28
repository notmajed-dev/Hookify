import { React, useEffect, useState } from "react";
import Tasks from "./components/Tasks";

const App = () => {
  const [timeLeft, setTimeLeft] = useState(25 * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [isBreak, setIsBreak] = useState(false);
  const [session, setSession] = useState(1);
  const [hasStarted, setHasStarted] = useState(false);
  const [sessionLength, setSessionLength] = useState(25);

  function toMinutes(timeLeft) {
    const remainingMinutes = Math.floor(timeLeft / 60);
    let remainingSeconds = timeLeft % 60;
    if (remainingSeconds < 10) remainingSeconds = "0" + remainingSeconds;
    return `${remainingMinutes}:${remainingSeconds}`;
  }

  useEffect(() => {
    let timer;
    if (isRunning && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    }

    if (timeLeft === 0) {
      if (isBreak) {
        setTimeLeft(sessionLength * 60);
        setIsBreak(false);
      } else {
        setTimeLeft(5 * 60);
        setIsBreak(true);
        setSession((prev) => prev + 1);
      }
      setIsRunning(false);
    }

    return () => clearInterval(timer);
  }, [isRunning, timeLeft, sessionLength]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
      <div className="text-6xl font-bold mb-4">{toMinutes(timeLeft)}</div>
      <p className="text-lg mb-4">Session: {session}</p>

      <div className="flex gap-2 mb-4">
        <button
          className="px-4 py-2 bg-blue-500 rounded hover:bg-blue-600"
          onClick={() => {
            if (!hasStarted) {
              setHasStarted(true);
              setIsRunning(true);
            } else {
              setIsRunning(!isRunning);
            }
          }}
        >
          {!hasStarted ? "Start" : isRunning ? "Pause" : "Resume"}
        </button>

        <button
          className="px-4 py-2 bg-yellow-500 rounded hover:bg-yellow-600"
          onClick={() => {
            if (isBreak) {
              setIsBreak(false);
              setTimeLeft(sessionLength * 60);
              setSession((prev) => prev + 1);
            } else {
              setIsBreak(true);
              setTimeLeft(5 * 60);
            }
            setIsRunning(false);
          }}
        >
          Skip
        </button>

        <button
          className="px-4 py-2 bg-red-500 rounded hover:bg-red-600"
          onClick={() => {
            setTimeLeft(sessionLength * 60);
            setIsRunning(false);
            setIsBreak(false);
          }}
        >
          Reset
        </button>
      </div>

      <div className="flex gap-2 mb-4">
        <button
          className="px-3 py-1 bg-green-500 rounded hover:bg-green-600"
          onClick={() => {
            setTimeLeft(sessionLength * 60);
            setIsBreak(false);
            setIsRunning(false);
          }}
        >
          Pomodoro
        </button>

        <button
          className="px-3 py-1 bg-purple-500 rounded hover:bg-purple-600"
          onClick={() => {
            setTimeLeft(5 * 60);
            setIsBreak(true);
            setIsRunning(false);
          }}
        >
          Short Break
        </button>

        <button
          className="px-3 py-1 bg-pink-500 rounded hover:bg-pink-600"
          onClick={() => {
            setTimeLeft(15 * 60);
            setIsBreak(true);
            setIsRunning(false);
          }}
        >
          Long Break
        </button>
      </div>

      <div className="flex items-center gap-2 mt-4">
        <button
          className="px-3 py-1 bg-red-500 rounded hover:bg-red-600"
          onClick={() => {
            if (sessionLength > 25) {
              setSessionLength(sessionLength - 5);
              setTimeLeft((sessionLength - 5) * 60);
            }
          }}
        >
          -
        </button>
        <span>{sessionLength} mins</span>
        <button
          className="px-3 py-1 bg-green-500 rounded hover:bg-green-600"
          onClick={() => {
            if (sessionLength < 180) {
              setSessionLength(sessionLength + 5);
              setTimeLeft((sessionLength + 5) * 60);
            }
          }}
        >
          +
        </button>
      </div>
      <Tasks/>
    </div>
  );
};

export default App;