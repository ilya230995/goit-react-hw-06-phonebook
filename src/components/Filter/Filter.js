import s from './Filter.module.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions';

function Filter({ value, onChange }) {
  return (
    <label className={s.filterPhoneboke}>
      <input
        type="text"
        value={value}
        onChange={onChange}
        name="filter"
        className={s.filterInput}
      />
    </label>
  );
}

const mapStateToProps = state => ({
  value: state.contacts.filter,
});

const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(actions.filter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
