import { useContext } from 'react';
import MyForm from '../components/Form';
import { SecondTitle, Section } from '../components/styles';
import { Context } from '../utils/context';

export const FormPage = () => {
  const context = useContext(Context);

  if (!context) {
    return null;
  }

  const { responseMessage } = context;

  return (
    <Section $secondary>{
      responseMessage 
      ? <SecondTitle>{responseMessage}</SecondTitle> 
      : <MyForm />
    }</Section>
  )
    
};
