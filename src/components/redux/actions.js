import { createAction, nanoid } from '@reduxjs/toolkit';

const addContact = createAction('contacts/addContact', text => {
  return {
    payload: {
      text,
      id: nanoid(),
    },
  };
});
const deleteContact = createAction('contacts/deleteContact');
