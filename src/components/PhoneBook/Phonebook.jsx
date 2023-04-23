import { nanoid } from 'nanoid';
import React, { Component } from 'react';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Section from './Section';
import Filter from './Filter';
import './Phonebook.css';

class Phonebook extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    if (localStorage.getItem('contacts')) {
      this.setState({
        contacts: JSON.parse(localStorage.getItem('contacts')),
      });
    } else {
      localStorage.setItem('contacts', JSON.stringify([]));
    }
  }

  componentDidUpdate() {
    localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  }

  addContact = e => {
    e.preventDefault();
    // @ts-ignore
    const nameInput = document.querySelector('#name').value;
    // @ts-ignore
    const numberInput = document.querySelector('#number').value;
    const { contacts } = this.state;

    const newContact = {
      id: `id-${nanoid()}`,
      name: nameInput,
      number: numberInput,
    };

    if (contacts.some(contact => contact.name === nameInput)) {
      alert(`${nameInput} is already present in the phonebook`);
      return;
    }

    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  removeContact = id => {
    const updatedContacts = this.state.contacts.filter(
      contact => contact.id !== id
    );
    this.setState({ contacts: updatedContacts });
  };
  handleFilterUpdate = e => {
    this.setState({ filter: e.target.value });
  };

  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <div className="phonebook-container">
        <Section title="Phonebook">
          <ContactForm addContact={this.addContact} />
        </Section>
        <Section title="Contacts">
          <Filter handleFilterUpdate={this.handleFilterUpdate} />
          <ContactList
            contacts={filteredContacts}
            removeContact={this.removeContact}
          />
        </Section>
      </div>
    );
  }
}

export default Phonebook;
