import { React, useEffect, useState } from "react";

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
    <div>
      <div>{toMinutes(timeLeft)}</div>
      <p>Session: {session}</p>

      <button
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
        onClick={() => {
          setTimeLeft(sessionLength * 60);
          setIsRunning(false);
          setIsBreak(false);
        }}
      >
        Reset
      </button>

      <button
        onClick={() => {
          setTimeLeft(sessionLength * 60);
          setIsBreak(false);
          setIsRunning(false);
        }}
      >
        Pomodoro
      </button>

      <button
        onClick={() => {
          setTimeLeft(5 * 60);
          setIsBreak(true);
          setIsRunning(false);
        }}
      >
        Short Break
      </button>

      <button
        onClick={() => {
          setTimeLeft(15 * 60);
          setIsBreak(true);
          setIsRunning(false);
        }}
      >
        Long Break
      </button>

      <button
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
  );
};

export default App;
