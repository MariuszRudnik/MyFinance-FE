import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { theme } from '../../../theme/mainTheme';
import ButtonIconsSidebar from '../../Atoms/ButtonIconSidebar/ButtonIconSidebar';
import { NavLink } from 'react-router-dom';
import { ContentButton } from '../../Atoms/ButtonIconSidebar/content/ContentButton';
import addIcon from '../../Assets/icons/add.svg';
import walletImg from '../../Assets/icons/wallet.svg';
import homeIcon from '../../Assets/icons/home_app_logo.svg';
import { UrlTypes } from '../../../types/UrlTypes';
import { useTranslation } from 'react-i18next';
import arrowIgm from '../../Assets/icons/expand-less.svg';
import { useQuery } from 'react-query';
import axios from 'axios';
import { WalletItems } from '../../Molecules/WalletItem/WalletItem';

const SidebarWrapper = styled.div`
  display: flex;
  padding: 15px;
  align-items: center;
  flex-direction: column;
  width: 310px;
  min-height: 200px;
  border: 2px solid ${theme.tertiary};
  border-radius: 20px;
  margin: 0 50px;
`;
const StyledLinksList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;
const Wrapper = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  flex-direction: column;
  width: 280px;
  min-height: 50px;
  background-color: ${({ theme }) => theme.secondary};
  border-radius: 15px;
  padding: 15px 5px;
  margin: 10px;
`;
const NavigateOfWallet = styled.a`
  cursor: pointer;
  color: ${theme.textColor};
  text-decoration: none;
  &.active {
    text-decoration: none;
  }
`;
const Icon30 = styled.img`
  width: 30px;
  height: 30px;
`;
const Title = styled.p`
  font-family: 'Roboto-Regular', 'Roboto-Bold', 'Roboto-Italic', 'Roboto-Light', sans-serif;
  font-size: 16px;
  font-weight: ${theme.bold};
  color: ${({ color }) => (color ? color : theme.textColor)};
  word-wrap: break-word;
  position: relative;
  margin: 10px 20px;
`;

const TitleWrapper = styled.div`
  display: flex;
  width: 250px;
  height: 40px;
  margin-left: 15px;
  justify-content: space-between;
  align-content: center;
`;

const getWallet = async () => {
  const { data } = await axios.get(`${process.env.REACT_APP_GET_WALLET}`, {
    withCredentials: true,
    headers: { 'Content-Type': 'application/json' }
  });
  return await data;
};
const HeadlinesWrapper = styled.div`
  display: flex;
`;

export const Sidebar = () => {
  const { t, i18n } = useTranslation();
  const { data, isLoading, error } = useQuery('getWallet', getWallet);
  const [selected, setSelected]: any = useState(0);
  const toggle = (index: number) => {
    if (selected == index) {
      return setSelected(null);
    }
    setSelected(index);
  };

  return (
    <SidebarWrapper>
      <StyledLinksList>
        <li>
          <ButtonIconsSidebar as={NavLink} to={'/'}>
            <ContentButton title={t('Home Page')} icon={homeIcon} />
          </ButtonIconsSidebar>
        </li>
        {!isLoading ? (
          <>
            {data.length <= 5 ? (
              <li>
                <ButtonIconsSidebar as={NavLink} to={'/' + UrlTypes.AddWallet}>
                  <ContentButton title={t('Add new wallet')} icon={addIcon} />
                </ButtonIconsSidebar>
              </li>
            ) : null}
          </>
        ) : null}
        {!isLoading ? (
          <li>
            {data.map((item: any, index: number) => (
              <Wrapper key={index}>
                <NavigateOfWallet
                  as={NavLink}
                  to={`/${UrlTypes.ListOfWallet}/${item.numberWalletUser}/operations`}
                  onClick={() => toggle(index)}>
                  <TitleWrapper>
                    <HeadlinesWrapper>
                      <Icon30 src={walletImg} alt="" />
                      <Title>{item.nameOfWallet}</Title>
                    </HeadlinesWrapper>
                    <Icon30 src={arrowIgm} alt="" />
                  </TitleWrapper>
                </NavigateOfWallet>
                {selected == index ? (
                  <WalletItems numberWalletUser={item.numberWalletUser} />
                ) : null}
              </Wrapper>
            ))}
          </li>
        ) : null}
      </StyledLinksList>
    </SidebarWrapper>
  );
};
