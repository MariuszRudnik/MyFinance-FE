import React, { useState } from 'react';
import styled from 'styled-components';
import arrowIgm from '../../Assets/icons/expand-less.svg';
import walletImg from '../../Assets/icons/wallet.svg';
import { theme } from '../../../theme/mainTheme';
import loadingImage from '../../Assets/icons/login.svg';
import { NavLink } from 'react-router-dom';
import { UrlTypes } from '../../../types/UrlTypes';

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
  border-bottom: 2px solid ${({ theme }) => theme.grey300};
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
const LiWallet = styled.li`
  list-style-type: none;
  width: 233px;
  height: 30px;
`;
const ParagraphList = styled.p`
  font-family: 'Roboto-Regular', 'Roboto-Bold', 'Roboto-Italic', 'Roboto-Light', sans-serif;
  font-size: 16px;
  font-weight: ${theme.bold};
  color: ${({ color }) => (color ? color : theme.gray400)};
  word-wrap: break-word;
`;
const LinkOfWallet = styled.a`
  cursor: pointer;
  color: ${theme.gray400};
  text-decoration: none;

  &.active {
    text-decoration: underline;
  }
`;
const NavigateOfWallet = styled(LinkOfWallet)`
  &.active {
    text-decoration: none;
  }
`;

const Wallet = ({ numberWalletUser }: any) => {
  return (
    <>
      <ul>
        <>
          <LiWallet key={numberWalletUser}>
            <ParagraphList>
              <LinkOfWallet
                as={NavLink}
                to={`/${UrlTypes.ListOfWallet}/${numberWalletUser}/wallet`}>
                Wallet
              </LinkOfWallet>
            </ParagraphList>
          </LiWallet>
          <LiWallet>
            <ParagraphList>
              <LinkOfWallet
                as={NavLink}
                to={`/${UrlTypes.ListOfWallet}/${numberWalletUser}/category`}>
                Category
              </LinkOfWallet>
            </ParagraphList>
          </LiWallet>
          <LiWallet>
            <ParagraphList>
              <LinkOfWallet
                as={NavLink}
                to={`/${UrlTypes.ListOfWallet}/${numberWalletUser}/add-wallet`}>
                Add transaction
              </LinkOfWallet>
            </ParagraphList>
          </LiWallet>
        </>
      </ul>
    </>
  );
};

export const ListOfWallet = ({ title, walletList }: any | string) => {
  const [loading, setLoading] = useState(false);
  const walletItem: any = [
    {
      numberWalletUser: 0,
      nameOfWallet: 'Wallet',
      typeOfCurrency: 'PLN'
    }
  ];
  const numberWalletUser = 0;
  return (
    <Wrapper>
      <NavigateOfWallet as={NavLink} to={`/${UrlTypes.ListOfWallet}/${numberWalletUser}/wallet`}>
        <TitleWrapper>
          <HeadlinesWrapper>
            <Icon30 src={walletImg} alt="" />
            <Title>{title}</Title>
          </HeadlinesWrapper>
          <Icon30 src={arrowIgm} alt="" />
        </TitleWrapper>
      </NavigateOfWallet>
      {loading ? <IsLoading /> : <Wallet numberWalletUser={numberWalletUser} />}
    </Wrapper>
  );
};
