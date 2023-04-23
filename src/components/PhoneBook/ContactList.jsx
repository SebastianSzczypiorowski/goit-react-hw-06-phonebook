import PropTypes from 'prop-types';
import './Phonebook.css';


const ContactList = ({ contacts, removeContact }) => {
    return (
      <ul>
        <></>
      {contacts.map(contact => {
        return (
          <li key={contact.id}>
          {contact.name} 
          {contact.number}
          <button type='button' name={contact.name} onClick={() => {removeContact(contact.id)}}>Delete</button>
          </li>
        )
      })}
      </ul>
    )
  }

  ContactList.propTypes = {
    contacts: PropTypes.array,
  
  };

  export default ContactList