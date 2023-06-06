import { ContactListItem } from '../ContactListItem/ContactListItem';
import { ListContacts, Contact } from './ContactList.styled.jsx';
import { useSelector } from 'react-redux';

import {
  getLoading,
  getError,
  getVisibleContacts,
} from 'redux/contacts/selectors.js';
import { Loader } from 'components/Loader/Loader';

export const ContactList = () => {
  const contacts = useSelector(getVisibleContacts);
  const isLoading = useSelector(getLoading);
  const isError = useSelector(getError);

  return (
    <ListContacts>
      {isLoading && !isError && <Loader />}
      {contacts.map(contact => {
        return (
          <Contact key={contact.id}>
            <ContactListItem contact={contact} />
          </Contact>
        );
      })}
    </ListContacts>
  );
};
