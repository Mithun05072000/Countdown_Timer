import React, { useEffect, useState } from "react";

const CounterTimer = ({ startSeconds }) => {
  const [timeleft, setTimeLeft] = useState(startSeconds);

  useEffect(() => {
    if (timeleft <= 0) return;

    const timerId = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timerId);
  }, [timeleft]);

  return (
    <div>
      <h1> CountDown : {timeleft} seconds</h1>
    </div>
  );
};

export default CounterTimer;
