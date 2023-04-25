import { addContact, deleteContact } from './actions';
import { createReducer } from '@reduxjs/toolkit';

const contactsInitialState = [];

export const contactsReducer = createReducer(contactsInitialState, {
  [addContact]: (state, action) => {
    return [...state, action.payload];
  },
  [deleteContact]: (state, action) => {
    return state.filter(contact => contact.id !== action.payload);
  },
});

const filtersInitialState = '';

export const filtersReducer = (state = filtersInitialState, action) => {};
