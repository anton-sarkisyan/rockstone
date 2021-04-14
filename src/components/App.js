import React from 'react';
import Main from './Main';

function App() {
  const [positionX, setPositionX] = React.useState(0);
  const [touchStart, setTouchStart] = React.useState(0);
  const [touchEnd, setTouchEnd] = React.useState(0);
  const [innerWidth, setInnerWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    window.addEventListener('resize', handleInnerWidrh);
  }, [])

  function handleInnerWidrh() {
    setInnerWidth(window.innerWidth);
  }

  //Обработчик начальной точки касания поверхности по оси X
  function handleTouchStart(e) {
    setTouchStart(e.targetTouches[0].clientX);
  }

  //Обработчик движения свайпа по оси X
  function hadnleTouchMove(e) {
    setTouchEnd(e.targetTouches[0].clientX);
  }

  // Настройка горизонтального свайпа
  function handleTouchEnd() {
    if (positionX < innerWidth) {
      if (touchStart - touchEnd > 80) {
        setPositionX((positionX) => (positionX + innerWidth));
      }
    }

    if (positionX > 0) {
      if (touchStart - touchEnd < -80) {
        setPositionX((positionX) => (positionX - innerWidth));
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
          width={{ minWidth: `${innerWidth}px` }}
        />
      </div>
    </div >
  );
}

export default App;
