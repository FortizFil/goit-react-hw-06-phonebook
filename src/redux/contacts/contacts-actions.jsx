import { v4 as uuidv4 } from 'uuid';
import { createAction } from '@reduxjs/toolkit';

const addContact = createAction('contacts/add', (text, number) => ({
  payload: {
    id: uuidv4(),
    text,
    number,
  },
}));

const deleteContact = createAction('contacts/delete');

const changeFilter = createAction('contacts/changeFilter');

const contactsActions = { addContact, deleteContact, changeFilter };
export default contactsActions;
