import React from 'react'

export default function Clock() {
  const [time, setTime] = React.useState(new Date().toLocaleTimeString());
  const [, setRerender] = React.useState({})

  React.useEffect(() => {
    const timerRef = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
      setRerender({});
    }, 250);

    return () => {
      clearInterval(timerRef);
    }

  }, [])

  React.useEffect(
    () => { console.log("We've just rendered " + time) },
    [time]
  )

  return (
    <div>
      <h1>The time is: {time}</h1>
    </div>
  )
}
