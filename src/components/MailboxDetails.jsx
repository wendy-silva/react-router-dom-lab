import { useParams } from "react-router-dom";

function MailboxDetails(props) {
  const { mailboxId } = useParams();

  const selectedBox = props.mailboxes.find(
    (mailbox) => mailbox._id === Number(mailboxId)
  );

  return (
    <>
      <h1>Mailbox Details</h1>
      <p><strong>Box Number:</strong> {selectedBox._id}</p>
      <p><strong>Box Holder:</strong> {selectedBox.boxHolder}</p>
      <p><strong>Box Size:</strong> {selectedBox.boxSize}</p>
    </>
  );
}

export default MailboxDetails;