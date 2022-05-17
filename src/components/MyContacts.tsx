import './MyContacts.css'
import DisplayContacts from './DisplayContacts'
import SearchBar from './SearchBar'

const MyContacts = ({event , type , placeholder ,newContact , onClick , searchText } : any) => (
    <div className='my-contacts-container'>
        <SearchBar event={event} type={type} placeholder={placeholder} searchText={searchText}/>
        <h1>My Contacts</h1>
        <DisplayContacts newContact={newContact} searchText={searchText} onClick={onClick} />        
    </div>
)

export default MyContacts;