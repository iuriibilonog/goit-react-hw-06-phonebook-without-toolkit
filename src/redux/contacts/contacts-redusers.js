import { combineReducers } from "redux";
import types from "./contacts-type";

const items = (state = [], { type, payload }) => {
  switch (type) {
    case types.ADD:
      const contactsNames = state.map((item) => item.name.toLowerCase());

      if (contactsNames.includes(payload.name.toLowerCase())) {
        alert(`${payload.name} is already in contacts.`);
      } else {
        return [payload, ...state];
      }

    case types.DELETE:
      return state.filter((contact) => contact.id !== payload);
    default:
      return state;
  }
};

const filter = (state = "", { type, payload }) => {
  switch (type) {
    case types.CHANGE_FILTER:
      return payload;
    default:
      return state;
  }
};

export default combineReducers({
  items: items,
  filter: filter,
});
