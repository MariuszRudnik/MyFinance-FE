import React from 'react';
import styled from 'styled-components';
import apps from '../../Assets/icons/apps.svg';
import ButtonIcon from '../../Atoms/ButtonIcon/ButtonIcon';
import Paragraph from '../../Atoms/Paragraph/Paragraph';
import Heading from '../../Atoms/Heading/Heading';
import { theme } from '../../../theme/mainTheme';
import bell from '../../Assets/icons/bell.svg';
import monitoring from '../../Assets/icons/monitoring.svg';
import logo from '../../Assets/iconsLogo/people.jpg';

const NavWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  height: 55px;
  margin: 50px;
`;
const StyleDiv = styled.div`
  display: flex;
  align-items: center;
  grid-gap: 27px;
`;
const Menu = styled.ul`
  display: flex;
`;
const FlexDiv = styled.div`
  display: flex;
  align-items: center;
  grid-gap: 10px;
`;
const MenuItem = styled.li`
  list-style-type: none;
  margin: 0 10px;
  font-family: 'Roboto-Regular', 'Roboto-Bold', 'Roboto-Italic', 'Roboto-Light', sans-serif;
  font-size: 18px;
  font-weight: bold;
  color: ${theme.gray400};
`;
const Image = styled.div`
  width: 40px;
  height: 40px;
  background-image: url(${logo});
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: center;
  border: none;
  border-radius: 10px;
  background-size: cover;
  box-shadow: 1px 1px 2px ${theme.gray400};
`;

export const Navbar = () => {
  return (
    <NavWrapper>
      <StyleDiv>
        <ButtonIcon icon={apps} color="white" />
        <Heading big={'18px'} color={theme.gray400}>
          My Finance
        </Heading>
        <Menu>
          <MenuItem>Blog</MenuItem>
          <MenuItem>Posts</MenuItem>
          <MenuItem>News</MenuItem>
          <MenuItem>Tips</MenuItem>
        </Menu>
      </StyleDiv>
      <StyleDiv>
        <ButtonIcon icon={monitoring}></ButtonIcon>
        <ButtonIcon icon={bell}></ButtonIcon>
        <FlexDiv>
          <Paragraph>Hello User !</Paragraph>
          <Image />
        </FlexDiv>
      </StyleDiv>
    </NavWrapper>
  );
};