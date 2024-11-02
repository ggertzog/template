import { Container, ButtonStyles, Span, StyledHeader, StyledLink } from './styles';

export const Header = () => {
  return (
    <StyledHeader>
      <Container $column={false} $center={false}>
        <StyledLink to="/">
          <Span>Some Company</Span>
        </StyledLink>
        <StyledLink to="/contact">
          <ButtonStyles>Contact us</ButtonStyles>
        </StyledLink>
      </Container>
    </StyledHeader>
  );
};
