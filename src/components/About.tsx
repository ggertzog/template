import { ButtonStyles, Container, SecondTitle, Section, StyledLink } from './styles';

export const About = () => {
  return (
    <Section $secondary>
      <Container $column={true} $center={true}>
        <SecondTitle>Less important title</SecondTitle>
        <StyledLink to='/contact'>
          <ButtonStyles>Contact us</ButtonStyles>
        </StyledLink>
      </Container>
    </Section>
  );
};
