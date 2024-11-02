import { Container, Span, StyledFooter } from './styles';

export const Footer = () => {
  return (
    <StyledFooter>
      <Container $column={true} $center={true}>
        <Span>Some Company 2024</Span>
      </Container>
    </StyledFooter>
  );
};
