import s from './Contacts.module.css';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import contactsActions  from '../../redux/contacts/contacts-actions'; 


const Contacts = () => {
  
  const dispatch = useDispatch();
  const { items, filter } = useSelector((state) => state.contacts)


  const NormalizeFilter = filter.toLowerCase();

  const contactsArr =  items.filter((item) =>
      item.name.toLowerCase().includes(NormalizeFilter)
    );

  return (
    <ul className={s.contactsList}>
      {contactsArr.map(({ name, number, id}) =>
        <li key={id} className={s.contactItem}>
          <p className={s.contactsName}> {name}: <span className={s.contactsNumber}>{number}</span></p> 
          <button className={s.delBtn} onClick={()=> dispatch(contactsActions.deleteContact(id))} type="button">Delete</button>
        </li>)
      
      }
    </ul>
    
  )
}

Contacts.propTypes = {
  contactsArr: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
      
  ),
  deleteContact: PropTypes.func
  
}

export default Contacts;
