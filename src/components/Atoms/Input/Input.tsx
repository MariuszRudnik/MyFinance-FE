import styled, { css } from 'styled-components';
import magnifierIcon from '../../Assets/icons/magnifier.svg';

type Props = {
  search?: boolean;
  widthInput?: string;
  textAlign?: string;
  margin?: string;
};

const Input = styled.input<Props>`
  padding: 15px 30px;
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: ${({ theme }) => theme.regular};
  background-color: ${({ theme }) => theme.background};
  border: none;
  border-radius: 50px;
  margin: ${({ margin }) => (margin ? margin : '5px')};
  width: ${({ widthInput }) => (widthInput ? widthInput : '')};
  text-align: ${({ textAlign }) => (textAlign ? textAlign : 'start')};

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

export default Input;
