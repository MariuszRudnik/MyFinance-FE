import React from 'react';
import ButtonIcon from '../../Atoms/ButtonIcon/ButtonIcon';
import bulbIcon from '../../Assets/icons/bulb.svg';
import logoutIcon from '../../Assets//icons/logout.svg';
import penIcon from '../../Assets//icons/pen.svg';
import twitterIcon from '../../Assets/icons/twitter.svg';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import iconsLogo from '../../Assets/iconsLogo/logo.png';

type TypeProps = {
  activeColor?: any;
};

const StyledWrapper = styled.nav<TypeProps>`
  position: fixed;
  left: 0;
  top: 0;
  background-color: ${({ activeColor }) => activeColor};
  padding: 25px 0;
  width: 90px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const StyledLogoLink = styled(NavLink)`
  display: block;
  width: 67px;
  height: 67px;
  background-image: url(${iconsLogo});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 80%;
  border: none;
  margin-bottom: 10vh;
`;

const StyledLogoutButton = styled(ButtonIcon)`
  margin-top: auto;
  margin-bottom: 36px;
`;

const StyledLinksList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const Sidebar = ({ activeColor }: TypeProps) => {
  return (
    <StyledWrapper activeColor={activeColor}>
      <StyledLogoLink to="/" />
      <StyledLinksList>
        <li>
          <ButtonIcon as={NavLink} to="/" icon={penIcon} />
        </li>
        <li>
          <ButtonIcon as={NavLink} to="/news" icon={twitterIcon} />
        </li>
        <li>
          <ButtonIcon as={NavLink} to="/setting" icon={bulbIcon} />
        </li>
      </StyledLinksList>
      <StyledLogoutButton as={NavLink} to="/login" icon={logoutIcon} />
    </StyledWrapper>
  );
};
