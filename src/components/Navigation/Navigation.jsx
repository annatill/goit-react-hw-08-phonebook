import { useAuth } from 'components/App/Hooks/useAuth';
import { NavItem, Nav, Icon } from './Navigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <Nav>
      <NavItem to="/">
        <Icon />
        Phonebook
      </NavItem>
      {isLoggedIn && <NavItem to="/contacts">Contacts</NavItem>}
    </Nav>
  );
};
