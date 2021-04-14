export default function Form({ handlerButton, value, handlerTextarea }) {
  return (
    <form className="form" required>
      <textarea className="form__text" value={value} onInput={handlerTextarea} placeholder="Напишите сообщение"/>
      <button className="form__button" type="button" onClick={handlerButton}>Отправить</button>
    </form>
  )
}
