import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import ContactItem from '../ContactItem/contactItem';

const ContactsList = () => {
  const { contacts } = useSelector(state => state);
  const trimFilter = contacts.filter.trim() === '';
  const filter = contacts.filter;

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.items.filter(contact => contact.text.toLowerCase().includes(normalizedFilter));
  };

  return (
    <ul>
      {trimFilter
        ? contacts.items.map(({ id, text, number }) => (
            <ContactItem key={id} id={id} name={text} number={number} />
          ))
        : getVisibleContacts().map(({ id, text, number }) => (
            <ContactItem key={id} id={id} name={text} number={number} />
          ))}
    </ul>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.array,
  onDeleteContact: PropTypes.func,
};

export default ContactsList;
