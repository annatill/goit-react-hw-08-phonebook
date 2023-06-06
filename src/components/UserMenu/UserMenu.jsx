import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/operations';
import { useAuth } from 'components/App/Hooks/useAuth';
import { Container, Title, Icon, Button, IconLogout } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Container>
      <Title>
        <Icon />
        Welcome, {user.name}
      </Title>
      <Button type="button" onClick={() => dispatch(logOut())}>
        <IconLogout />
        Log Out
      </Button>
    </Container>
  );
};
