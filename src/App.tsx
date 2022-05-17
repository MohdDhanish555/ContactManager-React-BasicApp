import './App.css';
import Footer from './components/Footer'
import MyContacts from './components/MyContacts'
import AddContacts from './components/AddContacts'
import Navigation from './components/Navigation'
import {useState} from 'react'
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';


function App() {
  const [person , setPerson] = useState({name:"" , phone:"" , email:""})
  const [newContact , setNewContact] = useState<object[]>([{name:"Dhanish" , phone:"886125571" , email:"maham@g.com"}])
  const [searchText , setSearchText] = useState("")
  
  function changeHandler(e : any) {
    setSearchText(e.target.value)
  }

  function clickHandler( id : number) {
    setNewContact(newContact.filter((person , index) => index !== id))
  }
  

  const addContact = (person : any) => {
    setNewContact([...newContact, person])
  };
  
  
  function handleSubmit(e : any){
    e.preventDefault() ;
    addContact(person);
    setPerson({name : "" , phone : "", email : "" })
  }
  
  const handleChange = (event :  any) => {
    setPerson({ ...person , [event.target.name]: event.target.value });
  };

  
  
  return (
    <Router>
      <div className='main-container'>
        <div className='app-container'>
        <Navigation />
        <Routes>
          <Route path="/" element={<MyContacts event={changeHandler} newContact={newContact} type="text" placeholder="Search" searchText={searchText} onClick={clickHandler} />} />
          <Route path="/AddContacts" element={<AddContacts onSubmit={handleSubmit} person={person} 
          onChange={handleChange}/>}/>
        </Routes>
        <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
