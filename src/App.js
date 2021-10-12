import { useSelector } from 'react-redux';
import ContactForm from './components/ContactForm/contactForm';
import ContactsList from './components/ContactsList/contactsList';
import Filter from './components/Filter/filter';

const App = () => {
  const { contacts } = useSelector(state => state);
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      {contacts.items.length > 0 ? (
        <>
          <h2>Contacts</h2>
          <Filter />
          <ContactsList />
        </>
      ) : null}
    </div>
  );
};

export default App;
