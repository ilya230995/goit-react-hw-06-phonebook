import shortid from 'shortid';
import { createAction } from '@reduxjs/toolkit';

export const addContact = createAction(
  'phonebook/AddContact',
  (name, number) => {
    return {
      payload: {
        id: shortid.generate(),
        name,
        number,
      },
    };
  },
);

export const deleteContact = createAction('phonebook/DeleteContact');

export const filter = createAction('phonebook/Filter');
