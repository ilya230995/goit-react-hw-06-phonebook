import PropTypes from 'prop-types';
import { useState } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions';
import s from './Phonebook.module.css';

function Phonebook({ contacts, onSave }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const existContact = number => {
    return contacts.find(
      contact => contact.number.toLowerCase() === number.toLowerCase(),
    );
  };

  const handleOnSubmit = e => {
    e.preventDefault();

    if (existContact(number)) {
      alert(`Already in contacts ${name}`);
      return;
    }

    onSave(name, number);

    setName('');
    setNumber('');
  };

  const handleChange = e => {
    switch (e.currentTarget.name) {
      case 'name':
        setName(e.currentTarget.value);
        break;
      case 'number':
        setNumber(e.currentTarget.value);
        break;
      default:
        return;
    }
  };

  return (
    <form className={s.phoneBookForm} onSubmit={handleOnSubmit}>
      <label className={s.phoneBookLabel}>
        Name{' '}
        <input
          type="text"
          value={name}
          onChange={handleChange}
          name="name"
          className={s.phoneBookInput}
        />
      </label>
      <label className={s.phoneBookLabel}>
        Number{' '}
        <input
          type="text"
          value={number}
          onChange={handleChange}
          name="number"
          className={s.phoneBookInput}
        />
      </label>
      <button className={s.submitPhonebook} type="submit">
        Add Contact
      </button>
    </form>
  );
}
const mapStateToProps = state => ({
  contacts: state.contacts.items,
});
const mapDispatchToProps = dispatch => ({
  onSave: (name, number) => dispatch(actions.addContact(name, number)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Phonebook);

Phonebook.propTypes = {
  onSave: PropTypes.func.isRequired,
};
