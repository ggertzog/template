import { About } from '../components/About';
import { Preview } from '../components/Preview';
import { List } from '../components/List';
import { Main } from '../components/styles';

export const MainPage = () => {
  return (
    <Main>
      <Preview />
      <List />
      <About />
    </Main>
  );
};
