import Container from 'components/Container/Container';
import { Box, Title, Paragraph, Button, Wrapper } from './Hero.styled';

const Hero = () => {
  return (
    <Box>
      <Container>
        <Wrapper>
          <Title>Test assignment for front-end developer</Title>
          <Paragraph>
            What defines a good front-end developer is one that has skilled
            knowledge of HTML, CSS, JS with a vast understanding of User design
            thinking as they'll be building web interfaces with accessibility in
            mind. They should also be excited to learn, as the world of
            Front-End Development keeps evolving.
          </Paragraph>
          <Button to="signup" smooth={true} offset={-20} duration={700}>
            Sign up
          </Button>
        </Wrapper>
      </Container>
    </Box>
  );
};

export default Hero;
