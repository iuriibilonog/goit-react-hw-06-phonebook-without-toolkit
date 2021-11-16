import types from "./contacts-type";
import { v4 } from "uuid";

const addNewContact = ({ name, number }) => ({
  type: types.ADD,
  payload: {
    id: v4(),
    name: name,
    number: number,
  },
});

const deleteContact = (contactId) => ({
  type: types.DELETE,
  payload: contactId,
});

const changeFilter = (value) => ({
  type: types.CHANGE_FILTER,
  payload: value,
});

export default { addNewContact, deleteContact, changeFilter };
