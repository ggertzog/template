import NotFoundStyles from '../components/styles/ui/NotFoundStyles';
import { ButtonStyles } from '../components/styles';
import { Link } from 'react-router-dom';
export const NotFoundPage = () => {
  return (
    <NotFoundStyles>
        Not Found, this page does not exist 😓
        <Link to="/">
            <ButtonStyles>go back</ButtonStyles>
        </Link>
    </NotFoundStyles>
  )
}
