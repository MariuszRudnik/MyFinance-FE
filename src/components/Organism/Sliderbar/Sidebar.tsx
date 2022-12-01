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
import { UrlTypes } from '../../../types/UrlTypes';
import { useDispatch } from 'react-redux';
import { fetchLogout } from '../../../Redux/reducers/loginRedux';
import { useTranslation } from 'react-i18next';
import { ListOfWallet } from '../../Atoms/ListOfWallet/ListOfWallet';

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
  const { t, i18n } = useTranslation();
  const dispatch: any = useDispatch();
  const logOut = () => {
    return dispatch(fetchLogout());
  };

  return (
    <SidebarWrapper>
      <StyledLinksList>
        <li>
          <ButtonIconsSidebar as={NavLink} to={'/' + UrlTypes.AddWallet}>
            <ContentButton title={t('Add new wallet')} icon={addIcon} />
          </ButtonIconsSidebar>
        </li>
        <li>
          <ListOfWallet as={NavLink} title={t('List of wallet')} />
        </li>
        <li>
          <ButtonIconsSidebar as={NavLink} to={'/' + UrlTypes.ListOfWallet}>
            <ContentButton title={t('List of wallet')} icon={wallet} />
          </ButtonIconsSidebar>
        </li>
        {/* <li> */}
        {/*   <ButtonIconsSidebar as={NavLink} to={'/' + UrlTypes.Setting}> */}
        {/*     <ContentButton title={t('Settings')} icon={settings} /> */}
        {/*   </ButtonIconsSidebar> */}
        {/* </li> */}
        {/* <li> */}
        {/*   <ButtonIconsSidebar as={NavLink} to={'/'} onClick={logOut}> */}
        {/*     <ContentButton title={t('Log out')} icon={logout} /> */}
        {/*   </ButtonIconsSidebar> */}
        {/* </li> */}
      </StyledLinksList>
    </SidebarWrapper>
  );
};
