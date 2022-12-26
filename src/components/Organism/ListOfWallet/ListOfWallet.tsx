import React, { useState } from 'react';
import styled from 'styled-components';
import arrowIgm from '../../Assets/icons/expand-less.svg';
import walletImg from '../../Assets/icons/wallet.svg';
import { theme } from '../../../theme/mainTheme';
import loadingImage from '../../Assets/icons/login.svg';
import { NavLink } from 'react-router-dom';
import { UrlTypes } from '../../../types/UrlTypes';
import { WalletItems } from './WalletItem';
import { ActiveWallet, fetchDownloadWallet } from '../../../Redux/reducers/walletRedux';
import { useDispatch } from 'react-redux';

const Wrapper = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  flex-direction: column;
  width: 280px;
  min-height: 50px;
  background-color: ${({ theme }) => theme.white};
  border-radius: 15px;
  padding: 15px 5px;
  margin: 10px;
`;
const TitleWrapper = styled.div`
  display: flex;
  width: 250px;
  height: 40px;
  margin-left: 15px;
  justify-content: space-between;
  align-content: center;
`;
const HeadlinesWrapper = styled.div`
  display: flex;
`;
const Icon30 = styled.img`
  width: 30px;
  height: 30px;
`;
const Title = styled.p`
  font-family: 'Roboto-Regular', 'Roboto-Bold', 'Roboto-Italic', 'Roboto-Light', sans-serif;
  font-size: 16px;
  font-weight: ${theme.bold};
  color: ${({ color }) => (color ? color : theme.gray400)};
  word-wrap: break-word;
  position: relative;
  margin: 10px 20px;
`;
const LoadingWrapper = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
`;
const IsLoading = () => {
  return (
    <LoadingWrapper>
      <img src={loadingImage} alt="" />
      <p>Loading...</p>
    </LoadingWrapper>
  );
};
interface walletData {
  numberWalletUser: number;
  nameOfWallet: string;
  typeOfCurrency: string;
}
const NavigateOfWallet = styled.a`
  cursor: pointer;
  color: ${theme.gray400};
  text-decoration: none;
  &.active {
    text-decoration: none;
  }
`;

export const ListOfWallet = ({ title, walletList }: any | string) => {
  const dispatch: any = useDispatch();
  const { numberWalletUser, nameOfWallet, typeOfCurrency, active } = walletList;

  const activeWallet = (id: number) => {
    dispatch(ActiveWallet(id));
  };

  return (
    <Wrapper>
      <NavigateOfWallet
        as={NavLink}
        to={`/${UrlTypes.ListOfWallet}/${numberWalletUser}/wallet`}
        onClick={() => activeWallet(numberWalletUser)}>
        <TitleWrapper>
          <HeadlinesWrapper>
            <Icon30 src={walletImg} alt="" />
            <Title>{title}</Title>
          </HeadlinesWrapper>
          <Icon30 src={arrowIgm} alt="" />
        </TitleWrapper>
      </NavigateOfWallet>
      {active ? <WalletItems numberWalletUser={numberWalletUser} /> : null}
    </Wrapper>
  );
};
