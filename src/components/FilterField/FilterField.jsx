import s from './FilterField.module.css';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import contactsActions  from '../../redux/contacts/contacts-actions'; 


const FilterField = () => {

  const { filter } = useSelector((state) => state.contacts);
  const dispatch = useDispatch();


  return (
    <label className={s.filterTitle}> Find contacts by name
      <input className={s.filterInput} type="text" value={filter} onChange={(e) => dispatch(contactsActions.changeFilter(e.target.value))}/>
    </label>
  )
}

FilterField.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func
}

export default FilterField;