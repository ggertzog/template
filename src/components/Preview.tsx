import { Section, Container, Box, Title, Video, Text } from './styles'; 

export const Preview = () => {
  return (
    <Section $secondary>
      <Container $column={false} $center={false}>
        <Box>
          <Title>Most important title on the page</Title>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores laboriosam porro
            delectus, minima quas corrupti, error itaque iste ut cupiditate aliquam enim.
          </Text>
        </Box>
        <Video
          src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=3vjIS-EYJ8SpVO4C"
          title="YouTube video player"
          loading='lazy'
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen></Video>
      </Container>
    </Section>
  );
};
