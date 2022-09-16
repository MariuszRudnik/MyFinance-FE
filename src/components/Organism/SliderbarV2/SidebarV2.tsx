import React from 'react';
import styled from 'styled-components';
import { theme } from '../../../theme/mainTheme';
import ButtonIconsSidebar from '../../Atoms/ButtonIconSidebar/ButtonIconSidebar';
import { NavLink } from 'react-router-dom';
import { ContentButton } from '../../Atoms/ButtonIconSidebar/content/ContentButton';
import addIcon from '../../Assets/icons/add.svg';
import settings from '../../Assets/icons/settings.svg';
import wallet from '../../Assets/icons/wallet.svg';
import logout from '../../Assets/icons/logout.svg';

const SidebarWrapper = styled.div`
  display: flex;
  padding: 15px;
  align-items: center;
  flex-direction: column;
  width: 310px;
  min-height: 200px;
  border: 2px solid ${theme.navBackground};
  border-radius: 20px;
`;
const StyledLinksList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const SidebarV2 = () => {
  return (
    <SidebarWrapper>
      <StyledLinksList>
        <li>
          <ButtonIconsSidebar as={NavLink} to="/setting">
            <ContentButton title="Add new wallet" icon={addIcon} />
          </ButtonIconsSidebar>
        </li>
        <li>
          <ButtonIconsSidebar as={NavLink} to="/">
            <ContentButton title="List of wallet" icon={wallet} />
          </ButtonIconsSidebar>
        </li>
        <li>
          <ButtonIconsSidebar as={NavLink} to="/news">
            <ContentButton title="Settings" icon={settings} />
          </ButtonIconsSidebar>
        </li>
        <li>
          <ButtonIconsSidebar as={NavLink} to="/log">
            <ContentButton title="Log out" icon={logout} />
          </ButtonIconsSidebar>
        </li>
      </StyledLinksList>
    </SidebarWrapper>
  );
};
