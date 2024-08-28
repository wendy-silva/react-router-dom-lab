import { useState } from "react";
import { useNavigate } from "react-router-dom";

const initialState = {
  id: 0,
  boxHolder: "",
  boxSize: "",
};

function MailboxForm(props) {
  const navigate = useNavigate();
  //   const { mailboxes } = props;
  const [formData, setFormData] = useState(initialState);

  const handleChange = ({ target }) => {
    setFormData({ ...formData, [target.name]: target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.addBox(formData);
    setFormData(initialState);
    navigate("/mailboxes");
  };

  return (
    <main>
      <h1>New Mailbox Form</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="boxHolder">Box Holder:</label>
        <input
          type="text"
          id="boxHolder"
          name="boxHolder"
          value={formData.name}
          onChange={handleChange}
        />
        <label htmlFor="boxSize">Box Size:</label>
        <select
          id="boxSize"
          name="boxSize"
          value={formData.boxSize}
          onChange={handleChange}
        >
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
        </select>
        <button type="submit">Submit</button>
      </form>
    </main>
  );
}

export default MailboxForm;
