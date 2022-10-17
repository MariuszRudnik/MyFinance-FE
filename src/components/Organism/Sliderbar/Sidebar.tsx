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
import { UrtTypes } from '../../../types/UrtTypes';

const SidebarWrapper = styled.div`
  display: flex;
  padding: 15px;
  align-items: center;
  flex-direction: column;
  width: 310px;
  min-height: 200px;
  border: 2px solid ${theme.white200};
  border-radius: 20px;
  margin: 0 50px;
`;
const StyledLinksList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const Sidebar = () => {
  return (
    <SidebarWrapper>
      <StyledLinksList>
        <li>
          <ButtonIconsSidebar as={NavLink} to={'/' + UrtTypes.AddWallet}>
            <ContentButton title="Add new wallet" icon={addIcon} />
          </ButtonIconsSidebar>
        </li>
        <li>
          <ButtonIconsSidebar as={NavLink} to={'/' + UrtTypes.ListOfWallet}>
            <ContentButton title="List of wallet" icon={wallet} />
          </ButtonIconsSidebar>
        </li>
        <li>
          <ButtonIconsSidebar as={NavLink} to={'/' + UrtTypes.Setting}>
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
