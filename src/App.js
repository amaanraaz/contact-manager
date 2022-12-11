import './App.css';
import Header from './components/Header';
import AddContact from './components/AddContact';
import ContactList from './components/ContactList';
import { useState,useEffect } from 'react';
import { v4 as uuid } from "uuid";


function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts,setContact] = useState(
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))  );

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

  // useEffect(()=>{
  //  const retrieveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  //  if(retrieveContacts){
  //   setContact(retrieveContacts);
  //  }
  // },[]);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className="App">
      <Header />
      <AddContact addContactHandle = {addContactHandle} />
      <ContactList contacts={contacts} removeContactHandle={removeContactHandle} />
    </div>
  );
}

export default App;
