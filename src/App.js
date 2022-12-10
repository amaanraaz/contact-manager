import './App.css';
import Header from './components/Header';
import AddContact from './components/AddContact';
import ContactList from './components/ContactList';
import { useState } from 'react';

function App() {
  const [contacts,setContact] = useState([]);
  const addContactHandle = (name,email,phone)=>{
    setContact([...contacts,{name,email,phone}]);
  }
  return (
    <div className="App">
      <Header />
      <AddContact addContactHandle = {addContactHandle}/>
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
