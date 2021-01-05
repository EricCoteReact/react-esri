import React from 'react'

export default function Clock() {
  const [time, setTime] = React.useState(new Date().toLocaleTimeString());

  React.useEffect(() => {
    const timerRef = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
      console.log("We are sending setState to the clock.");
    }, 1000);

    return () => {
      clearInterval(timerRef);
    }

  }, [])

  return (
    <div>
      <h1>The time is: {time}</h1>
    </div>
  )
}
