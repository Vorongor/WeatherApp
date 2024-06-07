import React, { useEffect, useState } from "react";

export default function Timer() {
  const [currentTime, setCurrentTime] = useState<string>("");

  useEffect(() => {
    const intervalId = setInterval(() => {
      const d = new Date();
      const date = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
      setCurrentTime(date);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return <>{currentTime}</>;
}
