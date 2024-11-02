import {
    Section,
    Container,
    SecondTitle,
    StyledList,
    ListItem,
    CardTitle,
    CardText,
    ButtonStyles,
    StyledLink,
  } from './styles';
  import data from '../utils/mockdata';
  
  export const List = () => {
    return (
      <Section>
        <Container $column={true} $center={false}>
          <SecondTitle>Also very important title</SecondTitle>
          <StyledList>
            {data.map((item) => (
              <ListItem key={item.title}>
                <CardTitle>{item.title}</CardTitle>
                <CardText>{item.text}</CardText>
              </ListItem>
            ))}
          </StyledList>
          <StyledLink to="/contact">
            <ButtonStyles>Contact us</ButtonStyles>
          </StyledLink>
        </Container>
      </Section>
    );
  };
  