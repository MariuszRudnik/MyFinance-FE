import styled from 'styled-components';
import { theme } from '../../../../theme/mainTheme';
import logo from '../../../Assets/iconsLogo/people.jpg';

export const NavWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  height: 55px;
  margin: 50px;
`;

export const Menu = styled.ul`
  display: flex;
`;
export const FlexDiv = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  grid-gap: 10px;
  padding: 3px 10px;
  border-radius: 10px;
  border: none;
  background: none;

  &:hover {
    background-color: ${({ theme }) => theme.white};
  }
  &:focus {
    background-color: ${({ theme }) => theme.white};
  }
  &:hover + div {
    display: block;
  }
  &:focus + div {
    display: block;
  }
`;
export const MenuItem = styled.li`
  list-style-type: none;
  margin: 0 10px;
  font-family: 'Roboto-Regular', 'Roboto-Bold', 'Roboto-Italic', 'Roboto-Light', sans-serif;
  font-size: 18px;
  font-weight: bold;
  color: ${theme.gray400};
`;
export const ArrowStyles = styled.img`
  width: 24px;

  div:hover > & {
    transform: rotate(-180deg);
  }
`;
export const StyleDiv = styled.div`
  display: flex;
  align-items: center;
  grid-gap: 27px;
`;
