import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import { Form } from './RegisterForm.styled';
import { useState } from 'react';
import { showErrorToast } from '../../functionError/showErrorToast';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPass] = useState('');

  const handleChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPass(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (!name || !email || !password) {
      showErrorToast('Please fill in all fields');
      return;
    }

    if (name.length < 3 || name.length > 20) {
      showErrorToast('Name must be between 3 and 20 characters');
      return;
    }
    if (!email.includes('@')) {
      showErrorToast('Please enter a valid email');
      return;
    }

    if (password.length < 7) {
      showErrorToast('Password must be at least 7 characters');
      return;
    }

    const form = event.target;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };
  return (
    <Form onSubmit={handleSubmit}>
      <label>
        Username
        <input type="text" name="name" value={name} onChange={handleChange} />
      </label>
      <label>
        Email
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
        />
      </label>
      <label>
        Password
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Register</button>
    </Form>
  );
};
