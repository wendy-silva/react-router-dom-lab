import { Link } from "react-router-dom";

function MailboxList(props) {
  return (
    <>
      <h1>Mailbox List</h1>
      <ul>
        {props.mailboxes.map((currentMailbox) => (
          <Link
            key={currentMailbox._id}
            to={`/mailboxes/${currentMailbox._id}`}
          >
            <li className="mail-box">
              {currentMailbox._id}
            </li>
          </Link>
        ))}
      </ul>
    </>
  );
}

export default MailboxList;
