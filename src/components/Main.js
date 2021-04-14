import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import Form from './Form'
import Message from './Message'
import Time from './Time'


export default function Main({ swipe, width }) {
  const [messages, setMessages] = React.useState([]);
  const [value, setValue] = React.useState('');

  function handlerTextarea(e) {
    setValue(e.target.value);
  }

  function handlerButton(e) {
    e.preventDefault();

    setMessages([...messages, value]);
    setValue('');
  }
  return (
    <div className="main" style={swipe}>
      <div className="main__items" style={width}>
        <Form
          handlerButton={handlerButton}
          value={value}
          handlerTextarea={handlerTextarea}
        />

        <TransitionGroup component="ul" className="main__messages">
          {messages.map((message, i) => (
            <CSSTransition
              key={i}
              classNames="my-node"
              timeout={700}>
              <Message
                key={i}
                message={message}
              />
            </CSSTransition>
          )
          )}
        </TransitionGroup>
      </div>
      <Time style={width} />
    </div>
  )
}
