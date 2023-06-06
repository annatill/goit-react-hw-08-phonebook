import { Container, NavItem, Icon, IconLogin } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <Container>
      <NavItem to="/register">
        <Icon />
        Register
      </NavItem>
      <NavItem to="/login">
        <IconLogin />
        Log In
      </NavItem>
    </Container>
  );
};
