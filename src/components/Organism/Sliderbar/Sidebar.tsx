import React from 'react';
import styled from 'styled-components';
import { theme } from '../../../theme/mainTheme';
import ButtonIconsSidebar from '../../Atoms/ButtonIconSidebar/ButtonIconSidebar';
import { NavLink } from 'react-router-dom';
import { ContentButton } from '../../Atoms/ButtonIconSidebar/content/ContentButton';
import addIcon from '../../Assets/icons/add.svg';
import homeIcon from '../../Assets/icons/home_app_logo.svg';
import { UrlTypes } from '../../../types/UrlTypes';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLogout } from '../../../Redux/reducers/loginRedux';
import { useTranslation } from 'react-i18next';
import ListOfWallet from '../../Atoms/ListOfWallet/walletList';

type PropsWallets = {
  numberWalletUser: number;
  nameOfWallet: string;
  typeOfCurrency: string;
};

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
  const wallets = useSelector((state: any) => state.wallet);
  const listWallets = wallets.walletList;
  console.log(listWallets);
  const { t, i18n } = useTranslation();
  const dispatch: any = useDispatch();
  const logOut = () => {
    return dispatch(fetchLogout());
  };

  return (
    <SidebarWrapper>
      <StyledLinksList>
        <li>
          <ButtonIconsSidebar as={NavLink} to={'/'}>
            <ContentButton title={t('Home Page')} icon={homeIcon} />
          </ButtonIconsSidebar>
        </li>
        <li>
          <ButtonIconsSidebar as={NavLink} to={'/' + UrlTypes.AddWallet}>
            <ContentButton title={t('Add new wallet')} icon={addIcon} />
          </ButtonIconsSidebar>
        </li>
        <li>
          {listWallets.map((wallets: PropsWallets) => (
            <ListOfWallet
              as={NavLink}
              key={wallets.numberWalletUser}
              title={wallets.nameOfWallet}
            />
          ))}
        </li>
      </StyledLinksList>
    </SidebarWrapper>
  );
};
