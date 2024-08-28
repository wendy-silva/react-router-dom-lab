// src/App.jsx
import { Route, Routes } from 'react-router-dom'
import { useState } from "react";
import NavBar from './components/NavBar'
import MailboxForm from './components/MailboxForm'
import MailboxList from './components/MailboxList'
import MailboxDetails from './components/MailboxDetails'
import './App.css'

const initialState = [
{ _id: 1, boxSize: 'Small', boxHolder: 'Wendy' },
{ _id: 2, boxSize: 'Medium', boxHolder: 'Rodney' },
]

const App = () => {
  const [mailboxes, setMailboxes] = useState(initialState);

  const addBox = (newMailbox) => {
    if (mailboxes.length > 0) {
      newMailbox._id = mailboxes[mailboxes.length - 1]._id + 1;
  } else {
      newMailbox._id = 1;
  }
    setMailboxes([...mailboxes, newMailbox])
  }

  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<main><h1>Post Office</h1></main>} />
        <Route path='/mailboxes' element={<MailboxList mailboxes={mailboxes}/>} />
        <Route path='/new-mailbox' element={<MailboxForm addBox={addBox}/>} />
        <Route path='/mailboxes/:mailboxId' element={<MailboxDetails mailboxes={mailboxes} />} />
        <Route path="*" element={<h2>Whoops, nothing here!</h2>} />
      </Routes>
    </>
  )
};

export default App;
