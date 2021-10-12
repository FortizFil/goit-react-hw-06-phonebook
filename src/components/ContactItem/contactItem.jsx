import PropTypes from 'prop-types';
import s from './contactItem.module.css';
import { useDispatch } from 'react-redux';
import contactsActions from '../../redux/contacts/contacts-actions';

const ContactItem = ({ name, number, id }) => {
  const dispatch = useDispatch();

  return (
    <li className={s.contact__item}>
      {name}:{}
      {number}
      <button
        type="button"
        className="TodoList__btn"
        id={id}
        onClick={e => dispatch(contactsActions.deleteContact(e.target.id))}
      >
        Delete
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
  id: PropTypes.string,
};

export default ContactItem;
