import styled from 'styled-components';
import { colors } from '../vendor/colors';
import { fonts } from '../vendor/fonts';
import { Button } from 'antd';

export const ButtonStyles = styled.button`
  background: ${colors.primary};
  padding: 10px 60px;
  color: ${colors.secondary};
  border-radius: 10px;
  border: none;
  cursor: pointer;
  font-size: 16px;
  
  &:hover {
    background-color: ${colors.hover};
  }
`;

export const FormButtonStyles = styled(Button)`
  padding: 20px 0;
  background-color: ${colors.primary};
  border: none;
  width: 100%;
  font-family: ${fonts.family};
  font-size: 16px;

  &:hover {
    background-color: ${colors.hover};
  }
`;
