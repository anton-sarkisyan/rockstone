export default function Message({ message }) {
  return (
    <li className="message-items">
      <p className={`message-items__message`}>{message}</p>
    </li>
  )
}
