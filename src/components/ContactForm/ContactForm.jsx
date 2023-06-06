import { useState, useRef } from 'react';
import { nanoid } from 'nanoid';
import {
  Form,
  ContainerInput,
  Input,
  Label,
  Button,
} from './ContactForm.styled.jsx';
import { showErrorToast } from '../../functionError/showErrorToast.js';

import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/operations.js';
import { getContacts } from 'redux/contacts/selectors.js';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const nameInputId = nanoid();
  const telInputId = nanoid();
  const submitButton = useRef();

  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleChange = event => {
    const { name, value } = event.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        break;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (!name || !number) {
      showErrorToast('Please fill in all fields');
      return;
    }

    const isValidName = /^[\p{L}\s]+$/u;
    if (!isValidName.test(name)) {
      showErrorToast('Please enter a valid name');
      return;
    }

    const isValidPhone = /^[0-9\s-]+$/;
    if (!isValidPhone.test(number)) {
      showErrorToast('Please enter a valid phone number');
      return;
    }

    const isContactExistName = isContactExist(name);
    if (isContactExistName) {
      showErrorToast('Already exists!');
      return;
    }

    dispatch(addContact({ name, number }));
    reset();
    submitButton.current.focus();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  const isContactExist = name => {
    const isExist = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    return isExist;
  };

  return (
    <Form onSubmit={handleSubmit}>
      <ContainerInput>
        <Label htmlFor={nameInputId}>
          Name
          <Input
            className="input"
            type="text"
            name="name"
            placeholder="Enter name"
            id={nameInputId}
            value={name}
            onChange={handleChange}
          />
        </Label>
      </ContainerInput>
      <ContainerInput>
        <Label htmlFor={telInputId}>
          Phone
          <Input
            className="input"
            type="tel"
            name="number"
            placeholder="Enter phone number"
            id={telInputId}
            value={number}
            onChange={handleChange}
          />
        </Label>
      </ContainerInput>
      <Button type="submit" ref={submitButton}>
        Add contact
      </Button>
    </Form>
  );
};
