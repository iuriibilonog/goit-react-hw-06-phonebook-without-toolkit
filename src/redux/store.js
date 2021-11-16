import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import contactsReduser from "./contacts/contacts-redusers";

const contactsPersistConfig = {
  key: "contacts",
  storage,
  whitelist: ["items"],
};

const contactsPersistedReducer = persistReducer(
  contactsPersistConfig,
  contactsReduser
);
const rootReduser = combineReducers({
  contacts: contactsPersistedReducer,
});

export const store = createStore(rootReduser, composeWithDevTools());

export const persistor = persistStore(store);
