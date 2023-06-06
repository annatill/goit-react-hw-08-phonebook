import propTypes from 'prop-types';
import {
  InfoContact,
  Button,
  DeleteIcon,
  EditIcon,
} from './ContactListItem.styled.jsx';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { useState } from 'react';
import { ContactModal } from 'components/ContactModal/ContactModal.jsx';

export const ContactListItem = ({ contact }) => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <InfoContact>{contact.name}</InfoContact>
      <InfoContact>{contact.number}</InfoContact>
      <div>
        <Button type="button" onClick={openModal}>
          <EditIcon />
          Edit
        </Button>
        <Button
          type="button"
          onClick={() => dispatch(deleteContact(contact.id))}
        >
          <DeleteIcon />
          Delete
        </Button>
      </div>

      {isModalOpen && <ContactModal onClose={closeModal} contact={contact} />}
    </>
  );
};

ContactListItem.propTypes = {
  contact: propTypes.shape({
    id: propTypes.string.isRequired,
    name: propTypes.string.isRequired,
    number: propTypes.string.isRequired,
  }),
};
