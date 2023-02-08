import AuthNav from 'components/AuthNav/AuthNav';
import Container from 'components/Container/Container';
import { HandySvg } from 'handy-svg';
import svg from '../../images/logo.svg';
import { HeaderStyled, Box } from './Header.styled';

const Header = () => {
  return (
    <HeaderStyled>
      <Container>
        <Box>
          <HandySvg src={svg} width="104" height="26" />
          <AuthNav />
        </Box>
      </Container>
    </HeaderStyled>
  );
};

export default Header;
