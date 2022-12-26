import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { theme } from '../../../theme/mainTheme';
import ButtonIconsSidebar from '../../Atoms/ButtonIconSidebar/ButtonIconSidebar';
import { NavLink } from 'react-router-dom';
import { ContentButton } from '../../Atoms/ButtonIconSidebar/content/ContentButton';
import addIcon from '../../Assets/icons/add.svg';
import homeIcon from '../../Assets/icons/home_app_logo.svg';
import { UrlTypes } from '../../../types/UrlTypes';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { ListOfWallet } from '../../Atoms/ListOfWallet/ListOfWallet';
import { fetchDownloadWallet } from '../../../Redux/reducers/walletRedux';

type PropsWallets = {
  numberWalletUser: number;
  nameOfWallet: string;
  typeOfCurrency: string;
  active: boolean;
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
  const { t, i18n } = useTranslation();
  const dispatch: any = useDispatch();
  const fetchWallet = () => {
    return dispatch(fetchDownloadWallet());
  };
  useEffect(() => {
    fetchWallet();
  }, []);
  const wallet = useSelector((state: any) => state.wallet.walletList);

  return (
    <SidebarWrapper>
      <StyledLinksList>
        <li>
          <ButtonIconsSidebar as={NavLink} to={'/'}>
            <ContentButton title={t('Home Page')} icon={homeIcon} />
          </ButtonIconsSidebar>
        </li>
        {wallet.length <= 5 ? (
          <li>
            <ButtonIconsSidebar as={NavLink} to={'/' + UrlTypes.AddWallet}>
              <ContentButton title={t('Add new wallet')} icon={addIcon} />
            </ButtonIconsSidebar>
          </li>
        ) : null}
        <li>
          {wallet.map((wallet: PropsWallets) => (
            <ListOfWallet
              as={NavLink}
              key={wallet.numberWalletUser}
              title={wallet.nameOfWallet}
              walletList={wallet}
            />
          ))}
        </li>
      </StyledLinksList>
    </SidebarWrapper>
  );
};
