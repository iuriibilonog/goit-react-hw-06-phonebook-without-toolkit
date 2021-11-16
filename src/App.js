import s from "./App.module.css";
import "./App.module.css";
import ContactsForm from "./components/ContactsForm";
import Contacts from "./components/Contacts";
import FilterField from "./components/FilterField";

function App() {
  return (
    <div className={s.app}>
      <h1 className={s.title}>Phonebook</h1>
      <ContactsForm />
      <h2 className={s.title}>Contacts</h2>
      <FilterField />
      <Contacts />
    </div>
  );
}

export default App;
