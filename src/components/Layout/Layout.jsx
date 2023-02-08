import Header from 'components/Header/Header';
import Hero from 'components/Hero/Hero';
import Container from 'components/Container/Container';
import Users from 'components/Users/Users';
import Form from 'components/Form/Form';

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Container>
          <Users />
          <Form />
        </Container>
      </main>
    </>
  );
};

export default Layout;
