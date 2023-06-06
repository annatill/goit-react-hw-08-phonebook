import {
  Container,
  Title,
  LinkSection,
  Text,
  ContainerFooter,
  LinkItem,
  TextFooter,
} from './Home.styled';

const Home = () => {
  return (
    <>
      <Container>
        <Title>Welcome to your Phonebook</Title>
        <Text>
          You can <LinkSection to="/register">register</LinkSection> or{' '}
          <LinkSection to="/login">login</LinkSection> if you already have an
          account. You will be able to add a list of contacts, which you can
          edit, delete or filter.
        </Text>
      </Container>
      <footer>
        <ContainerFooter>
          <TextFooter>
            Copyright ©{' '}
            <LinkItem href="https://github.com/annatill">
              Created by Anna Till
            </LinkItem>{' '}
            2023.
          </TextFooter>
        </ContainerFooter>
      </footer>
    </>
  );
};

export default Home;
