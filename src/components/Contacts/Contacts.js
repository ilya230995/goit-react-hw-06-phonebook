import s from './Contacts.module.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions';

function Contacts({ contacts, onDeleteContact }) {
  return (
    <ul className={s.contactsList}>
      {contacts.map(el => {
        return (
          <li className={s.contactsListItem} key={el.id}>
            {el.name}: {el.number}{' '}
            <button
              className={s.deleteContact}
              onClick={() => onDeleteContact(el.id)}
            >
              Удалить
            </button>
          </li>
        );
      })}
    </ul>
  );
}

const mapStateToProps = state => {
  const { filter, items } = state.contacts;
  const normalizedFilter = filter.toLowerCase();

  const filteredContacts = items.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter),
  );
  return {
    contacts: filteredContacts,
  };
};

const mapDispatchToProps = dispatch => ({
  onDeleteContact: id => dispatch(actions.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
};
