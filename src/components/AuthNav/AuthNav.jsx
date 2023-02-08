import { Nav, Button } from './AuthNav.styled';

const AuthNav = () => {
  return (
    <Nav>
      <Button to="users" smooth={true} offset={-20} duration={700}>
        Users
      </Button>

      <Button to="signup" smooth={true} offset={-20} duration={700}>
        Sign up
      </Button>
    </Nav>
  );
};

export default AuthNav;
