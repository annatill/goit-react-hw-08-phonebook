import { createPortal } from 'react-dom';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { updateContact } from '../../redux/contacts/operations';
import {
  Overlay,
  ModalContainer,
  Form,
  ContainerButton,
  UpdateIcon,
  CancelIcon,
} from './ContactModal.styled';

const modalRoot = document.getElementById('modal-root');

export const ContactModal = ({ onClose, contact }) => {
  const [name, setName] = useState(contact.name);
  const [number, setNumber] = useState(contact.number);
  const dispatch = useDispatch();
  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    dispatch(
      updateContact({
        id: contact.id,
        contact: {
          name: form.name.value,
          number: form.number.value,
        },
      })
    );
    form.reset();
    onClose();
  };

  const handleChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  return createPortal(
    <Overlay onClick={handleBackdropClick}>
      <ModalContainer>
        <Form onSubmit={handleSubmit}>
          <label>
            Name
            <input
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
            />
          </label>
          <label>
            Number
            <input
              type="text"
              name="number"
              value={number}
              onChange={handleChange}
            />
          </label>
          <ContainerButton>
            <button type="submit">
              <UpdateIcon />
              Update contact
            </button>
            <button type="button" onClick={onClose}>
              <CancelIcon />
              Cancel
            </button>
          </ContainerButton>
        </Form>
      </ModalContainer>
    </Overlay>,
    modalRoot
  );
};
