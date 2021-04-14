import React from 'react';
import Main from './Main';

function App() {
  const [positionX, setPositionX] = React.useState(0);
  const [touchStart, setTouchStart] = React.useState(0);
  const [touchEnd, setTouchEnd] = React.useState(0);
  const [inneWindowrWidth, setInneWindowrWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    window.addEventListener('resize', handleInnerWidth);
  }, [])

  function handleInnerWidth() {
    setInneWindowrWidth(window.innerWidth);
  }

  //Обработчик начальной точки касания по оси X
  function handleTouchStart(e) {
    setTouchStart(e.targetTouches[0].clientX);
  }

  //Обработчик движения свайпа по оси X
  function hadnleTouchMove(e) {
    setTouchEnd(e.targetTouches[0].clientX);
  }

  // Настройка горизонтального свайпа
  function handleTouchEnd() {
    if (positionX < touchEnd) {
      if (touchStart - touchEnd > 150) {
        setPositionX((positionX) => (positionX + inneWindowrWidth));
      }
    }

    if (positionX > 0) {
      if (touchStart - touchEnd < -150) {
        setPositionX((positionX) => (positionX - inneWindowrWidth));
      }
    }
  }

  return (
    <div className="page">
      <div className="page__container"
        onTouchStart={handleTouchStart}
        onTouchMove={hadnleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <Main
          swipe={{ right: `${positionX}px` }}
          width={{ minWidth: `${inneWindowrWidth}px` }}
        />
      </div>
    </div >
  );
}

export default App;
