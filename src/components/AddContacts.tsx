
import './AddContacts.css'
import contactIcon from '../assets/contact-icon.png'
import Form from './Form'

const AddContacts = ({ onSubmit, onChange, person }: any) => (
  <div className="add-contact-container">
    <h1>Add Contact</h1>
    <div className="flexbox">
      <img src={contactIcon} alt="profile" width="160px" />
    </div>
    <Form onSubmit={onSubmit} person={person} onChange={onChange} />
  </div>
);

export default AddContacts;