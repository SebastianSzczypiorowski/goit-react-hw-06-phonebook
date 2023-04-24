import { createContext } from 'react';

const { createAction } = require('@reduxjs/toolkit');

export const addContact = createAction(
  'contacts/addContact',
  ({ id, name, number }) => {
    return {
      payload: [id, name, number],
    };
  }
);

export const deleteContact = createAction('contacts/deleteContact');
export const setStateFilter = createAction('contacts/setStatusFilter');
export const loadContacts = createAction('contacts/loadContacts');
