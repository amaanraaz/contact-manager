import './App.css';
import Header from './components/Header';
import AddContact from './components/AddContact';
import ContactList from './components/ContactList';
import { useState } from 'react';
import { v4 as uuid } from "uuid";


function App() {
  const [contacts,setContact] = useState([]);

  // adding new contact
  const addContactHandle = (name,email,phone)=>{
    setContact([...contacts,{id:uuid(),name,email,phone}]);
  }

  // removing the contact
  const removeContactHandle = (id)=>{
    const newList = contacts.filter((contact)=>{
      return contact.id !== id;
    });
    setContact(newList);
  }
  return (
    <div className="App">
      <Header />
      <AddContact addContactHandle = {addContactHandle} />
      <ContactList contacts={contacts} removeContactHandle={removeContactHandle} />
    </div>
  );
}

export default App;
