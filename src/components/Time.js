import React from 'react';

export default function CurrenTime({ style }) {
  const [currentTime, setCurrentTime] = React.useState('');


  React.useEffect(() => {
    setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);
  })

  return (
    <section className="time" style={style}>
      <div className="time__items">
        <p className="time__text">{currentTime}</p>
      </div>
    </section>
  )
}
