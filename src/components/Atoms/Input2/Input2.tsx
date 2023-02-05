import styled, { css } from 'styled-components';
import magnifierIcon from '../../Assets/icons/magnifier.svg';
import { theme } from '../../../theme/mainTheme';

type Props = {
  search?: boolean;
  widthInput?: string;
  textAlign?: string;
  margin?: string;
  icon?: string;
};

export const InputX = styled.input<Props>`
  padding: 10px 20px 10px 40px;
  font-size: ${({ theme }) => theme.fontSize.x};
  font-weight: ${({ theme }) => theme.regular};
  background-color: ${({ theme }) => theme.background};
  border: none;
  border-radius: 5px;
  margin: ${({ margin }) => (margin ? margin : '5px')};
  width: ${({ widthInput }) => (widthInput ? widthInput : '220px')};
  height: 50px;
  text-align: ${({ textAlign }) => (textAlign ? textAlign : 'start')};
  background-image: url(${({ icon }) => (icon ? icon : '')});
  background-position: 15px 50%;
  background-repeat: no-repeat;
  background-size: 15px;

  ::placeholder {
    letter-spacing: 1px;
    color: ${({ theme }) => theme.textColor};
  }
  ${({ search }) =>
    search &&
    css`
      padding: 10px 20px 10px 40px;
      font-size: ${({ theme }) => theme.fontSize.xs};
      background-image: url(${magnifierIcon});
      background-size: 15px;
      background-position: 15px 50%;
      background-repeat: no-repeat;
    `}
`;
const InputBox = styled.div`
  position: relative;
  width: 250px;
`;
const InputText = styled.input`
  width: 100%;
  padding: 10px;
  border: 2px solid ${theme.textColor};
  background: ${theme.tertiary};
  border-radius: 5px;
  outline: none;
  color: ${theme.textColor};
  font-size: 1rem;

  &:focus ~ span {
    color: blue;
    transform: translateX(10px) translateY(-7px);
    font-size: 0.65rem;
    padding: 0 10px;
    background: ${theme.tertiary};
    border-left: 2px solid ${theme.textColor};
    border-right: 2px solid ${theme.textColor};
  }
`;
const SpanName = styled.span`
  position: absolute;
  left: 0;
  top: 0;
  padding: 10px;
  pointer-events: none;
  font-size: 1rem;
  color: ${theme.textColor};
  text-transform: uppercase;
  transition: 0.05s;
`;

export const Input2 = () => {
  return (
    <InputBox>
      <InputText type={'text'}></InputText>
      <SpanName>First Name</SpanName>
    </InputBox>
  );
};
