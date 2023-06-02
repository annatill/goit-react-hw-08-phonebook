import { ContactListItem } from '../ContactListItem/ContactListItem';

import { ListContacts, Contact } from './ContactList.styled.jsx';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors.js';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations.js';
import { getLoading, getError } from 'redux/selectors.js';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts?.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const isLoading = useSelector(getLoading);
  const isError = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  if (!contacts) {
    return;
  }
  return (
    <ListContacts>
      {isLoading && !isError && <b>Request in progress...</b>}
      {getVisibleContacts().map(contact => {
        return (
          <Contact key={contact.id}>
            <ContactListItem contact={contact} />
          </Contact>
        );
      })}
    </ListContacts>
  );
};
