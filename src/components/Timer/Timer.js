import React, { useEffect, useState } from "react";

export default function Timer() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let inteval;
    if (running) {
      inteval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!running) {
      clearInterval(inteval);
    }
    return () => clearInterval(inteval);
  }, [running]);
  return (
    <div>
      Timer
      <div>
        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
        <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
      </div>
      <div>
        {running ? (
          <button
            onClick={() => {
              setRunning(false);
            }}
          >
            Stop
          </button>
        ) : (
          <button
            onClick={() => {
              setRunning(true);
            }}
          >
            Start
          </button>
        )}

        <button
          onClick={() => {
            setTime(0);
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}
